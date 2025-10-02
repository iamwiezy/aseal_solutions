import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  FileText,
  Users,
  CheckCircle,
  Shield,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

// Route Config
const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Career", to: "/career" },
  { name: "Contact", to: "/contact" },
];

// Mega Menu Config
const megaMenuLinks = {
  core: [
    {
      name: "Accounts Receivable",
      href: "#accounts",
      desc: "Track payments & reduce outstanding claims.",
      icon: FileText,
    },
    {
      name: "Credentialing",
      href: "#credentialing",
      desc: "Provider enrollment & licensing management.",
      icon: Users,
    },
  ],
  specialized: [
    {
      name: "Medical Coding",
      href: "#coding",
      desc: "Accurate charge entry for optimized claims.",
      icon: CheckCircle,
    },
    {
      name: "Denials Management",
      href: "#denials",
      desc: "Resolve claim denials quickly & effectively.",
      icon: Shield,
    },
  ],
};

// Reusable MegaMenuLink component
function MegaMenuLink({ link }) {
  const Icon = link.icon;
  return (
    <a
      href={link.href}
      className="flex items-start space-x-3 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-400"
      role="menuitem">
      <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
        <Icon className="text-blue-600" size={20} />
      </div>
      <div>
        <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {link.name}
        </p>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          {link.desc}
        </p>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef(null);

  // Close mega menu on outside click
  useEffect(() => {
    function handleOutsideClick(event) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    }

    if (isMegaMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMegaMenuOpen]);

  // Keyboard handler for mega menu (Escape key to close)
  const handleMegaMenuKeyDown = (e) => {
    if (e.key === "Escape") setIsMegaMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close mobile menu after link click
  const handleMobileLinkClick = () => setIsOpen(false);

  return (
    <nav
      className="bg-white shadow-lg fixed w-full top-0 left-0 z-50 transition-all duration-300"
      aria-label="Primary Navigation">
      {/* Top Contact Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2.5 text-sm bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
            <Phone size={15} />
            <span className="font-medium">+1 (786) 753 8522</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
            <Mail size={15} />
            <span className="font-medium">asealsolution@email.com</span>
          </div>
        </div>
        <div className="text-white/90 text-xs font-medium tracking-wide">
          Trusted Healthcare Solutions Provider
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <div className="uppercase text-xl font-bold text-gray-800 tracking-tight">
            aseal <span className="text-blue-600">solution</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
              onClick={handleMobileLinkClick} // optional for mobile
            >
              {item.name}
            </Link>
          ))}

          {/* Mega Menu */}
          <div
            className="relative"
            ref={megaMenuRef}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}>
            <button
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors flex items-center gap-1 group focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-haspopup="true"
              aria-expanded={isMegaMenuOpen}
              aria-controls="mega-menu"
              onKeyDown={handleMegaMenuKeyDown}>
              Medical Billing
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isMegaMenuOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>

            {/* Mega Dropdown */}
            <div
              id="mega-menu"
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[750px] bg-white shadow-2xl rounded-2xl p-8 grid grid-cols-2 gap-8 transition-all duration-300 ${
                isMegaMenuOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
              role="menu">
              {/* Core Services */}
              <div className="space-y-2" role="none">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Core Services
                </h3>
                {megaMenuLinks.core.map((link) => (
                  <MegaMenuLink key={link.name} link={link} />
                ))}
              </div>

              {/* Specialized Solutions */}
              <div className="space-y-2" role="none">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Specialized Solutions
                </h3>
                {megaMenuLinks.specialized.map((link) => (
                  <MegaMenuLink key={link.name} link={link} />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#quote"
            className="lg:ml-40 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            Get a Quote
          </a>
        </div>
      </div>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleMobileLinkClick}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">
              {item.name}
            </a>
          ))}

          {/* Mobile Mega Menu Section */}
          <details className="group">
            <summary className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer flex items-center justify-between font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">
              Medical Billing
              <ChevronDown
                size={18}
                className="group-open:rotate-180 transition-transform"
              />
            </summary>
            <div className="ml-4 mt-1 space-y-1 pb-2">
              {[...megaMenuLinks.core, ...megaMenuLinks.specialized].map(
                (link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleMobileLinkClick}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {link.name}
                  </a>
                )
              )}
            </div>
          </details>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="#quote"
              onClick={handleMobileLinkClick}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
