"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const sendEmail = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (sendEmail.ok) {
        toast.success("✉️ Message sent successfully!");
        reset();
      } else {
        toast.error("⚠️ Failed to send message");
      }
    } catch {
      toast.error("🔴 Server error. Try again later.");
    }
  };

  return (
    <footer className="bg-[#0e0b1f] text-gray-300 pt-25">
        <div className="text-4xl font-bold text-center pb-10">
            Contact US
        </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">
            Get in Touch
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Feel free to get in touch with us any convenient way.
            Thank you for your interest in Dynamic IT Services.
            Please use the form for any questions or professional consulting requests.
          </p>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-purple-400 font-medium">Postal Address</p>
              <p>
                3/543, 2nd floor, Morkas Street,<br />
                Zampa Bazar, Surat, INDIA – 395003
              </p>
            </div>

            <div>
              <p className="text-purple-400 font-medium">General Enquiries</p>
              <p>adnan@dynamicit.co.in</p>
            </div>

            <div>
              <p className="text-purple-400 font-medium">Business Phone</p>
              <p>+91 261 2412628 / +91 9825704952</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#15122d] p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full rounded-lg bg-transparent border border-purple-700/40 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-sm text-red-400 mt-1">Name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full rounded-lg bg-transparent border border-purple-700/40 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-400 mt-1">Email is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                {...register("message", { required: true })}
                className="w-full rounded-lg bg-transparent border border-purple-700/40 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-sm text-red-400 mt-1">Message is required</p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className="w-full rounded-lg bg-purple-600 py-2 text-white font-medium hover:bg-purple-700 transition disabled:opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-purple-800/30 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dynamic IT Services. All rights reserved.
      </div>
    </footer>
  );
}
