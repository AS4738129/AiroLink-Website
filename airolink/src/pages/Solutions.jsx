import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import SolutionCard from "../components/SolutionCard";
import CTASection from "../components/CTASection";
import { solutions } from "../data/solutions";

export default function Solutions() {
  return (
    <>
      <Seo
        title="Solutions"
        description="Practical technology solution categories from AiroLink: network infrastructure, security & surveillance, intercom, server infrastructure, IAM, cloud & email, connectivity, business software, websites and IT support."
        path="/solutions"
      />
      <PageHeader
        eyebrow="Solutions"
        title="Solution categories, not sales pitches"
        description="A practical breakdown of the technology areas AiroLink works in — each one links through to the full service category behind it."
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.name} solution={solution} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
