"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ---------------- HERO SLIDER ---------------- */

const heroImages = [
  "/img/home/hero1.jpg",
  "/img/home/hero2.jpg",
  "/img/home/hero3.jpg",
];

/* ---------------- CLIENTS ---------------- */

const clients = [
  "/img/clients/c1.png",
  "/img/clients/c2.png",
  "/img/clients/c3.png",
  "/img/clients/c4.png",
  "/img/clients/c5.png",
  "/img/clients/c6.png",
  "/img/clients/c7.png",
  "/img/clients/c8.png",
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [clientIndex, setClientIndex] = useState(0);

  /* Hero image rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* Client logo rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleClients = clients.slice(clientIndex, clientIndex + 5).concat(
    clients.slice(0, Math.max(0, clientIndex + 5 - clients.length))
  );

  return (
    <main className="bg-[#0e0b1f] text-gray-300">

      {/* ---------------- HERO ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="relative h-[350px] rounded-xl overflow-hidden border border-purple-800/30">
          <Image
            src={heroImages[currentImage]}
            alt="Dynamic IT"
            fill
            className="object-cover transition-opacity duration-700"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to <span className="text-purple-400">Dynamic IT Services</span>
          </h1>

          <p className="leading-relaxed text-gray-400">
            The ultimate destination to make your imaginations live through simple
            and effective approach. We specialize in web design, web applications,
            and online marketing (SEO/SEM). We also provide CCTV, networking,
            biometric, and complete IT infrastructure services.
          </p>
        </div>
      </section>

      {/* ---------------- DESIGN THINKING ---------------- */}
      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-14">

        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            We Combine Design, Thinking & Technical Craft
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Design thinking uses empathy, experimentation, and innovation to
            create solutions customers truly want. It helps businesses move
            beyond guesswork and make confident, evidence-driven decisions.
          </p>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="bg-[#15122d] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["500+", "Happy Clients"],
            ["1500+", "Photo Capture"],
            ["875+", "Work Completed"],
            ["984+", "Telephonic Talk"],
          ].map(([count, label]) => (
            <div key={label}>
              <p className="text-4xl font-bold text-purple-400">{count}</p>
              <p className="text-gray-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-14">
        <h2 className="text-3xl font-semibold text-white text-center">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            ["Mohammed Z. Papad", "11+ years"],
            ["Maisam Ali Momin", "10+ years"],
            ["Adnan M. Rangwala", "15+ years"],
          ].map(([name, exp]) => (
            <div
              key={name}
              className="bg-[#15122d] border border-purple-800/30 rounded-xl p-6"
            >
              <p className="text-gray-400 leading-relaxed">
                Over {exp} Web Development experience, with proven background
                managing all facets of site development from initial design to
                deployment and client management.
              </p>
              <p className="mt-4 font-medium text-purple-400">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CLIENTS ---------------- */}
      <section className="bg-[#15122d] py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-semibold text-white text-center">
            Our Clients
          </h2>

          <div className="flex justify-center gap-8 flex-wrap">
            {visibleClients.map((logo, i) => (
              <div key={i} className="relative w-28 h-16 opacity-80">
                <Image src={logo} alt="Client" fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
