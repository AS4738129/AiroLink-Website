import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import QuoteForm from "../components/QuoteForm";
import { getServiceCategory } from "../data/services";

const slugToLabel = {
  "physical-technical-security": "Physical Technical & Security Systems",
  networking: "Networking",
  infrastructure: "IT Infrastructure & Systems",
  "iam-cybersecurity": "IAM & Cybersecurity",
  "cloud-productivity": "Cloud & Productivity",
  "business-software": "Business Software",
  "web-development": "Web Design & Development",
  support: "IT Support & Maintenance",
};

export default function RequestQuote() {
  const [searchParams] = useSearchParams();
  const serviceSlug = searchParams.get("service");
  const category = serviceSlug ? getServiceCategory(serviceSlug) : null;
  const presetService = category ? slugToLabel[category.slug] || "" : "";

  return (
    <>
      <Seo
        title="Request a Quote"
        description="Request a quotation from AiroLink IT and Security Services Consultancy. Tell us about your project and our team will contact you."
        path="/request-quote"
      />
      <PageHeader
        eyebrow="Request a Quote"
        title="Tell us what you need, and we'll take it from there"
        description="Share a few details about your organization and requirements. AiroLink will review your request and get in touch to discuss next steps."
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <div className="card-surface p-8 sm:p-10">
              <QuoteForm presetService={presetService} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
