import { Link } from "react-router-dom";
import { ArrowRight, MessageSquareText } from "lucide-react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import ServiceCategory from "../components/ServiceCategory";
import { serviceCategories } from "../data/services";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore AiroLink's eight core service categories: physical security systems, networking, IT infrastructure, IAM & cybersecurity, cloud & productivity, business software, web development, and IT support."
        path="/services"
      />
      <PageHeader
        eyebrow="Our Services"
        title="Technology services organized around how your business actually runs"
        description="Eight service categories covering physical infrastructure, networking, systems, security, cloud, software, web and support — explore each one below."
      />

      {/* Quick category nav */}
      <div className="sticky top-20 z-20 border-b border-navy-900/8 bg-white/95 backdrop-blur">
        <div className="container-page">
          <div className="no-scrollbar flex gap-2 overflow-x-auto py-4">
            {serviceCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="shrink-0 rounded-full border border-navy-900/10 px-4 py-2 text-xs font-medium text-ink-700 transition-colors hover:border-techblue-500 hover:text-techblue-500"
              >
                {cat.shortName}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="container-page">
          {serviceCategories.map((category, index) => (
            <ServiceCategory
              key={category.slug}
              category={category}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="section-pad bg-cloud-50">
        <div className="container-page">
          <div className="mx-auto max-w-xl rounded-3xl border border-navy-900/8 bg-white p-10 text-center shadow-card">
            <MessageSquareText className="mx-auto text-techblue-500" size={30} />
            <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">
              Not sure what solution you need?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Tell us about your business or technical challenge and our team
              will help identify the right technology solution.
            </p>
            <Link to="/contact" className="btn-primary mt-6">
              Talk to an IT Specialist
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
