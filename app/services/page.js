import Image from "next/image";

const services = [
  {
    title: "Internet Marketing & SEO",
    description:
      "Online success begins with visibility. Our Internet Marketing and SEO services are designed to increase your website’s reach, attract high-quality traffic, and improve search engine rankings. By combining proven SEO strategies with modern digital marketing techniques, we help businesses gain consistent visibility and long-term growth.",
  },
  {
    title: "Secure Web Development",
    description:
      "We deliver custom, secure, and scalable web development solutions tailored to your business goals. Our experienced designers, developers, and analysts work together to create fast, reliable, and secure websites that strengthen your online presence while maintaining high performance and data protection standards.",
  },
  {
    title: "Logo Design",
    description:
      "A strong brand starts with a memorable identity. Our logo design services focus on creating visually appealing and meaningful designs that reflect your brand values. We ensure every logo is unique, professional, and impactful, helping your business stand out in a competitive market.",
  },
  {
    title: "Digital Growth Solutions",
    description:
      "We go beyond development by offering complete digital growth solutions. From strategy planning to execution, we help businesses improve engagement, increase conversions, and build trust with their audience using data-driven and creative approaches.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-[#0e0b1f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-25 space-y-16">

        {/* HERO */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-purple-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400">
            Powerful digital solutions designed to help your business grow,
            scale, and succeed in the modern online world.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/img/services_logo.png"
            alt="Dynamic IT Services"
            width={900}
            height={1000}
            className="opacity-90 rounded-2xl"
            priority
          />
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#15122d] border border-purple-800/30 rounded-xl p-8 hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
