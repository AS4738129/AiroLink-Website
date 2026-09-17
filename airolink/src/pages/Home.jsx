import { Link } from "react-router-dom";
import { ArrowRight, Network, ShieldCheck, Cloud, Server, KeyRound, Code2, LayoutGrid, LifeBuoy } from "lucide-react";
import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { serviceCategories } from "../data/services";
import { howWeWork } from "../data/site";

const partnerPillars = [
  { icon: Server, label: "Infrastructure" },
  { icon: Network, label: "Networking" },
  { icon: ShieldCheck, label: "Physical Security" },
  { icon: KeyRound, label: "Cybersecurity" },
  { icon: KeyRound, label: "Identity" },
  { icon: Cloud, label: "Cloud" },
  { icon: LayoutGrid, label: "Software" },
  { icon: Code2, label: "Web Development" },
  { icon: LifeBuoy, label: "Technical Support" },
];

export default function Home() {
  return (
    <>
      <Seo
        title="IT, Networking & Cybersecurity Consultancy in Ghana"
        description="AiroLink IT and Security Services Consultancy provides IT infrastructure, cybersecurity, networking, cloud, identity, business software and website development for organizations across Ghana."
        path="/"
      />
      <Hero />

      {/* Services overview */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="One technology partner, eight core service areas"
            description="From the network cabling in your walls to the software your team logs into every day, AiroLink covers the full stack of business technology."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <ServiceCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Why AiroLink */}
      <section className="section-pad bg-cloud-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why AiroLink"
            title="One Technology Partner. Multiple Solutions."
            description="Instead of coordinating separate vendors for your network, your security systems, your software and your website, work with a single consultancy that understands how they all fit together."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partnerPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label + i}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-navy-900/5 bg-white p-6 text-center shadow-card"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <span className="text-sm font-semibold text-navy-900">
                    {pillar.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="A practical process from first conversation to ongoing support"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((step, i) => (
              <div key={step.step} className="relative">
                <span className="font-display text-4xl font-bold text-navy-900/10">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {step.description}
                </p>
                {i < howWeWork.length - 1 && (
                  <div className="mt-6 hidden h-px w-full bg-navy-900/10 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries teaser */}
      <section className="section-pad bg-navy-900">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              light
              eyebrow="Who we serve"
              title="Institutions across every sector"
              description="Offices, hospitals, schools, banks, hotels, retail, factories, NGOs and religious organizations across Ghana rely on dependable technology to operate."
            />
            <Link to="/industries" className="btn-outline-light shrink-0">
              View Industries
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
