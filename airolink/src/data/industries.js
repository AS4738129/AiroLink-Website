import {
  Building2,
  Cross,
  GraduationCap,
  Landmark,
  Banknote,
  BedDouble,
  Store,
  Factory,
  HeartHandshake,
  Church,
} from "lucide-react";

export const industries = [
  {
    slug: "offices-corporate",
    icon: Building2,
    name: "Offices & Corporate Organizations",
    description:
      "Structured networks, business email, access control and support that keep everyday office operations running.",
    solutions: [
      "Network cabling & Wi-Fi",
      "Microsoft 365 / Google Workspace",
      "Access control & CCTV",
      "IT helpdesk support",
    ],
  },
  {
    slug: "hospitals-healthcare",
    icon: Cross,
    name: "Hospitals & Healthcare Facilities",
    description:
      "Reliable connectivity and management software for facilities where uptime and access control matter most.",
    solutions: [
      "Hospital/clinic management software",
      "Structured cabling & Wi-Fi",
      "Access control systems",
      "Server & backup infrastructure",
    ],
  },
  {
    slug: "schools-education",
    icon: GraduationCap,
    name: "Schools & Educational Institutions",
    description:
      "Campus-wide connectivity, school management software and secure access for staff, students and administration.",
    solutions: [
      "School management software",
      "Campus Wi-Fi deployment",
      "CCTV & access control",
      "Microsoft 365 for Education setup",
    ],
  },
  {
    slug: "government-agencies",
    icon: Landmark,
    name: "Government Agencies",
    description:
      "IT infrastructure, identity management and physical security suited to public sector operating requirements.",
    solutions: [
      "IT infrastructure deployment",
      "Identity & access management",
      "CCTV & access control",
      "Network security",
    ],
  },
  {
    slug: "banks-financial",
    icon: Banknote,
    name: "Banks & Financial Institutions",
    description:
      "Security-conscious networking, identity management and support for environments handling sensitive data.",
    solutions: [
      "Network security & VLANs",
      "Identity & access governance",
      "Biometric access control",
      "Server infrastructure",
    ],
  },
  {
    slug: "hotels-hospitality",
    icon: BedDouble,
    name: "Hotels & Hospitality",
    description:
      "Guest Wi-Fi, hotel management systems and connectivity that support a smooth guest experience.",
    solutions: [
      "Guest Wi-Fi portal setup",
      "Hotel management software",
      "CCTV & access control",
      "IP phone / VoIP systems",
    ],
  },
  {
    slug: "retail-shopping",
    icon: Store,
    name: "Retail Stores & Shopping Centers",
    description:
      "POS systems, inventory software and surveillance built for multi-till, multi-branch retail environments.",
    solutions: [
      "POS system installation",
      "Inventory management software",
      "CCTV installation",
      "Multi-branch system deployment",
    ],
  },
  {
    slug: "factories-industrial",
    icon: Factory,
    name: "Factories & Industrial Facilities",
    description:
      "Rugged connectivity, access control and monitoring across production floors and industrial sites.",
    solutions: [
      "Wireless coverage deployment",
      "Access control systems",
      "CCTV & surveillance",
      "Network infrastructure design",
    ],
  },
  {
    slug: "ngos-nonprofits",
    icon: HeartHandshake,
    name: "NGOs & Non-Profit Organizations",
    description:
      "Practical, cost-conscious IT and connectivity solutions that fit programme and donor requirements.",
    solutions: [
      "Business email & cloud setup",
      "Network cabling & Wi-Fi",
      "IT support & maintenance",
      "Data backup & recovery",
    ],
  },
  {
    slug: "religious-organizations",
    icon: Church,
    name: "Religious Organizations",
    description:
      "Sound connectivity, security and support for congregations, offices and community facilities.",
    solutions: [
      "Wi-Fi & connectivity setup",
      "CCTV & access control",
      "Intercom & communication systems",
      "IT support & maintenance",
    ],
  },
];
