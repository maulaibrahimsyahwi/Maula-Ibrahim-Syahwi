import React, { useEffect, useState, useRef } from "react";
import DataImage, {
  listTools,
  listProject,
  listPublication,
  listMusic,
} from "../data";

const PreLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);
  const realProgressRef = useRef(0);

  useEffect(() => {
    const collectImages = () => {
      const images = [];
      if (DataImage.HeroImage) images.push(DataImage.HeroImage);
      listTools.forEach((item) => item.gambar && images.push(item.gambar));
      listProject.forEach((item) => {
        if (item.gambar) images.push(item.gambar);
        if (item.preview) images.push(item.preview);
      });
      listPublication.forEach((item) => item.image && images.push(item.image));
      listMusic.forEach((item) => item.cover && images.push(item.cover));
      return images;
    };

    const imageUrls = collectImages();
    const totalImages = imageUrls.length;
    let loadedCount = 0;

    const updateRealProgress = () => {
      loadedCount++;
      realProgressRef.current = Math.round((loadedCount / totalImages) * 100);
    };

    if (totalImages === 0) {
      realProgressRef.current = 100;
    } else {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        if (img.complete) {
          updateRealProgress();
        } else {
          img.onload = updateRealProgress;
          img.onerror = updateRealProgress;
        }
      });
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayProgress((oldProgress) => {
        const target = realProgressRef.current;
        if (oldProgress >= target) {
          if (oldProgress >= 100) {
            clearInterval(timer);
            setTimeout(() => setIsLoading(false), 800);
            return 100;
          }
          return oldProgress;
        }
        const diff = target - oldProgress;
        const step = Math.min(Math.ceil(diff / 5), 2);
        return Math.min(oldProgress + step, 100);
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4 relative">
          <div className="relative">
            <h1 className="text-[12rem] md:text-[14rem] font-bold leading-none tracking-tighter">
              {displayProgress}
            </h1>
          </div>

          <div className="loader mt-2">
            <span className="relative z-10 text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em] text-black ">
              Loading Resources
            </span>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PreLoader;
