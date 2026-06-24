"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";
import { toast } from "react-hot-toast";
import CountrySelect from "./components/CountrySelect";

function ScrollToTestimonials() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if we need to scroll to testimonials
    if (searchParams.get("scrollTo") === "testimonials") {
      const testimonialsSection = document.querySelector("#testimonials");
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    countryCode: "+971",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      <Suspense fallback={null}>
        <ScrollToTestimonials />
      </Suspense>
      <Navigation />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 sm:py-14 md:py-14 lg:py-16 overflow-hidden">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="z-10 w-full md:w-3/5 lg:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#330157] leading-tight mb-6 sm:mb-8 funnel-extrabold">
              Smart Digital Solutions
              <br className="hidden sm:block" />
              <span className="whitespace-normal sm:whitespace-nowrap">
                to Build, Launch, and
              </span>
              <br className="hidden sm:block" />
              Scale Your Business
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 max-w-xl funnel-regular">
              We partner with startups and enterprises to deliver impactful
              digital experiences from custom app and web development to cloud
              solutions, data analytics, machine learning, and full-scale
              digital marketing. Whatever your vision, we bring it to life with
              precision, creativity, and tech-driven strategy.
            </p>
            <div className="flex justify-start">
              <div
                className="relative flex w-full max-w-[360px] h-[64px] sm:h-[80px] rounded-full overflow-hidden shadow-md p-[5px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(48, 57, 225, 0.3) 30%, rgba(45, 54, 232, 0.6) 70%, rgba(48, 57, 225, 0.7) 100%)",
                }}
              >
                <div className="flex w-full h-full">
                  <Link
                    href="/contact"
                    className="flex-[1.8] flex items-center justify-center text-white font-medium text-base sm:text-lg md:text-[20px] funnel-medium"
                  >
                    Connect with us
                  </Link>
                  <div className="flex-1 px-1.5 py-1.5">
                    <div className="bg-[#3039E1] rounded-full h-full flex items-center justify-center">
                      <Link
                        href="/contact"
                        className="w-full h-full flex items-center justify-center text-white font-medium text-base sm:text-lg md:text-[20px] funnel-medium"
                      >
                        Let&apos;s chat
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center md:justify-end md:absolute md:right-0 lg:right-[-5%] xl:right-[-2%] md:top-1/2 md:transform md:-translate-y-1/2">
            <div className="hero-image-container w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px]">
              <Image
                src="/assets/images/Hero_Image.png"
                alt="Fintech Illustration"
                width={1100}
                height={850}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <section className="relative container mx-auto px-4 py-1 sm:py-2 md:py-3 lg:py-4 overflow-hidden bg-white">
        <div className="flex flex-col items-stretch relative">
          {/* Background "About" text and heading container */}
          <div className="relative mb-16">
            {/* Background "About" text */}
            <div className="absolute top-0 left-0 sm:left-10 md:left-20 lg:left-40 w-1/3 sm:w-1/4 opacity-5 select-none pointer-events-none">
              <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold text-[#330157] funnel-extrabold">
                About
              </h2>
            </div>

            {/* About Us heading positioned to the right */}
            <div className="absolute top-[5vw] sm:top-[4vw] md:top-[3vw] right-0 sm:right-10 md:right-20 lg:right-60 xl:right-140 text-right max-w-[50%] sm:max-w-xs md:max-w-sm">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#330157] mb-1 sm:mb-2 md:mb-3 funnel-bold">
                <span className="text-[#66318B]">About </span>
                <span className="text-[#330157]">Us</span>
              </h2>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-[#330157] funnel-medium">
                Your Trusted Fintech & Tech <br className="hidden sm:block" />{" "}
                Development Partner
              </h3>
            </div>
          </div>

          {/* Content section with images and text box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-8 items-center mt-16">
            {/* Left image - Lady with mobile */}
            <div className="md:col-span-3 flex justify-center md:justify-end relative z-20">
              <div className="relative -ml-0 sm:-ml-6 md:-ml-12">
                {/* Small rectangle behind lady */}
                <div className="absolute top-[90px] right-[60px] w-[120px] sm:w-[190px] h-[180px] sm:h-[180px] rounded-3xl z-0 bg-gradient-to-r from-[#BFB2EC] to-[#A591E1] opacity-60 shadow-sm"></div>
                <Image
                  src="/assets/images/lady_with_mobile.png"
                  alt="Lady interacting with fintech interface"
                  width={450}
                  height={500}
                  className="w-full max-w-[300px] sm:max-w-[350px] h-auto object-contain relative z-10"
                />
              </div>
            </div>

            {/* Center content */}
            <div className="md:col-span-5 mx-auto px-4 sm:px-0">
              <div className="bg-[#E9E3FF] rounded-3xl p-5 sm:p-6 md:p-8 py-7 sm:py-8 md:py-10">
                <p className="text-gray-700 text-sm sm:text-base md:text-lg funnel-regular">
                  Headquartered in Dubai, AI Solutions is a multi-platform
                  technology firm{" "}
                  <span className="text-[#330157] font-semibold funnel-medium">
                    specializing in fintech, cybersecurity, AI & data analytics
                    solutions, and business tech development
                  </span>
                  . Our team of experts leverages the latest advancements to
                  drive digital transformation and innovation across industries.
                </p>
              </div>
            </div>

            {/* Right image - Guy with board */}
            <div className="md:col-span-3 flex justify-center md:justify-start md:justify-end">
              <div className="relative -mr-0 sm:-mr-6 md:-mr-16 lg:-mr-24 -ml-0 sm:-ml-10 md:-ml-0">
                {/* Rectangle behind man */}
                <div className="absolute top-[-40px] sm:top-[-60px] left-[80px] sm:left-[140px] w-[180px] sm:w-[250px] h-[450px] sm:h-[550px] rounded-[30px] z-0 bg-gradient-to-r from-[#BFB2EC] to-[#A591E1] opacity-60 shadow-sm"></div>
                <Image
                  src="/assets/images/guy_with_board.png"
                  alt="Analyst with data dashboard"
                  width={400}
                  height={400}
                  className="w-full max-w-[280px] sm:max-w-[320px] object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Vector Line */}
            <div className="absolute w-full h-full scale-80 -translate-x-16 md:-translate-x-24 lg:-translate-x-32 translate-y-8 md:translate-y-10 lg:translate-y-12">
              {/* <div className="relative w-full h-full max-w-5xl mx-auto">
                <Image
                  src="/assets/images/Vectorline.png"
                  alt="Vector Path"
                  fill
                  className="object-contain opacity-75"
                  priority
                />
              </div> */}
            </div>

            {/* Eclipse 1 - Top */}
            {/* <div className="absolute top-5 md:top-10 left-1/4">
              <Image
                src="/assets/images/Ellipse 1.png"
                alt="Background Circle"
                width={250}
                height={250}
                className="object-contain opacity-15"
              />
            </div> */}
          </div>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Mission */}
            <div className="bg-[#F7F4FF] rounded-3xl p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-[#330157]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <span className="text-[#330157]">Our </span>
                  <span className="text-[#66318B]">Mission</span>
                </h2>
              </div>
              <p className="text-lg text-[#66318B] funnel-regular leading-relaxed mb-6">
                To empower startups and businesses with future-ready digital
                solutions that accelerate growth, enhance user experiences, and
                unlock operational efficiency. We are driven by innovation,
                guided by strategy, and committed to delivering tailored
                technology and marketing solutions that scale with our clients.
                <br />
                <br />
                We deliver on our mission by:
              </p>
              <ul className="space-y-4 text-[#66318B] funnel-regular">
                <li className="flex items-start">
                  <span className="text-[#330157] mr-2">•</span>
                  Building intuitive mobile and web applications with seamless
                  UI/UX
                </li>
                <li className="flex items-start">
                  <span className="text-[#330157] mr-2">•</span>
                  Crafting strong brand identities and impactful digital
                  marketing campaigns
                </li>
                <li className="flex items-start">
                  <span className="text-[#330157] mr-2">•</span>
                  Ensuring reliability through rigorous testing, cloud
                  scalability, and expert support
                </li>
                <li className="flex items-start">
                  <span className="text-[#330157] mr-2">•</span>
                  Leveraging AI, machine learning, and data analytics to drive
                  informed decision-making
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-[#F7F4FF] rounded-3xl p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-[#330157]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <span className="text-[#330157]">Our </span>
                  <span className="text-[#66318B]">Vision</span>
                </h2>
              </div>
              <p className="text-lg text-[#66318B] funnel-regular leading-relaxed mb-6">
                To be a global catalyst for digital transformation, helping
                businesses of all sizes navigate the evolving tech landscape
                with confidence. We envision a world where every idea has the
                tools, strategy, and support to thrive.
                <br />
                <br />
                <br />
                <br />
                We aspire to:
              </p>
              <ul className="space-y-4 text-[#66318B] funnel-regular">
                <li className="flex items-start">
                  <span className="text-[#330157] mr-2">•</span>
                  Lead innovation in software, branding, and data-driven
                  decision-making
                </li>
                <li className="flex items-start">
                  <span className="text-[#330157] mr-2">•</span>
                  ntegrate cutting-edge technologies like NLP, AI, and cloud
                  computing into everyday business
                </li>
                <li className="flex items-start">
                  <span className="text-[#330157] mr-2">•</span>
                  Create meaningful digital experiences that foster brand growth
                  and customer loyalty
                </li>
                <li className="flex items-start">
                  <span className="text-[#330157] mr-2">•</span>
                  Build lasting partnerships focused on sustainable success and
                  continuous evolution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-4 sm:py-8 md:py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Left column - App & Website Development and Digital Marketing */}
          <div className="flex flex-col space-y-8">
            {/* App & Website Development */}
            <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 flex flex-col justify-between aspect-square max-w-[280px] mx-auto lg:mx-0 lg:ml-auto">
              <div>
                <h3 className="text-xl font-bold text-[#66318B] mb-3 funnel-bold">
                  App & Website Development
                </h3>
                <p className="text-[#66318B] text-sm funnel-regular">
                  Expert development of secure payment systems, digital banking
                  platforms, and financial software. Specializing in:
                </p>
                <ul className="mt-2 space-y-1 text-[#66318B] text-sm funnel-regular">
                  <li>• Payment gateway integration</li>
                  <li>• Mobile banking solutions</li>
                  <li>• Real-time transaction systems</li>
                </ul>
              </div>
              <div className="flex justify-end mt-auto">
                <Link
                  href="/services"
                  aria-label="Learn more about App & Website Development"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#330157]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 flex flex-col justify-between aspect-square max-w-[280px] mx-auto lg:mx-0 lg:ml-auto">
              <div>
                <h3 className="text-xl font-bold text-[#66318B] mb-3 funnel-bold">
                  Digital Marketing:
                </h3>
                <p className="text-[#66318B] text-sm funnel-regular">
                  Advanced analytics for smarter decision-making and automation.
                </p>
              </div>
              <div className="flex justify-end mt-auto">
                <Link
                  href="/services"
                  aria-label="Learn more about Digital Marketing"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#330157]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Center column - Title and AI driven CRM/ERP Solutions */}
          <div className="flex flex-col space-y-8 items-center justify-center">
            {/* Services Title */}
            <div className="flex justify-center items-center mb-6 sm:mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#330157] funnel-bold text-center">
                <span className="text-[#330157]">Our </span>
                <span className="text-[#66318B]">Services</span>
              </h2>
            </div>

            {/* Ai driven CRM/ERP Solutions */}
            <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 flex flex-col justify-between aspect-square max-w-[280px] w-full">
              <div>
                <h3 className="text-xl font-bold text-[#66318B] mb-3 funnel-bold">
                  Ai driven CRM/ERP Solutions
                </h3>
                <p className="text-[#66318B] text-sm funnel-regular">
                  Secure and decentralized financial infrastructure for
                  businesses.
                </p>
              </div>
              <div className="flex justify-end mt-auto">
                <Link
                  href="/services"
                  aria-label="Learn more about AI driven CRM/ERP Solutions"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#330157]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - Financial Accounting and Content Creation */}
          <div className="flex flex-col space-y-8">
            {/* Financial Accounting Solutions */}
            <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 flex flex-col justify-between aspect-square max-w-[280px] mx-auto lg:mx-0">
              <div>
                <h3 className="text-xl font-bold text-[#66318B] mb-3 funnel-bold">
                  Financial Accounting Solutions
                </h3>
                <p className="text-[#66318B] text-sm funnel-regular">
                  End-to-end software development, integration, and maintenance.
                </p>
              </div>
              <div className="flex justify-end mt-auto">
                <Link
                  href="/services"
                  aria-label="Learn more about Financial Accounting Solutions"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#330157]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Content Creation and Management */}
            <div className="bg-[#F7F4FF] rounded-3xl p-5 sm:p-6 flex flex-col justify-between aspect-square max-w-[280px] mx-auto lg:mx-0">
              <div>
                <h3 className="text-xl font-bold text-[#66318B] mb-3 funnel-bold">
                  Content Creation and Management
                </h3>
                <p className="text-[#66318B] text-sm funnel-regular">
                  Strategic content development for fintech platforms, focusing
                  on:
                </p>
                <ul className="mt-2 space-y-1 text-[#66318B] text-sm funnel-regular">
                  <li>• Technical documentation</li>
                  <li>• User guides & tutorials</li>
                  <li>• Financial content strategy</li>
                  <li>• SEO-optimized fintech content</li>
                </ul>
              </div>
              <div className="flex justify-end mt-auto">
                <Link
                  href="/services"
                  aria-label="Learn more about Content Creation and Management"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#330157]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#66318B] funnel-bold">
              <span className="text-[#330157]">Why </span>
              <span className="text-[#66318B]">Choose Us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Expert Team */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-black mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#66318B] mb-3 funnel-bold text-center md:text-left">
                Expert Team
              </h3>
              <p className="text-base sm:text-lg text-[#66318B] funnel-regular text-center md:text-left leading-relaxed">
                Industry professionals with years of experience in fintech.
              </p>
            </div>

            {/* Innovative Solutions */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-black mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.447 3.027a.75.75 0 01.527.92l-4.5 4.5a.75.75 0 01-1.448-.394l4.5-4.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#66318B] mb-3 funnel-bold text-center md:text-left">
                Innovative Solutions
              </h3>
              <p className="text-base sm:text-lg text-[#66318B] funnel-regular text-center md:text-left leading-relaxed">
                Cutting-edge technology tailored to business needs.
              </p>
            </div>

            {/* Scalability & Security */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-black mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M16.5 7.5h-9v9h9v-9z" />
                  <path
                    fillRule="evenodd"
                    d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#66318B] mb-3 funnel-bold text-center md:text-left">
                Scalability & Security
              </h3>
              <p className="text-base sm:text-lg text-[#66318B] funnel-regular text-center md:text-left leading-relaxed">
                Future-proof solutions with the highest security standards.
              </p>
            </div>

            {/* Global Reach */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-black mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504a9.754 9.754 0 016.116-3.985z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#66318B] mb-3 funnel-bold text-center md:text-left">
                Global Reach
              </h3>
              <p className="text-base sm:text-lg text-[#66318B] funnel-regular text-center md:text-left leading-relaxed">
                Supporting businesses worldwide in their digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Success Stories Section */}
      <section className="container mx-auto px-4 py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 funnel-bold">
              <span className="text-[#330157]">Growth</span>
              <span className="text-[#330157]"> & </span>
              <span className="text-[#66318B]">Success Stories</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#66318B] max-w-4xl mx-auto funnel-regular">
              Since our inception, we have partnered with businesses of all
              sizes to drive financial and technological innovation. Our clients
              have witnessed:
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center md:items-stretch md:gap-8 mt-12">
            {/* 50% Increase Card - Left column */}
            <div className="bg-[#E5DEFF] rounded-2xl p-6 flex flex-col max-w-[85%] mx-auto md:max-w-[45%] md:mx-0 md:min-h-[360px]">
              <div className="flex flex-col h-full">
                <div className="flex-grow"></div>
                <div className="text-[#66318B] flex justify-start mb-1">
                  {/* Custom Growth Chart Icon */}
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 20L10 13L13.5 16.5L21.5 7.5"
                      stroke="#330157"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 7.5H21.5V13"
                      stroke="#330157"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="text-6xl font-bold text-[#330157] mb-1">50%</h3>
                <h4 className="text-3xl font-bold text-[#330157] mb-1">
                  increase
                </h4>
                <p className="text-lg text-[#330157]">
                  in operational efficiency
                </p>
              </div>
            </div>

            {/* Right column with stacked cards */}
            <div className="flex flex-col gap-6 md:gap-10 md:w-[45%]">
              {/* Seamless integration Card */}
              <div className="bg-[#E5DEFF] rounded-2xl p-6 flex flex-col max-w-[85%] mx-auto md:mx-0 md:max-w-[100%] h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-grow"></div>
                  <div className="text-[#66318B] mb-4 flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#330157"
                      className="w-12 h-12"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#330157] mb-1">
                    Seamless integration
                  </h3>
                  <p className="text-lg text-[#330157]">of fintech solutions</p>
                </div>
              </div>

              {/* Stronger cybersecurity Card */}
              <div className="bg-[#E5DEFF] rounded-2xl p-6 flex flex-col max-w-[85%] mx-auto md:mx-0 md:max-w-[100%] h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-grow"></div>
                  <div className="text-[#66318B] mb-4 flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#330157"
                      className="w-12 h-12"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.674 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#330157] mb-1">
                    Stronger cybersecurity
                  </h3>
                  <p className="text-lg text-[#330157]">frameworks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="container mx-auto px-4 py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#330157] mb-4 funnel-bold">
              <span className="text-[#330157]">Our </span>
              <span className="text-[#66318B]">Clients</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#66318B] max-w-3xl mx-auto funnel-regular">
              We are proud to work with some of the most forward-thinking
              businesses in fintech and technology.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-10 mt-12">
            <div className="flex flex-row items-center justify-center space-x-4 mx-auto md:mx-0">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 mt-2">
                <Image
                  src="/assets/images/fintrust_bank.png"
                  alt="FinTrust Bank Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#330157] whitespace-nowrap">
                FinTrust Bank
              </h3>
            </div>

            <div className="flex flex-row items-center justify-center space-x-4 mx-auto md:mx-0">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 mt-10">
                <Image
                  src="/assets/images/globalPay.png"
                  alt="GlobalPay Solutions Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#330157] whitespace-nowrap">
                GlobalPay Solutions
              </h3>
            </div>

            <div className="flex flex-row items-center justify-center space-x-4 mx-auto md:mx-0">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <Image
                  src="/assets/images/globalPay.png"
                  alt="TechFin Solutions Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#330157] whitespace-nowrap">
                TechFin Solutions
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="container mx-auto px-4 py-12 sm:py-16 md:py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center">
          {/* Heading on the Left */}
          <div className="md:w-1/3 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#330157] mb-6 funnel-bold mt-16">
              Testimonials
            </h2>
            <p className="text-lg sm:text-xl text-[#66318B] max-w-md mx-auto md:mx-0 funnel-regular">
              Maecenas eget condimentum velit, sit amet feugiat lectus. Class
              aptent.
            </p>
            {/* Navigation Arrows - Now below testimonials */}
            <div className="flex justify-end mt-10 space-x-4 mr-8">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5f3f7] hover:bg-[#e5deff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#7a5c9e]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5f3f7] hover:bg-[#e5deff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#7a5c9e]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards on the Right */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:w-2/3">
            {/* Testimonial 1 */}
            <div className="bg-[#E5DEFF] rounded-2xl p-6 flex flex-col max-w-[85%] mx-auto md:max-w-[30%]">
              <p className="text-lg text-[#330157] mb-4">
                &ldquo;Their innovative solutions have given our business a
                competitive edge in the digital finance market.&rdquo;
              </p>
              <div className="flex items-center mt-auto">
                <div className="relative w-12 h-12 mr-3">
                  <Image
                    src="/assets/images/janeSmith.png"
                    alt="Michelle, Founder of TechFin Solutions - client of AI Solutions"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#330157] font-bold">Michelle</h4>
                  <p className="text-[#66318B] text-sm">
                    Founder of TechFin Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#E5DEFF] rounded-2xl p-6 flex flex-col max-w-[85%] mx-auto md:max-w-[30%]">
              <p className="text-lg text-[#330157] mb-4">
                &ldquo;We couldn&apos;t have asked for a better fintech partner
                to support our expansion.&rdquo;
              </p>
              <div className="flex items-center mt-auto">
                <div className="relative w-12 h-12 mr-3">
                  <Image
                    src="/assets/images/janeSmith.png"
                    alt="John Doe, CTO of GlobalPay Solutions - client of AI Solutions"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#330157] font-bold">John Doe</h4>
                  <p className="text-[#66318B] text-sm">
                    CTO of GlobalPay Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#E5DEFF] rounded-2xl p-6 flex flex-col max-w-[85%] mx-auto md:max-w-[30%]">
              <p className="text-lg text-[#330157] mb-4">
                &ldquo;We couldn&apos;t have asked for a better fintech partner
                to support our expansion.&rdquo;
              </p>
              <div className="flex items-center mt-auto">
                <div className="relative w-12 h-12 mr-3">
                  <Image
                    src="/assets/images/janeSmith.png"
                    alt="Michelle, Founder of TechFin Solutions - client testimonial image"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#330157] font-bold">Michelle</h4>
                  <p className="text-[#66318B] text-sm">
                    Founder of TechFin Solutions
                  </p>
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

          <div className="relative flex flex-col md:flex-row items-stretch">
            {/* Contact Form - Left Side */}
            <div className="w-full md:w-[40%] relative z-20 mt-12">
              <div className="bg-gradient-to-br from-[#66318B]/40 via-[#330157]/30 to-[#66318B]/20 backdrop-blur-md rounded-3xl p-8 shadow-lg md:translate-x-[20%]">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-[#330157] text-[#330157] placeholder-[#66318B]/60"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
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
                      placeholder="Message"
                      rows={4}
                      name="message"
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

            {/* Map Background - Right Side */}
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
                {/* Location Marker Overlay */}
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

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <hr className="border-t border-[#66318B]/20" />
        </div>
      </div>

      {/* Getting More Done Together Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#330157] mb-16 funnel-bold">
            Getting more
            <br />
            done together.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Location */}
            <div>
              <h3 className="text-xl font-bold text-[#330157] mb-2 funnel-bold">
                Location
              </h3>
              <p className="text-lg text-[#66318B] funnel-regular">
                Office No 3402, Sheraton Grand Hotel,
                <br />
                Trade Center First, Dubai,
                <br />
                United Arab Emirates
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl font-bold text-[#330157] mb-2 funnel-bold">
                Email
              </h3>
              <p className="text-lg text-[#66318B] funnel-regular">
                info@theaisolutions.net
              </p>
            </div>

            {/* Phone */}
            {/* <div>
              <h3 className="text-xl font-bold text-[#330157] mb-2 funnel-bold">
                Phone
              </h3>
              <p className="text-lg text-[#66318B] funnel-regular">
                +971 50 954 4036
              </p>
            </div> */}

            {/* Follow */}
            <div>
              <h3 className="text-xl font-bold text-[#330157] mb-2 funnel-bold">
                Follow
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/ai-solutions-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#66318B] hover:text-[#330157] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/aisolutions2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#66318B] hover:text-[#330157] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61575924505103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#66318B] hover:text-[#330157] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="container mx-auto px-4 py-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#66318B] text-sm funnel-regular">
            Copyright © 2025 AI Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
