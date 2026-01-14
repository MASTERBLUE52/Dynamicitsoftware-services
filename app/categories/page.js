import Image from "next/image";
import Link from "next/link";

const serviceCards = [
  {
    title: "Technologies",
    description: (
      <>
        <p className="mb-2">
          <span className="text-purple-400">Web:</span> HTML, DHTML, JavaScript,
          AJAX, VB Script, CSS, PHP, JSP, ASP, Web Services
        </p>
        <p className="mb-2">
          <span className="text-purple-400">Development:</span> C, C++, Java,
          J2EE, .NET (VB, C#)
        </p>
        <p>
          <span className="text-purple-400">Reporting:</span> Crystal Reports,
          Jasper Reports
        </p>
      </>
    ),
    image: "/img/services/tech.jpg",
    link: "#",
  },
  {
    title: "IT Outsourcing",
    description:
      "We deliver flexible outsourced IT services for forward-thinking businesses. Our solutions allow you to scale strategically without the burden of high-risk IT infrastructure or long-term commitments.",
    image: "/img/services/outsourcing.jpg",
    link: "#",
  },
  {
    title: "Our Freelancers",
    description:
      "PHP Developers, .NET Developers, Graphic Designers, Java Developers, Web Designers, SEO Experts, Data Entry Operators, Linux Server Admins, and Mobile App Developers available on demand.",
    image: "/img/services/freelancer.jpg",
    link: "#",
  },
  {
    title: "Startup Outsourcing",
    description:
      "We support startups with tailored development strategies, aligned IT planning, and predictable monthly costs — helping you grow with confidence and stability.",
    image: "/img/services/startup.jpg",
    link: "#",
  },
];

function ServiceCard({ item }) {
  return (
    <div className="bg-[#15122d] border border-purple-800/30 rounded-xl overflow-hidden hover:border-purple-500 transition group">
      <div className="relative h-44">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-purple-400">
          {item.title}
        </h3>

        <div className="text-gray-400 text-sm leading-relaxed">
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <section className="bg-[#0e0b1f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-25 space-y-20">

        {/* INTRO */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Unlimited <span className="text-purple-400">Customization</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
            In a highly competitive environment, even a small advantage can make
            a big difference. Understanding the benefits of global IT
            collaboration and strategic outsourcing helps businesses stay agile,
            innovative, and cost-effective.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {serviceCards.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}