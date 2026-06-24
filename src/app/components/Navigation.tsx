"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleTestimonialsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (pathname === "/") {
      // If already on home page, just scroll to testimonials
      const testimonialsSection = document.querySelector("#testimonials");
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home and then scroll
      router.push("/?scrollTo=testimonials");
    }
  };

  return (
    <header className="container mx-auto py-4 sm:py-6 px-4 relative">
      <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
      <div className="flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center ml-2 sm:ml-4">
          <div className="relative h-12 w-36 sm:h-16 sm:w-48 flex items-center justify-start">
            <Image
              src="/assets/images/ana-logo.png.png"
              alt="AI Solutions Logo"
              width={180}
              height={60}
              priority
              className="object-contain object-left"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div className="nav-container">
            <ul className="flex space-x-4 lg:space-x-8">
              <li>
                <Link
                  href="/"
                  className="font-medium text-gray-700 hover:text-[#330157] transition-colors funnel-regular"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-gray-700 hover:text-[#330157] transition-colors funnel-regular"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-medium text-gray-700 hover:text-[#330157] transition-colors funnel-regular"
                >
                  Our services
                </Link>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={handleTestimonialsClick}
                  className="font-medium text-gray-700 hover:text-[#330157] transition-colors funnel-regular cursor-pointer"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center font-medium text-[#330157] funnel-medium"
        >
          Contact us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#330157] z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="pt-24 px-6">
          <nav className="flex flex-col space-y-8">
            <Link
              href="/"
              className="text-xl font-medium text-[#330157] funnel-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-xl font-medium text-[#330157] funnel-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/services"
              className="text-xl font-medium text-[#330157] funnel-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our services
            </Link>
            <a
              href="#testimonials"
              onClick={handleTestimonialsClick}
              className="text-xl font-medium text-[#330157] funnel-medium cursor-pointer"
            >
              Testimonials
            </a>
            <Link
              href="/contact"
              className="text-xl font-medium text-[#330157] funnel-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
