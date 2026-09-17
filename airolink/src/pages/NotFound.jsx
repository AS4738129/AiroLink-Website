import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for could not be found." path="/404" />
      <section className="flex min-h-[70vh] items-center bg-white">
        <div className="container-page text-center">
          <p className="font-display text-7xl font-bold text-navy-900/10 sm:text-8xl">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            We couldn't find that page.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-500">
            The page you're looking for may have moved or no longer exists.
            Head back home, or explore our services.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home size={16} />
              Back to Home
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
