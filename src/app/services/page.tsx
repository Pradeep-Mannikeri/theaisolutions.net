"use client";

import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import { useState } from "react";
import CountrySelect from "../components/CountrySelect";

export default function Services() {
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

  const isValidPhone = (phone: string) => /^\d{7,15}$/.test(phone);

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
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
        countryCode: "+971",
      });
    } else {
      toast.error("Oops! Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      <Navigation />

      {/* Services Hero Section with App Development Overlay */}
      <section className="container mx-auto px-4 py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#330157] mb-6 funnel-bold">
                <span className="text-[#330157]">Our </span>
                <span className="text-[#66318B]">Services</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#66318B] max-w-xl funnel-regular">
                At AI Solutions, we provide a wide range of strategic services
                designed to empower startups and businesses in their journey
                from idea to market leadership. Here&apos;s a look at what we
                offer:
              </p>
            </div>
            {/* Right Image */}
            <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center md:justify-end relative">
              <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px]">
                <Image
                  src="/assets/images/web-development.png"
                  alt="Services Illustration"
                  width={1100}
                  height={850}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* App Development Overlay */}
          <div className="absolute bottom-0 left-0 max-w-3xl z-10 transform translate-y-[85%]">
            <div className="backdrop-blur-sm bg-[#F7F4FF]/80 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-h-[200px]">
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                  App Development
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                  We build intuitive, scalable mobile apps tailored to your
                  business goals, ensuring a seamless experience across all
                  devices.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                  <Image
                    src="/assets/images/code_image.jpg"
                    alt="App Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Other Services */}
      <section className="container mx-auto px-4 pt-56 sm:pt-60 md:pt-52 pb-32 md:pb-36">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Web Development */}
            <div className="w-full md:w-[40%]">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                  Web Development
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                  From sleek corporate websites to high-performance platforms,
                  we craft digital spaces that truly represent your brand.
                </p>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="w-full md:w-[60%]">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Digital Marketing
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    Our data-driven strategies—SEO, SEM, email campaigns—enhance
                    visibility and drive measurable results.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/MAcImage.png"
                      alt="Digital Marketing Analytics"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Branding */}
            <div className="w-full md:w-[40%]">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                  Branding
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                  We create distinctive brand identities through logo design,
                  storytelling, and visual elements that resonate.
                </p>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="w-full md:w-[60%]">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    UI/UX Design
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    Our user-centric designs offer both form and function,
                    creating experiences that engage and convert.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/uiux.jpg"
                      alt="UI/UX Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Cloud Services */}
            <div className="w-full md:w-[60%]">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Cloud Services
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    Scale faster with our flexible cloud solutions that reduce
                    costs and improve collaboration.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/cloud_image.png"
                      alt="Cloud Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance & Testing */}
            <div className="w-full md:w-[40%]">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                  Quality Assurance & Testing
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                  We ensure your digital products are secure, reliable, and
                  perform flawlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Technical Support & Maintenance */}
            <div className="w-full">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[180px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Technical Support & Maintenance
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    Our team provides continuous support to keep your systems
                    running at peak performance.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/technicalsupport.jpg"
                      alt="Technical Support and Maintenance"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Social Media Strategy & Development */}
            <div className="w-full">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-1/2 pr-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Social Media Strategy & Development
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    We build strong brand presence across platforms, creating
                    content and engagement strategies that connect.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="relative w-full aspect-[16/9] max-w-[400px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/mobile_image.png"
                      alt="Social Media Strategy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sixth Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Content Creation & Management */}
            <div className="w-full md:w-1/2">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Content Creation & Management
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    From blogs to videos, we produce and manage content that
                    aligns with your brand voice and engages your audience.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/laptop_image.png"
                      alt="Content Creation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Analytics */}
            <div className="w-full md:w-1/2">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Social Media Analytics
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    We translate data into insights that help refine strategies
                    and improve engagement.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/smanalytics.jpg"
                      alt="Social Media Analytics"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seventh Row - Machine Learning Solutions */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Machine Learning Solutions */}
            <div className="w-full md:w-1/2">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Machine Learning Solutions
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    We develop custom machine learning models to automate
                    processes, provide predictive insights, and enhance
                    decision-making capabilities.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/machinelearning.jpg"
                      alt="Machine Learning"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Natural Language Processing */}
            <div className="w-full md:w-1/2">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Natural Language Processing
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    Our NLP services enable applications to understand and
                    interpret human language, improving interactions and
                    extracting valuable insights.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/nlp.jpg"
                      alt="Natural Language Processing"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eighth Row - Data Analytics and Visualization */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Data Analytics and Visualization */}
            <div className="w-full md:w-[55%]">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Data Analytics & Visualization
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    We transform complex data into actionable insights through
                    advanced analytics and intuitive visualizations, supporting
                    informed business decisions.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/dataanalytics.jpg"
                      alt="Data Analytics and Visualization"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Predictive Modeling */}
            <div className="w-full md:w-[45%]">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Predictive Modeling
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    Our predictive modeling services forecast trends and
                    behaviors, allowing you to proactively strategize and stay
                    ahead in the market.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/predictivemodelling.jpg"
                      alt="Predictive Modeling"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ninth Row - Data Management and Strategy */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Data Management and Strategy */}
            <div className="w-full md:w-1/2">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Data Management & Strategy
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    We assist in developing robust data management strategies,
                    ensuring data integrity, security, and optimal utilization
                    across your organization.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/datamanagement.jpg"
                      alt="Data Management and Strategy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Photography and Videography */}
            <div className="w-full md:w-1/2">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Brand Photography & Videography
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    We create high-quality visual content that showcases your
                    products, services, and brand story, enhancing your
                    marketing materials.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/brandphotography.jpg"
                      alt="Brand Photography and Videography"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tenth Row - Sales and Business Development */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Sales and Business Development */}
            <div className="w-full">
              <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 min-h-[250px] flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#330157] mb-3 funnel-bold">
                    Sales & Business Development
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-[#66318B] funnel-regular">
                    We provide strategic guidance to expand your market reach,
                    identify new business opportunities, and develop effective
                    sales processes to drive revenue growth.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-[4/3] max-w-[160px] mx-auto rounded-xl overflow-hidden">
                    <Image
                      src="/assets/images/salesbusinessdec.jpg"
                      alt="Sales and Business Development"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#330157] mb-4 funnel-bold">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-[#66318B] max-w-3xl mx-auto funnel-regular">
              Ready to streamline and digitally transform your business? Contact
              us today!
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Form */}
            <div className="w-full max-w-xl">
              <div className="bg-gradient-to-br from-[#66318B]/40 via-[#330157]/30 to-[#66318B]/20 backdrop-blur-md rounded-3xl p-8 shadow-lg">
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
                  </div>
                  <div className="flex gap-2">
                    <CountrySelect
                      value={formData.countryCode}
                      onChange={(value) =>
                        setFormData({ ...formData, countryCode: value })
                      }
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
                    ></textarea>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
