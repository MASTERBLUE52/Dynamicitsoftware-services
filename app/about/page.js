export default function AboutPage() {
  return (
    <section className="bg-[#0e0b1f] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24 space-y-16 sm:space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About <span className="text-purple-400">Dynamic IT Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
            The ultimate destination to transform imagination into powerful digital reality
            through simple, effective, and scalable technology solutions.
          </p>
        </div>

        {/* SECTION */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">
            Who We Are
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Dynamic IT Services is a rapidly growing offshore web design and development
            company based in India, founded by a group of skilled professionals from
            diverse technical backgrounds. We specialize in delivering high-quality
            web solutions, web applications, and digital marketing strategies across
            multiple business domains.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            From creative website design to advanced application development and
            result-driven SEO/SEM services, we help businesses build a strong digital
            presence. Our goal is simple — deliver reliable, scalable, and cost-effective
            solutions that exceed expectations.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">
            Our Efforts
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            No challenge is too complex for our team. We focus on delivering the best
            possible solutions within the shortest feasible timeframe by leveraging
            modern technologies, proven methodologies, and efficient workflows.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Every solution we build undergoes careful planning and quality validation
            to ensure reliability, performance, and long-term value. Our customer-first
            approach ensures transparent communication, friendly support, and strong
            professional relationships.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">
            Our Vision
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Our vision is to become a trusted global technology partner by delivering
            world-class digital solutions tailored to modern business needs. We aim to
            simplify complex challenges through smart design, cutting-edge tools, and
            innovative thinking.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            By continuously upgrading our skills and infrastructure, we ensure that
            every client benefits from the latest advancements in technology while
            enjoying a smooth and reliable service experience.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Our mission goes beyond delivering solutions — we dedicate ourselves to
            understanding each client’s goals and ensuring complete satisfaction.
            We measure our success by the growth and performance improvement of the
            businesses we serve.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Guided by our motto,{" "}
            <span className="text-white font-medium">
              “Making Imaginations Live”
            </span>
            , we bring ideas to life with precision, commitment, and creativity.
            Every project receives equal importance, timely delivery, and exceptional
            quality — regardless of size or complexity.
          </p>
        </div>

      </div>
    </section>
  );
}