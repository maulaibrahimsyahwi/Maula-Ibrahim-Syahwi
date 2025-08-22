import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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

// Initialize AOS
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreLoader basename={import.meta.env.BASE_URL}>
      {/* Container dengan relative positioning untuk MusicPlayer */}
      <div className="relative">
        {/* MusicPlayer positioned absolutely */}
        <MusicPlayer />

        {/* Main content */}
        <div className="container mx-auto px-4 mb-10">
          <Navbar />
          <App />
        </div>
      </div>

      <Footer />
    </PreLoader>
  </StrictMode>
);
