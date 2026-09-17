import { Phone, MapPin, Clock3, MessageCircle } from "lucide-react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import SectionHeading from "../components/SectionHeading";
import { siteInfo, faqs } from "../data/site";

export default function Contact() {
  const digits = siteInfo.whatsapp.replace(/^0/, "233");

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact AiroLink IT and Security Services Consultancy in Kumasi, Ghana. Nationwide availability for IT, networking, cybersecurity and technology support."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="Talk to AiroLink"
        description="AiroLink IT and Security Services Consultancy — based in Kumasi, serving organizations nationwide."
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-techblue-500/10 text-techblue-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-navy-900">
                    Location
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">{siteInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-techblue-500/10 text-techblue-500">
                  <Clock3 size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-navy-900">
                    Availability
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">{siteInfo.availability}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-techblue-500/10 text-techblue-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-navy-900">
                    Telephone
                  </h3>
                  <ul className="mt-1 space-y-1 text-sm text-ink-500">
                    {siteInfo.phones.map((phone) => (
                      <li key={phone}>
                        <a href={`tel:${phone}`} className="hover:text-techblue-500">
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${siteInfo.phones[0]}`} className="btn-secondary">
                <Phone size={16} />
                Call Us
              </a>
              <a
                href={`https://wa.me/${digits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card-surface p-8">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Fill in the form and our team will respond as soon as possible.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud-50">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-8 max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
