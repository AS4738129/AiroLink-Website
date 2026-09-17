// AiroLink AI Agent — reply engine.
//
// If VITE_CHAT_API_URL is set, messages are sent to that backend endpoint
// (expected to return { reply: string }), so a real LLM (e.g. Claude via
// the Anthropic API) can be wired in behind a server you control — the API
// key stays on that server and is never bundled into this frontend code.
//
// Without a backend configured, the agent answers from the site's own
// content (services, industries, solutions, FAQs) using simple keyword
// matching. It's intentionally honest about that limit rather than
// pretending to be a general-purpose AI.
import { serviceCategories } from "../data/services";
import { industries } from "../data/industries";
import { solutions } from "../data/solutions";
import { faqs, siteInfo } from "../data/site";

const GREETING_WORDS = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"];
const QUOTE_WORDS = ["quote", "price", "cost", "pricing", "how much", "estimate", "budget"];
const SUPPORT_WORDS = ["support", "not working", "broken", "issue", "problem", "down", "help me", "fix", "error", "fault"];
const CONTACT_WORDS = ["contact", "phone", "call", "whatsapp", "number", "email", "location", "address", "where are you", "reach you"];
const HUMAN_WORDS = ["human", "agent", "specialist", "talk to someone", "real person"];

function normalize(text) {
  return text.toLowerCase().trim();
}

function scoreCategoryMatch(message, category) {
  const haystacks = [category.name, category.shortName, ...category.services].map((s) =>
    s.toLowerCase()
  );
  let score = 0;
  haystacks.forEach((phrase) => {
    // Reward whole-phrase matches highly, individual significant words a little.
    if (message.includes(phrase)) score += 5;
    phrase
      .split(/[\s/&(),-]+/)
      .filter((w) => w.length > 3)
      .forEach((word) => {
        if (message.includes(word)) score += 1;
      });
  });
  return score;
}

function findBestCategory(message) {
  let best = null;
  let bestScore = 0;
  serviceCategories.forEach((category) => {
    const score = scoreCategoryMatch(message, category);
    if (score > bestScore) {
      bestScore = score;
      best = category;
    }
  });
  return bestScore >= 3 ? best : null;
}

function findMatchingIndustry(message) {
  return industries.find((ind) =>
    message.includes(ind.name.toLowerCase().split(" ")[0].replace(/[&,]/g, ""))
  );
}

function findMatchingFaq(message) {
  return faqs.find((faq) => {
    const words = faq.question
      .toLowerCase()
      .split(/[\s?]+/)
      .filter((w) => w.length > 4);
    const hits = words.filter((w) => message.includes(w)).length;
    return hits >= 2;
  });
}

function includesAny(message, words) {
  return words.some((w) => message.includes(w));
}

// Local, rule-based reply — used when no backend is configured.
function localReply(message) {
  const m = normalize(message);

  if (includesAny(m, HUMAN_WORDS)) {
    return {
      text: `Of course — you can reach the AiroLink team directly on ${siteInfo.phones[0]} or via WhatsApp, or use the Contact page and someone will get back to you.`,
      quickReplies: ["Open Contact page", "Request a Quote"],
    };
  }

  if (includesAny(m, GREETING_WORDS) && m.length < 40) {
    return {
      text: `Hello! I'm the AiroLink assistant. I can help you find the right service, point you to a quote request, or connect you with the support or sales team. What are you working on?`,
      quickReplies: ["Our Services", "Request a Quote", "Get Support", "Contact Us"],
    };
  }

  if (includesAny(m, QUOTE_WORDS)) {
    const category = findBestCategory(m);
    if (category) {
      return {
        text: `For ${category.name.toLowerCase()}, the quickest next step is a quote request — tell us a bit about the project and the team will follow up with pricing based on your requirements.`,
        quickReplies: [`Request a Quote for ${category.shortName}`, "Talk to a specialist instead"],
        link: `/request-quote?service=${category.slug}`,
      };
    }
    return {
      text: `Happy to help you get a quote. AiroLink prices projects based on scope, so the fastest way is our Request a Quote form — pick the service category and describe what you need, and the team will follow up.`,
      quickReplies: ["Open Request a Quote", "Talk to a specialist instead"],
      link: "/request-quote",
    };
  }

  if (includesAny(m, SUPPORT_WORDS)) {
    return {
      text: `Sorry to hear something's not working. For technical issues, the Support page lets you log a ticket with a priority level, and our team will follow up based on urgency. For anything urgent, you can also call ${siteInfo.phones[0]} directly.`,
      quickReplies: ["Open Support page", "Call AiroLink"],
      link: "/support",
    };
  }

  if (includesAny(m, CONTACT_WORDS)) {
    return {
      text: `AiroLink is based in ${siteInfo.location} and serves organizations ${siteInfo.availability.toLowerCase()}. You can call or WhatsApp us on ${siteInfo.phones[0]}, or use the Contact page to send a message.`,
      quickReplies: ["Open Contact page", "WhatsApp AiroLink"],
      link: "/contact",
    };
  }

  const faq = findMatchingFaq(m);
  if (faq) {
    return { text: faq.answer, quickReplies: ["Our Services", "Contact Us"] };
  }

  const category = findBestCategory(m);
  if (category) {
    const items = category.featured.slice(0, 3).join(", ");
    return {
      text: `${category.name} covers things like ${items.toLowerCase()}, and more. Want to see the full list or request a quote for this?`,
      quickReplies: [`View ${category.shortName}`, `Request a Quote for ${category.shortName}`],
      link: `/services/${category.slug}`,
    };
  }

  const industry = findMatchingIndustry(m);
  if (industry) {
    return {
      text: `For ${industry.name.toLowerCase()}, AiroLink typically helps with ${industry.solutions
        .slice(0, 3)
        .join(", ")
        .toLowerCase()}. Want to look at the full industries page or request a quote?`,
      quickReplies: ["View Industries", "Request a Quote"],
      link: "/industries",
    };
  }

  const solutionMatch = solutions.find((s) => m.includes(s.name.toLowerCase()));
  if (solutionMatch) {
    return {
      text: `${solutionMatch.name}: ${solutionMatch.description} Want to see the related services?`,
      quickReplies: ["View related services"],
      link: `/services/${solutionMatch.categorySlug}`,
    };
  }

  return {
    text: `I can help with questions about AiroLink's services, industries, quotes and support. Could you tell me a bit more about what you're looking for — or I can connect you directly with a specialist on ${siteInfo.phones[0]}.`,
    quickReplies: ["Our Services", "Request a Quote", "Talk to a specialist"],
  };
}

export async function getAgentReply(message, history = []) {
  const endpoint = import.meta.env.VITE_CHAT_API_URL;

  if (!endpoint) {
    // Small delay so the widget feels like it's "thinking" rather than a
    // static lookup — this is still an honest, locally-computed answer.
    await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 400));
    return localReply(message);
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });

  if (!response.ok) {
    throw new Error("Agent request failed");
  }

  const data = await response.json();
  return { text: data.reply, quickReplies: data.quickReplies || [], link: data.link };
}
