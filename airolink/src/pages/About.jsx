import { ShieldCheck, HeartHandshake, Zap, Headset } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import PageHeader from "../components/PageHeader";
import { coreValues } from "../data/site";

const valueIcons = {
  Secure: ShieldCheck,
  Reliable: HeartHandshake,
  Efficient: Zap,
  Support: Headset,
};

const capabilities = [
  "IT Infrastructure",
  "Networking",
  "Cybersecurity",
  "Identity & Access Management",
  "Cloud Technologies",
  "Business Software",
  "Connectivity",
  "Website Development",
  "Technical Support",
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="AiroLink IT and Security Services Consultancy is a technology solutions provider focused on helping businesses and institutions build secure, reliable and connected technology environments."
        path="/about"
      />
      <PageHeader
        eyebrow="About AiroLink"
        title="A single technology partner for a smarter, more secure business"
        description="AiroLink IT and Security Services Consultancy is a technology solutions provider focused on helping businesses and institutions build secure, reliable and connected technology environments."
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="What we bring together"
              title="Capabilities that usually sit with separate vendors"
              description="AiroLink combines the disciplines organizations typically source separately, so your infrastructure, security, software and support all work from the same understanding of your business."
            />
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-navy-900/8 bg-cloud-50 px-4 py-3.5 text-sm font-medium text-navy-900"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our values"
            title="What guides how we work"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = valueIcons[value.title];
              return (
                <div
                  key={value.title}
                  className="card-surface flex flex-col items-center p-8 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-techblue-500/10 text-techblue-500">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-navy-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
