import { useState, useEffect, useRef } from "react";
import Contact from "./pages/Contact";
import Dock from "./components/Dock/Dock";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Tools from "./components/Sections/Tools";
import Projects from "./components/Sections/Projects";
import Publications from "./components/Sections/Publications";
import FloatingPreview from "./components/UI/FloatingPreview";

import { GoHomeFill } from "react-icons/go";
import { BsFolderFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { GrArticle } from "react-icons/gr";

function App() {
  const [showDock, setShowDock] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [previewContent, setPreviewContent] = useState(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 80;
      const scrolled = window.scrollY > navbarHeight;
      setShowDock(scrolled);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (previewRef.current) {
      const x = e.clientX + 20;
      const y = e.clientY + 20;
      previewRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

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
    {
      icon: <GrArticle size={24} />,
      label: "publication",
      onClick: () => {
        const element = document.getElementById("publication");
        element?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <BiSolidMessageSquareDetail size={24} />,
      label: "message",
      onClick: () => {
        const element = document.getElementById("kontak");
        element?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  return (
    <>
      <FloatingPreview content={previewContent} previewRef={previewRef} />
      <Hero />
      {showDock && isDesktop && (
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className="fixed bottom-0 z-[9999] border border-none transition-all duration-300 ease-in-out bg-zinc-800/30 backdrop-blur-md cursor-pointer"
        />
      )}
      <About />
      <Tools />
      <Projects onPreview={setPreviewContent} onMove={handleMouseMove} />
      <Publications onPreview={setPreviewContent} onMove={handleMouseMove} />
      <Contact id="kontak" />
    </>
  );
}

export default App;
