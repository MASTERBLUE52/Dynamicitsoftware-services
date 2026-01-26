import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Textile Software",
    description:
      "Online accounting and textile process management system designed to simplify complex workflows.",
    image: "/img/portfolio/textile.jpg",
    link: "#",
  },
  {
    title: "Accounting with Inventory",
    description:
      "Complete accounting solution integrated with inventory management for accuracy and efficiency.",
    image: "/img/portfolio/accounting.jpg",
    link: "#",
  },
  {
    title: "Transport Management",
    description:
      "Transport software for managing invoices, challans, vouchers, and logistics operations.",
    image: "/img/portfolio/transport.jpg",
    link: "#",
  },
  {
    title: "Centring Management",
    description:
      "System designed to manage centring supply and operational processes efficiently.",
    image: "/img/portfolio/centring.jpg",
    link: "#",
  },
  {
    title: "CMS",
    description:
      "Customer Management System for handling client data, interactions, and business operations.",
    image: "/img/portfolio/cms.jpg",
    link: "#",
  },
  {
    title: "Payroll",
    description:
      "Payroll and employee management system ensuring accuracy, compliance, and automation.",
    image: "/img/portfolio/payroll.jpg",
    link: "#",
  },
  {
    title: "Training Management System",
    description:
      "Platform for managing student training programs, exams, and performance tracking.",
    image: "/img/portfolio/training.jpg",
    link: "#",
  },
  {
    title: "HRMS",
    description:
      "Human Resource Management System for handling employee records and organizational workflows.",
    image: "/img/portfolio/hrms.jpg",
    link: "#",
  },
];

const websites = [
  {
    title: "Al-Vard Collection",
    description:
      "A premium clothing store based in Surat offering timeless and elegant fashion collections.",
    image: "/img/portfolio/alvard.jpg",
    link: "https://www.alvardcollection.com/",
  },
  {
    title: "K. K. D. F.",
    description:
      "A martial arts organization focused on discipline, fitness, and personal growth.",
    image: "/img/portfolio/kkdf.jpg",
    link: "https://kkdfmartialarts.com/",
  },
  {
    title: "Pulak Sarees",
    description:
      "Leading supplier of sarees, salwar kameez, lehengas, and wedding collections.",
    image: "/img/portfolio/pulak.jpg",
    link: "https://www.pulaksarees.com/",
  },
  {
    title: "Aquanza",
    description:
      "Gateway to premium seafood, delivering high-quality products at the right price.",
    image: "/img/portfolio/aquanza.jpg",
    link: "http://www.aquanza.in/",
  },
];

function PortfolioCard({ item, external = false }) {
  return (
    <Link
      href={item.link}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group bg-[#15122d] border border-purple-800/30 rounded-xl overflow-hidden hover:border-purple-500 transition"
    >
      <div className="relative h-44 sm:h-48">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-5 sm:p-6 space-y-2">
        <h3 className="text-base sm:text-lg font-semibold text-purple-400">
          {item.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <section className="bg-[#0e0b1f] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 space-y-24">
        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-purple-400">Portfolio</span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-400">
            A showcase of software solutions and websites crafted with precision,
            innovation, and performance in mind.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {projects.map((item, i) => (
              <PortfolioCard key={i} item={item} />
            ))}
          </div>
        </div>

        {/* WEBSITES */}
        <div className="space-y-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Websites
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {websites.map((item, i) => (
              <PortfolioCard key={i} item={item} external />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}