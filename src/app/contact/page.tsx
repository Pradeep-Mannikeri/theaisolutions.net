"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import toast from "react-hot-toast";
import CountrySelect from "../components/CountrySelect";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    countryCode: "+971",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone: string) =>
    /^\d{7,15}$/.test(phone);

  const isFormValid =
    formData.name.trim() !== "" &&
    isValidEmail(formData.email.trim()) &&
    formData.message.trim() !== "" &&
    formData.phone.trim() !== "" &&
    isValidPhone(formData.phone.trim());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "", phone: "", countryCode: "+971" });
    } else {
      toast.error("Oops! Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#330157] mb-6 funnel-bold">
            Get in Touch
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#66318B] funnel-regular mb-12">
            Ready to streamline and digitally transform your business? Contact
            us today!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {/* <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#330157]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="text-left">
                <p className="text-sm text-[#330157] font-medium">
                  Call or WhatsApp Us
                </p>
                <p className="text-[#66318B]">+971 50 954 4036</p>
              </div>
            </div> */}

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#330157]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="text-left">
                <p className="text-sm text-[#330157] font-medium">Email Us</p>
                <p className="text-[#66318B]">info@theaisolutions.net</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#330157]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-left">
                <p className="text-sm text-[#330157] font-medium">Address</p>
                <p className="text-[#66318B]">
                  Office No 3402, Sheraton Grand Hotel,
                </p>
                <p className="text-[#66318B]">Trade Center First, Dubai,</p>
                <p className="text-[#66318B]">United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative flex flex-col md:flex-row items-stretch">
            {/* Left Form */}
            <div className="w-full md:w-[40%] relative z-20 mt-12">
              <div className="bg-gradient-to-br from-[#66318B]/40 via-[#330157]/30 to-[#66318B]/20 backdrop-blur-md rounded-3xl p-8 shadow-lg md:translate-x-[20%]">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-[#330157] text-[#330157] placeholder-[#66318B]/60"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-[#330157] text-[#330157] placeholder-[#66318B]/60"
                    />
                    {!isValidEmail(formData.email) && formData.email && (
                      <p className="text-sm text-red-500 mt-1">
                        Invalid email format
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <CountrySelect
                      value={formData.countryCode}
                      onChange={(value) => setFormData({ ...formData, countryCode: value })}
                      className="w-1/3"
                    />
                    <div className="w-2/3">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-[#330157] text-[#330157] placeholder-[#66318B]/60"
                        required
                      />
                      {!isValidPhone(formData.phone) && formData.phone && (
                        <p className="text-sm text-red-500 mt-1">
                          Please enter a valid phone number (7-15 digits)
                        </p>
                      )}
                      {!formData.phone && (
                        <p className="text-sm text-red-500 mt-1">
                          Phone number is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-[#330157] text-[#330157] placeholder-[#66318B]/60 resize-none"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`bg-gradient-to-r from-[#3039E1]/90 via-[#3039E1] to-[#3039E1]/90 text-white py-3 px-8 rounded-full font-medium shadow-md transition-all duration-200 ${
                        isFormValid
                          ? "hover:opacity-90 cursor-pointer"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Map */}
            <div className="w-full md:w-[60%] h-[500px] rounded-3xl overflow-hidden bg-[#2A2B3C] relative">
              <a
                href="https://g.co/kgs/3mCNkfu"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer transition-opacity hover:opacity-95"
              >
                <Image
                  src="/assets/images/map.png"
                  alt="AI Solutions Location Map - Click to view in Google Maps"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 px-4 py-2 rounded-full shadow-md">
                    <span className="text-[#330157] text-sm font-medium">
                      {/* Click to view in Google Maps */}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer hideContactInfo={true} />
    </div>
  );
}
