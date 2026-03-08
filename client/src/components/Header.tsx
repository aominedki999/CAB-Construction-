import { Link } from "wouter";
import React from "react";

/**
 * Header Component
 * Displays the CAB Construction logo and navigation menu
 * Logo URL: https://d2xsxph8kpxj0f.cloudfront.net/310519663394203752/CJU3uYkCku3hDjZVxdYZcc/1000272606_362371fd.png
 */
export default function Header() {
  const [logoError, setLogoError] = React.useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          {!logoError ? (
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663394203752/CJU3uYkCku3hDjZVxdYZcc/1000272606_d83bbe02.png"
              alt="CAB Construction Logo"
              className="h-16 w-auto"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center gap-2">
              <div className="bg-red-600 text-white px-3 py-2 rounded font-bold text-lg">CAB</div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">CAB</span>
                <span className="text-xs text-gray-600">Construction</span>
              </div>
            </div>
          )}
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#mission" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
            Mission
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
            Services
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold">
          Demander un Devis
        </button>
      </div>
    </header>
  );
}
