import {
  Headset,
  MapPinned,
  ServerCrash,
  Laptop,
  Code2,
  ShieldAlert,
  Activity,
  Wrench,
} from "lucide-react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import SupportForm from "../components/SupportForm";

const supportServices = [
  { icon: Headset, label: "Remote IT Support" },
  { icon: MapPinned, label: "On-Site Support" },
  { icon: Activity, label: "Network Troubleshooting" },
  { icon: ServerCrash, label: "Server Support" },
  { icon: Laptop, label: "Computer Support" },
  { icon: Code2, label: "Software Support" },
  { icon: Wrench, label: "Preventive Maintenance" },
  { icon: ShieldAlert, label: "Security Troubleshooting" },
];

export default function Support() {
  return (
    <>
      <Seo
        title="IT Support"
        description="Get technical assistance for your computers, networks, servers, software and business technology systems from AiroLink's support team."
        path="/support"
      />
      <PageHeader
        eyebrow="IT Support"
        title="Technical Support When You Need It."
        description="Get technical assistance for your computers, networks, servers, software and business technology systems."
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Support services
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {supportServices.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex flex-col gap-3 rounded-xl border border-navy-900/8 bg-cloud-50 p-4"
                  >
                    <Icon size={20} className="text-techblue-500" strokeWidth={1.8} />
                    <span className="text-sm font-medium text-navy-900">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 rounded-xl border border-techblue-500/20 bg-sky-100 p-5 text-sm text-navy-900">
              For critical issues, please also call us directly at{" "}
              <a href="tel:0242797942" className="font-semibold text-techblue-500">
                0242 797 942
              </a>{" "}
              in addition to submitting a request.
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card-surface p-8">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Request Technical Support
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Fill in the details below and our support team will get back
                to you based on the priority and contact method selected.
              </p>
              <div className="mt-7">
                <SupportForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
