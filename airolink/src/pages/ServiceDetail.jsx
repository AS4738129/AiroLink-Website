import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check, Send } from "lucide-react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { getServiceCategory, serviceCategories } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const category = getServiceCategory(slug);

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const Icon = category.icon;
  const others = serviceCategories.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo
        title={category.name}
        description={category.description}
        path={`/services/${category.slug}`}
      />
      <PageHeader eyebrow="Service Category" title={category.name} description={category.intro} />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-white">
                <Icon size={26} strokeWidth={1.7} />
              </div>
              <p className="text-sm leading-relaxed text-ink-500">
                {category.description}
              </p>
              <div className="flex flex-col gap-3">
                <Link to={`/request-quote?service=${category.slug}`} className="btn-primary">
                  Request This Service
                  <Send size={15} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Talk to an IT Specialist
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Services included
            </h2>
            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {category.services.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-2.5 rounded-lg border border-navy-900/6 bg-cloud-50 px-3.5 py-3 text-sm text-ink-700"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-techblue-500" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud-50">
        <div className="container-page">
          <h2 className="font-display text-xl font-semibold text-navy-900">
            Explore other service categories
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {others.map((cat) => {
              const OtherIcon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  to={`/services/${cat.slug}`}
                  className="card-surface group flex flex-col p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-techblue-500/10 text-techblue-500">
                    <OtherIcon size={19} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold text-navy-900">
                    {cat.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-techblue-500">
                    Explore
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
