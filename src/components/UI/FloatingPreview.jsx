import React from "react";

const FloatingPreview = ({ content, previewRef }) => {
  if (!content) return null;

  return (
    <div
      ref={previewRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-300 ease-out animate-in fade-in zoom-in-95"
      style={{ willChange: "transform" }}
    >
      <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-700 shadow-[0_0_30px_rgba(0,0,0,0.5)] w-80">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800">
          {content.image ? (
            <img
              src={content.image}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-zinc-500 text-sm flex-col gap-2">
              <i className="ri-image-line text-2xl"></i>
              <span>No preview available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] uppercase font-bold text-white border border-white/10">
            {content.type}
          </div>
        </div>
        <div className="mt-3 px-1 mb-1">
          <p className="text-sm font-bold text-white truncate">
            {content.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloatingPreview;
