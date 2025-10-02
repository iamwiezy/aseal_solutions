// src/components/HealthLanding.jsx
export default function HealthLanding() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6">
      {/* Hero Section */}
      <div className="text-center mt-20">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Ready to Take Control of Your Health?
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Get expert care for weight loss, sexual health, wellness, and more —
          all from the comfort of home, no insurance needed.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow">
            Start Now
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium rounded-full shadow">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 bg-white/70 backdrop-blur-md rounded-2xl shadow p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo & Newsletter */}
          <div>
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="uppercase text-xl font-bold text-gray-800 tracking-tight">
                aseal <span className="text-blue-600">solution</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Sign up for the best medical billing service updates.
            </p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-gray-800">
                Submit
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500 max-w-xs">
              By subscribing, you agree with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>

          {/* Footer Links */}
          <div className="mt-8 md:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Learn</h4>
              <ul className="space-y-1">
                <li>Blogs</li>
                <li>Research & Education</li>
                <li>Certifications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="space-y-1">
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <ul className="space-y-1">
                <li>Providers</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-1">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center text-xs text-gray-500">
          © 2025 Aseal Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
