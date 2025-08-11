import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/maulaibrhmsyah/",
      icon: "ri-instagram-line",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/10",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/maula-ibrahim-syahwi",
      icon: "ri-linkedin-line",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      name: "GitHub",
      url: "https://github.com/maulaibrahimsyahwi",
      icon: "ri-github-line",
      color: "hover:text-gray-800 dark:hover:text-white",
      bgColor: "hover:bg-gray-800/10",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full  relative overflow-hidden right-0 left-0">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative w-full px-6 py-12">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between mb-8">
            {/* Brand section */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 mb-3 transition-all duration-300 hover:scale-105"
              >
                <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
                  Portfolio
                </h1>
              </button>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs">
                Crafting digital experiences with passion and precision
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Connect
              </h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.name} profile`}
                    className={`group relative w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-md ${social.bgColor} ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center`}
                  >
                    <i
                      className={`${social.icon} text-xl transition-transform group-hover:scale-110`}
                    ></i>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 dark:bg-slate-700 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800 dark:border-t-slate-700"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent mb-6"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between text-sm text-slate-600 dark:text-slate-400">
            {/* Left side - Copyright */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <span>© {currentYear} Maula Ibrahim Syahwi</span>
              </div>
              <span className="hidden md:block text-xs mt-1">
                All rights reserved.
              </span>
            </div>

            {/* Right side - Made with React and Back to top */}
            <div className="flex flex-col items-center md:items-end gap-2 lg:flex-row">
              <span className="flex items-center gap-1 text-xs">
                Made with using React
              </span>
              <span className="hidden lg:block">|</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group text-xs"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <i className="ri-arrow-up-line group-hover:translate-y-[-2px] transition-transform"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="absolute top-6 right-6 hidden lg:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Available for work</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
