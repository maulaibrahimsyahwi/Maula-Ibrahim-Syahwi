import { useState, useEffect } from "react";
import DataImage from "./data";
import Contact from "./pages/Contact";
import Dock from "./components/Dock/Dock";
import { listTools, listProject } from "./data";
import { GoHomeFill } from "react-icons/go";
import { BsFolderFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";

function App() {
  const [showDock, setShowDock] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleScroll = () => {
      // Assumsi tinggi navbar sekitar 70-80px, sesuaikan dengan tinggi navbar Anda
      const navbarHeight = 80;
      const scrolled = window.scrollY > navbarHeight;
      setShowDock(scrolled);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint = 768px
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      icon: <GoHomeFill size={24} />,
      label: "Beranda",
      onClick: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      className: "text-white",
    },
    {
      icon: <MdAccountCircle size={24} />,
      label: "About Me",
      onClick: () => {
        const element = document.getElementById("about");
        element?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <BsFolderFill size={24} />,
      label: "project",
      onClick: () => {
        const element = document.getElementById("project");
        element?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <VscSettingsGear size={24} />,
      label: "tools",
      onClick: () => {
        const element = document.getElementById("tools");
        element?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  // Helper function untuk mendapatkan konfigurasi button berdasarkan status project
  const getButtonConfig = (project) => {
    switch (project.status) {
      case "active":
        return {
          href: project.link,
          text: "View",
          className:
            "bg-violet-700 hover:bg-violet-600 cursor-pointer transition-colors duration-200",
          clickable: true,
          target: "_blank",
        };
      case "expired":
        return {
          text: "Link Expired",
          className: "bg-red-600 cursor-not-allowed opacity-70",
          clickable: false,
          tooltip: "Link sudah tidak dapat diakses",
        };
      case "maintenance":
        return {
          text: "Under Maintenance",
          className: "bg-yellow-600 cursor-not-allowed opacity-70",
          clickable: false,
          tooltip: "Currently in maintenance",
        };
      case "inactive":
        return {
          text: "Not Available",
          className: "bg-red-600 cursor-not-allowed opacity-60",
          clickable: false,
          tooltip: "Project is not active",
        };
      case "coming_soon":
        return {
          text: "Coming Soon",
          className: "bg-gray-500 cursor-not-allowed opacity-50",
          clickable: false,
          tooltip: "Project is under development",
        };
      default:
        return {
          text: "Coming Soon",
          className: "bg-gray-500 cursor-not-allowed opacity-50",
          clickable: false,
          tooltip: "Unknown status",
        };
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-0.5s ">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Beautiful code is born from perseverance</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, My Name Maula Ibrahim Syahwi
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            I have an interest in the field of programming and designer,
            especially in making websites and UI/UX designs, my interest in this
            field has been going on for more than 2 years.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="https://www.canva.com/design/DAGKzOJJ7V0/7Ti46Om54SuLRde9891UEA/view?utm_content=DAGKzOJJ7V0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1717526705"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-colors duration-200"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-colors duration-200"
            >
              See project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] rounded-lg md:ml-auto animate__animated animate__fadeInUp animate__delay-1s "
          loading="lazy"
        />
      </div>

      {/* Dock - Only show when navbar is not visible AND on md and up */}
      {showDock && isDesktop && (
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className="fixed bottom-0 z-[9999] border border-none transition-all duration-300 ease-in-out bg-zinc-800/30 backdrop-blur-md"
        />
      )}

      {/* About Section */}
      <div className="about mt-32 py-10 " id="about">
        {/* about me */}
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, introduce me to Maula Ibrahim Syahwi, a full stack of web
            developers and designers for UI/UX Design and Digital Product, I
            believe that the design and functionality must go hand in hand, so
            that every project that I develop does not only look attractive but
            also provides optimal user experience.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex item center gap-6">
              <div className="">
                <h1 className="text-4xl mb-1">
                  15 <span className="text-violet-500">+</span>
                </h1>
                <p>project Selesai</p>
              </div>
              <div className="">
                <h1 className="text-4xl mb-1">
                  2 <span className="text-violet-500">+</span>
                </h1>
                <p>tahun pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="tools mt-32" id="tools">
          <h1
            className="text-4xl/snug font-bold mb-4 "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools used
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Here are some of the tools that I usually use to create a website or
            design
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group transition-colors duration-200"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 transition-colors duration-200"
                  loading="lazy"
                />
                <div className="">
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* project */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Here are some of the projects that I have made
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProject.map((project) => {
            const buttonConfig = getButtonConfig(project);

            return (
              <div
                className="project-card p-4 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors duration-200"
                key={project.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={project.dad}
                data-aos-once="true"
              >
                <img
                  src={project.gambar}
                  alt="project Image"
                  className="w-full h-48 object-cover rounded-md mb-4"
                  loading="lazy"
                />
                <div className="project-card-info">
                  <h1 className="font-bold text-2xl my-4">{project.nama}</h1>
                  <p className="opacity-50 text-base/loose mb-4">
                    {project.desk}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, index) => (
                      <p
                        key={index}
                        className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-sm"
                      >
                        {tool}
                      </p>
                    ))}
                  </div>

                  {/* Button dengan handling status */}
                  <div className="mt-8 text-center">
                    <div className="relative group">
                      {buttonConfig.clickable ? (
                        <a
                          href={buttonConfig.href}
                          target={buttonConfig.target}
                          rel="noopener noreferrer"
                          className={`p-3 rounded-lg block border border-zinc-600 ${buttonConfig.className}`}
                        >
                          {buttonConfig.text}
                        </a>
                      ) : (
                        <span
                          className={`p-3 rounded-lg block border border-zinc-600 ${buttonConfig.className}`}
                        >
                          {buttonConfig.text}
                        </span>
                      )}

                      {/* Tooltip untuk status non-active */}
                      {buttonConfig.tooltip && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                          {buttonConfig.tooltip}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Contact />
    </>
  );
}

export default App;
