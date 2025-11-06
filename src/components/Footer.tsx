import { MapPin, Phone, Mail, ExternalLink, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 relative">
      {/* Blue section with contact and social media */}
      <div className="bg-[#4A8FBD] text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Outreach and Technical Assistance Network</h3>
              <div className="border-t-2 border-dotted border-white/40 w-48 mb-6"></div>
              <div className="space-y-3 text-base">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>P.O. Box 269003</div>
                    <div>Sacramento, CA 95826-9003</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:916-228-2580" className="hover:underline">916-228-2580</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:support@otan.us" className="hover:underline flex items-center gap-1">
                    support@otan.us
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Social Media</h3>
              <div className="border-t-2 border-dotted border-white/40 w-48 mb-6"></div>
              <p className="mb-6 text-base">
                Keep in touch and follow us on<br />
                the leading social media channels:
              </p>
              <div className="flex gap-4 mb-6">
                <a 
                  href="https://twitter.com/otancde" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#4A8FBD] p-3 rounded hover:bg-gray-100 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/OTANCDE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#4A8FBD] p-3 rounded hover:bg-gray-100 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/otan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#4A8FBD] p-3 rounded hover:bg-gray-100 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/otancde" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#4A8FBD] p-3 rounded hover:bg-gray-100 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <img 
                src="https://www.w3.org/WAI/WCAG2AA-blue" 
                alt="WCAG 2.1 AA Compliant" 
                className="h-12"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dark bottom section with links and disclaimer */}
      <div className="bg-[#2C2C2C] text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="text-center mb-4">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <span>|</span>
              <a href="/" className="hover:underline">About Us</a>
              <span>|</span>
              <a href="/" className="hover:underline">Contact Us</a>
              <span>|</span>
              <a href="/" className="hover:underline">Locate Us</a>
              <span>|</span>
              <a href="/" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="/" className="hover:underline">Accessibility</a>
              <span>|</span>
              <a href="/" className="hover:underline">Sitemap</a>
              <span>|</span>
              <a href="#references" className="hover:underline">References & Sources</a>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 leading-relaxed">
            <p>
              OTAN activities are funded by contract CN240137 from the Adult Education Office, in the Career & College Transition Division, California Department of Education, with funds provided through Federal P.L., 105-220, Section 223. However, OTAN content does not necessarily reflect the position of that department or the U.S. Department of Education.
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#4285F4] hover:bg-[#3367D6] text-white rounded-sm p-3 shadow-lg z-50"
        aria-label="Back to top"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </footer>
  );
};

export default Footer;
