import Link from "next/link";

interface FooterProps {
  hideContactInfo?: boolean;
}

export default function Footer({ hideContactInfo = false }: FooterProps) {
  return (
    <>
      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <hr className="border-t border-[#66318B]/20" />
        </div>
      </div>

      {/* Getting More Done Together Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#330157] funnel-bold">
              Getting more
              <br className="md:hidden" />
              <span className="md:ml-2">done together.</span>
            </h2>

            {/* Follow */}
            <div className={hideContactInfo ? "mx-auto md:mx-0" : ""}>
              <div>
                <h3 className="text-xl font-bold text-[#330157] mb-2 funnel-bold">
                  Follow
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="/"
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
                    href="https://www.instagram.com/the_ai_solutions/"
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
                    href="https://www.facebook.com/profile.php?id=61591608441049"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Location */}
            {!hideContactInfo && (
              <>
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
              </>
            )}
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
    </>
  );
}
