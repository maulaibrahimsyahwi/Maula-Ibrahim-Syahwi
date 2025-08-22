import { useState, useRef, useEffect } from "react";
import { BiSolidAlbum } from "react-icons/bi";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPause, FaPlay } from "react-icons/fa6";
import { listMusic } from "../../data";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  const audioRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const autoCollapseTimeoutRef = useRef(null);
  const musicPlayerRef = useRef(null);

  const currentTrack = listMusic[currentTrackIndex];
  const totalDuration = audioRef.current?.duration || 0;

  // Efek untuk mengontrol pemutaran musik
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        progressIntervalRef.current = setInterval(() => {
          if (audioRef.current) {
            setCurrentProgress(audioRef.current.currentTime);
          }
        }, 1000);
      } else {
        audioRef.current.pause();
        clearInterval(progressIntervalRef.current);
      }
    }
    return () => clearInterval(progressIntervalRef.current);
  }, [isPlaying, currentTrackIndex]);

  // Efek untuk volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Efek untuk mendengarkan selesainya lagu
  useEffect(() => {
    const handleTrackEnded = () => {
      skipForward(true);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleTrackEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleTrackEnded);
      }
    };
  }, [currentTrackIndex]);

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipBackward = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? listMusic.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  const skipForward = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === listMusic.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(true);
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progressPercent = clickX / rect.width;
    if (audioRef.current) {
      audioRef.current.currentTime = progressPercent * totalDuration;
      setCurrentProgress(progressPercent * totalDuration);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Toggle expand/collapse
  const togglePlayer = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setIsExpanded(true);
    } else if (isExpanded) {
      setIsExpanded(false);
      startAutoCollapseTimer();
    } else {
      setIsExpanded(true);
      startAutoCollapseTimer();
    }
  };

  const startAutoCollapseTimer = () => {
    if (autoCollapseTimeoutRef.current) {
      clearTimeout(autoCollapseTimeoutRef.current);
    }
    autoCollapseTimeoutRef.current = setTimeout(() => {
      if (!isExpanded) {
        setIsMinimized(true);
      } else {
        setIsExpanded(false);
        setTimeout(() => {
          setIsMinimized(true);
        }, 500);
      }
    }, 5000);
  };

  const resetAutoCollapseTimer = () => {
    if (isExpanded) {
      startAutoCollapseTimer();
    }
  };

  useEffect(() => {
    if (!isMinimized) {
      startAutoCollapseTimer();
    }
    return () => {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      if (autoCollapseTimeoutRef.current)
        clearTimeout(autoCollapseTimeoutRef.current);
    };
  }, []);

  const progressPercent = (currentProgress / totalDuration) * 100 || 0;

  return (
    <div
      ref={musicPlayerRef}
      className="fixed top-20 left-0 right-0 w-full transition-all duration-300 ease-out z-[9999]"
    >
      <audio
        ref={audioRef}
        src={currentTrack.audio}
        onTimeUpdate={() => setCurrentProgress(audioRef.current.currentTime)}
        onLoadedMetadata={() => setCurrentProgress(0)}
      ></audio>

      <div className="container mx-auto px-4 py-2">
        <div
          className={`transition-all duration-500 ease-out transform-gpu ${
            isMinimized
              ? "w-16 h-16 cursor-pointer hover:scale-110 rounded-full flex items-center justify-center hover:shadow-xl relative overflow-hidden"
              : isExpanded
              ? "w-80 scale-100 opacity-100"
              : "w-80 h-[70px] cursor-pointer hover:scale-105 hover:shadow-xl"
          } ${
            !isMinimized && !isExpanded
              ? "bg-gray-800 bg-opacity-95 backdrop-blur-xl border-opacity-10 rounded-[35px] p-2 flex items-center hover:bg-gray-700 hover:bg-opacity-95"
              : !isMinimized
              ? "bg-white rounded-xl shadow-2xl overflow-hidden"
              : ""
          }`}
          onClick={
            !isExpanded || isMinimized
              ? () => {
                  togglePlayer();
                  resetAutoCollapseTimer();
                }
              : undefined
          }
          onMouseEnter={resetAutoCollapseTimer}
          style={{
            transformOrigin: "center",
            ...(isMinimized && {
              backgroundImage: `url(${currentTrack.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }),
          }}
        >
          {/* Minimized Icon with Cover Background */}
          {isMinimized && (
            <>
              {/* Background cover image */}
              <div
                className="absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${currentTrack.cover})`,
                }}
              ></div>
              {/* Dark overlay for better icon visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full"></div>
              <BiSolidAlbum
                className={`text-white text-2xl mx-auto w-2xl transition-transform duration-300 relative z-10 ${
                  isPlaying
                    ? "animate-[spin_3s_linear_infinite]"
                    : "hover:rotate-12"
                }`}
              />
            </>
          )}

          {/* Collapsed Content */}
          {!isExpanded && !isMinimized && (
            <div className="flex items-center gap-3 w-full px-2">
              <div
                className="w-[54px] h-[54px] rounded-lg flex-shrink-0"
                style={{
                  backgroundImage: `url(${currentTrack.cover})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-semibold truncate">
                  {currentTrack.artist}
                </div>
                <div className="text-white text-opacity-70 text-xs truncate">
                  {currentTrack.title}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                    resetAutoCollapseTimer();
                  }}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all duration-200 hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span className="text-gray-800 text-xs ">
                    {isPlaying ? (
                      <FaPause className="text-black " />
                    ) : (
                      <FaPlay className="text-black " />
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Expanded Content */}
          {isExpanded && !isMinimized && (
            <div>
              {/* Album Art */}
              <div
                className="w-full h-45 relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-inner active:scale-95"
                onClick={() => {
                  togglePlayer();
                  resetAutoCollapseTimer();
                }}
                onMouseEnter={resetAutoCollapseTimer}
                style={{
                  backgroundImage: `url(${currentTrack.cover})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "180px",
                }}
              >
                <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-opacity-50 px-3 py-1 rounded-full">
                    Click to minimize
                  </div>
                </div>
              </div>

              {/* Player Content */}
              <div className="p-5">
                {/* Song Info */}
                <div className="mb-5">
                  <div className="text-base font-semibold text-gray-800 mb-1">
                    {currentTrack.artist}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentTrack.title}
                  </div>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full h-1 bg-gray-300 rounded-full mb-4 cursor-pointer hover:h-2 transition-all duration-200"
                  onClick={(e) => {
                    handleProgressClick(e);
                    resetAutoCollapseTimer();
                  }}
                  onMouseEnter={resetAutoCollapseTimer}
                >
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300 relative overflow-hidden"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                  </div>
                </div>

                {/* Time Info */}
                <div className="flex justify-between text-xs text-gray-600 mb-5">
                  <span className="transition-colors duration-200 hover:text-blue-500">
                    {formatTime(currentProgress)}
                  </span>
                  <span>{formatTime(totalDuration)}</span>
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-5 mb-4">
                  <button
                    onClick={() => {
                      skipBackward();
                      resetAutoCollapseTimer();
                    }}
                    onMouseEnter={resetAutoCollapseTimer}
                    className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-lg">
                      <IoPlaySkipBack className="text-black" />
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      togglePlayPause();
                      resetAutoCollapseTimer();
                    }}
                    onMouseEnter={resetAutoCollapseTimer}
                    className={`w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 hover:scale-110 active:scale-95 hover:shadow-lg transition-all duration-200 cursor-pointer ${
                      isPlaying ? "animate-pulse" : ""
                    }`}
                  >
                    <span className="text-xl transition-transform duration-200">
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      skipForward();
                      resetAutoCollapseTimer();
                    }}
                    onMouseEnter={resetAutoCollapseTimer}
                    className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all duration-200  cursor-pointer"
                  >
                    <span className="text-lg">
                      <IoPlaySkipForward className="text-black" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
