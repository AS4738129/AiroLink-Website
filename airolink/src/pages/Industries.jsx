import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import IndustryCard from "../components/IndustryCard";
import CTASection from "../components/CTASection";
import { industries } from "../data/industries";

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve"
        description="AiroLink supports offices, hospitals, schools, government agencies, banks, hotels, retail stores, factories, NGOs and religious organizations across Ghana."
        path="/industries"
      />
      <PageHeader
        eyebrow="Industries We Serve"
        title="Practical technology for every kind of institution"
        description="Businesses, institutions and organizations across Ghana rely on AiroLink for the technology that keeps them secure, connected and productive."
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>

      <CTASection
        title="Don't see your industry listed?"
        description="AiroLink works with organizations of every kind. Tell us about your sector and requirements, and we'll help identify the right technology solution."
        primaryLabel="Request a Quote"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
