import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./pages/Navbar.jsx";
import "remixicon/fonts/remixicon.css";
import Footer from "./pages/Footer.jsx";
import PreLoader from "./pages/PreLoader.jsx";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MusicPlayer from "./components/Dock/MusicPlayer.jsx";
import "lenis/dist/lenis.css";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <PreLoader basename={import.meta.env.BASE_URL}>
        <div className="relative">
          <MusicPlayer />
          <div className="container mx-auto px-4 mb-10">
            <Navbar />
            <App />
          </div>
        </div>
        <Footer />
      </PreLoader>
    </ReactLenis>
  </StrictMode>
);
