import React from "react";
import { Compass } from "lucide-react";
import { Link } from "react-router-dom"; 
import Button from "@/components/ui/button"; 
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-semibold tracking-tight">NextStep</span>
            </Link>
            <p className="text-sm text-slate-400">
              Guiding students toward fulfilling careers through personalized mentorship and expert guidance.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link to="#" className="text-slate-400 hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="text-slate-400 hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="text-slate-400 hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-slate-400 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links" items={[
            "Home", "About Us", "Explore Careers", "Find a Mentor", "Career Quiz" 
          ]} />

          {/* Resources */}
          <FooterSection title="Resources" items={[
            "Career Guides", "Industry Reports", "Webinars", "Podcasts", "Success Stories", "FAQ"
          ]} />

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                </svg>
                <span>support@nextstep.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10c0-3.31 2.69-6 6-6 2.21 0 4.15 1.5 4.72 3.58C14.61 7.13 16.4 7 18 7c2.21 0 4 1.79 4 4z" />
                </svg>
                <span>123 Career Avenue, Education City, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} NextStep. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
              <Link key={i} to="#" className="hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable FooterSection Component
const FooterSection = ({ title, items }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-medium">{title}</h3>
    <ul className="space-y-2 text-sm text-slate-400">
      {items.map((item, i) => (
        <li key={i}>
          <Link to="#" className="hover:text-white">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
