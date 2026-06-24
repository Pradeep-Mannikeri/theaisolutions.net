import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* About Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#330157] mb-6 funnel-bold">
            <span className="text-[#66318B]">About </span>
            <span className="text-[#330157]">Us</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#66318B] funnel-regular">
            Your Trusted Fintech & Tech Development Partner
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F7F4FF] rounded-3xl p-8 sm:p-10 md:p-12">
            <p className="text-lg sm:text-xl text-[#66318B] funnel-regular leading-relaxed">
              Headquartered in Dubai, AI Solutions is a multi-platform
              technology firm{" "}
              <span className="text-[#330157] font-semibold">
                specializing in fintech, cybersecurity, AI & data
              </span>
              <br className="hidden sm:block" />
              <span className="text-[#330157] font-semibold">
                analytics solutions, and business tech development
              </span>
              . Our team of experts leverages the latest
              <br className="hidden sm:block" />
              advancements to drive digital transformation and innovation across
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-[#F7F4FF] rounded-3xl p-8 sm:p-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-[#330157]">Our </span>
                <span className="text-[#66318B]">Mission</span>
              </h2>
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
            <div className="bg-[#F7F4FF] rounded-3xl p-8 sm:p-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-[#330157]">Our </span>
                <span className="text-[#66318B]">Vision</span>
              </h2>
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

      {/* Our Team Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="text-[#330157]">Our </span>
              <span className="text-[#66318B]">Team</span>
            </h2>
            <p className="text-xl text-[#66318B] funnel-regular">
              Meet The People Who Will Be Working With You
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* John Doe */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-52 sm:h-52">
                <div className="absolute inset-0 bg-[#3039E1] rounded-full transform -rotate-12"></div>
                <div className="relative z-10 w-full h-full overflow-hidden rounded-full">
                  <Image
                    src="/assets/images/janedoe1.png"
                    alt="John Doe, Founder and CEO of AI Solutions"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      transform: "scale(1.2)",
                    }}
                    sizes="(max-width: 768px) 192px, 208px"
                    className="rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#330157] mt-6 mb-1 funnel-bold">
                John Doe
              </h3>
              <p className="text-lg text-[#66318B] funnel-regular">
                Found & CEO
              </p>
            </div>

            {/* Jane Doe */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-52 sm:h-52">
                <div className="absolute inset-0 bg-[#3039E1] rounded-full transform -rotate-12"></div>
                <div className="relative z-10 w-full h-full overflow-hidden rounded-full">
                  <Image
                    src="/assets/images/janedoe.png"
                    alt="Jane Doe, Creative Director at AI Solutions"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      transform: "scale(1.2)",
                    }}
                    sizes="(max-width: 768px) 192px, 208px"
                    className="rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#330157] mt-6 mb-1 funnel-bold">
                Jane Doe
              </h3>
              <p className="text-lg text-[#66318B] funnel-regular">
                Creative Director
              </p>
            </div>

            {/* Pete Parker */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-52 sm:h-52">
                <div className="absolute inset-0 bg-[#3039E1] rounded-full transform -rotate-12"></div>
                <div className="relative z-10 w-full h-full overflow-hidden rounded-full">
                  <Image
                    src="/assets/images/janedoe1.png"
                    alt="Pete Parker, Lead Developer at AI Solutions"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      transform: "scale(1.2)",
                    }}
                    sizes="(max-width: 768px) 192px, 208px"
                    className="rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#330157] mt-6 mb-1 funnel-bold">
                Pete Parker
              </h3>
              <p className="text-lg text-[#66318B] funnel-regular">
                Creative Strategist
              </p>
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
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center">
          {/* Heading on the Left */}
          <div className="md:w-1/3 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#330157] mb-6 funnel-bold mt-16">
              Testimonials
            </h2>
            <p className="text-lg sm:text-xl text-[#66318B] max-w-md mx-auto md:mx-0 funnel-regular">
              What our clients say about our services and solutions.
            </p>
            {/* Navigation Arrows */}
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
                &ldquo;AI Solutions transformed our payment infrastructure,
                enhancing security and efficiency.&rdquo;
              </p>
              <div className="flex items-center mt-auto">
                <div className="relative w-12 h-12 mr-3">
                  <Image
                    src="/assets/images/janeSmith.png"
                    alt="Jane Smith, CEO of FinTrust Bank - client of AI Solutions"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#330157] font-bold">Jane Smith</h4>
                  <p className="text-[#66318B] text-sm">CEO of FinTrust Bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        {/* ... existing Get in Touch content ... */}
      </section>

      <Footer />
    </div>
  );
}
