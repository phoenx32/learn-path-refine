import { Search, ChevronDown } from "lucide-react";
import otanLogoFull from "@/assets/otan-logo-full.png";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar with small logo, login, and search */}
      <div className="bg-[#4A8FBD] text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" className="text-white text-base hover:underline">
                Join OTAN / Login
              </a>
            </div>
            <div className="flex items-center">
              <div className="bg-white rounded-sm overflow-hidden flex items-center">
                <input
                  type="search"
                  placeholder="search"
                  className="px-3 py-2 text-sm text-gray-700 outline-none w-[280px]"
                  style={{ 
                    backgroundImage: 'url("https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_74x24dp.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '8px center',
                    backgroundSize: '70px',
                    paddingLeft: '90px'
                  }}
                />
                <button className="bg-[#4285F4] px-4 py-2 hover:bg-[#3367D6]">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large centered logo and tagline */}
      <div className="bg-[#4A8FBD] text-white pt-4 pb-6">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <img 
              src={otanLogoFull} 
              alt="OTAN - Outreach and Technical Assistance Network" 
              className="h-32 mb-6"
            />
          </div>
          <p className="text-lg italic mt-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Leading adult education through support for and the effective application of technology.
          </p>
        </div>
      </div>

      {/* Navigation bar with dropdowns */}
      <nav className="bg-[#1E3A5F] text-white border-b-4 border-[#4A8FBD]">
        <div className="max-w-[1400px] mx-auto px-6">
          <ul className="flex items-center justify-center gap-8 py-3.5">
            <li>
              <a href="/" className="flex items-center gap-1 text-base hover:text-gray-200 transition-colors">
                About Us
                <ChevronDown className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-1 text-base hover:text-gray-200 transition-colors">
                Professional Development
                <ChevronDown className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-1 text-base hover:text-gray-200 transition-colors">
                Resources
                <ChevronDown className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-1 text-base hover:text-gray-200 transition-colors">
                Stay Connected
                <ChevronDown className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-1 text-base hover:text-gray-200 transition-colors">
                Video Presentations
                <ChevronDown className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-[1400px] mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="text-[#4A8FBD] hover:underline">Home</a>
            <span>/</span>
            <a href="/resources" className="text-[#4A8FBD] hover:underline">Resources</a>
            <span>/</span>
            <span className="text-gray-800">Digital Learning Guidance</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
