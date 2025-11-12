import React, { useEffect, useRef, useState } from "react";
import rewindIcon from "../assets/icons/rewind.svg";
import playIcon from "../assets/icons/play.svg";
import forwardIcon from "../assets/icons/forward.svg";
import pauseIcon from "../assets/icons/pause.svg";

type MediaPlayerProps = {
  audioSrc?: string;
  title?: string;
  image?: string;
  date?: string;
  rewindOffset?: number; // seconds
  forwardOffset?: number; // seconds
};

const formatTime = (secs: number) => {
  if (!isFinite(secs) || secs <= 0) return "0:00";
  const s = Math.floor(secs % 60)
    .toString()
    .padStart(2, "0");
  const m = Math.floor(secs / 60);
  return `${m}:${s}`;
};

const MediaPlayer: React.FC<MediaPlayerProps> = ({
  audioSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  title = "Sermon Audio",
  image,
  date,
  rewindOffset = 10,
  forwardOffset = 10,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // instrumentation & robust event handling
    const onLoaded = () => {
      setDuration(audio.duration || 0);
      setAudioError(null);
      console.debug("audio loaded metadata", audio.duration);
    };
    const onTime = () => setCurrentTime(audio.currentTime || 0);
    const onEnded = () => setPlaying(false);
    const onError = (ev: any) => {
      console.error("audio error", ev);
      setAudioError("Unable to load audio");
    };
    const onPlaying = () => {
      setPlaying(true);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    audio.addEventListener("playing", onPlaying);

    // if audioSrc changed, reset state and attempt to load
    try {
      audio.load();
    } catch (e) {}

    return () => {
      try {
        audio.pause();
      } catch (e) {}
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("playing", onPlaying);
    };
  }, [audioSrc]);

  useEffect(() => {
    // pause on unmount
    return () => {
      const a = audioRef.current;
      if (a && !a.paused) a.pause();
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (err) {
      console.warn("Media play failed:", err);
      setPlaying(!audio.paused && !audio.ended);
    }
  };

  const seek = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(duration || 0, time));
  };

  const rewind = () =>
    seek((audioRef.current?.currentTime || 0) - rewindOffset);
  const forward = () =>
    seek((audioRef.current?.currentTime || 0) + forwardOffset);

  function onKeyDown(e: React.KeyboardEvent) {
    // Space toggles play/pause
    if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      togglePlay();
    }
    if (e.key === "ArrowLeft") rewind();
    if (e.key === "ArrowRight") forward();
  }

  const percent = duration ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging]);

  return (
    <div className="flex flex-col gap-10 w-full mx-auto select-none">
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative"
        aria-label={`${title} media player`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-[40vh] md:h-[60vh] xl:h-[80vh] rounded-[20px] object-cover"
            draggable={false}
          />
          <button
            onClick={togglePlay}
            aria-label={playing ? "pause" : "play"}
            className="absolute bottom-[45%] left-[48%] z-10"
          >
            <img
              src={`${playing ? pauseIcon : playIcon}`}
              alt={`${playing ? "Pause Icon" : "Play Icon"}`}
              className="w-[43.54px] lg:w-[64.63px] h-[55.42px] lg:h-[82.25px]"
            />
          </button>
        </div>
        <audio ref={audioRef} src={audioSrc} preload="metadata" />

        <div className="absolute bottom-3 left-6 flex flex-col gap-4 w-[calc(100%-3rem)]">
          <div className="w-full">
            {/* Custom progress bar (click + drag) */}
            <div
              ref={trackRef}
              role="slider"
              tabIndex={0}
              aria-label="Seek"
              aria-valuemin={0}
              aria-valuemax={Math.max(0, duration)}
              aria-valuenow={Math.min(currentTime, duration)}
              onPointerDown={(e) => {
                const el = trackRef.current;
                if (!el) return;
                // capture pointer on this element and begin dragging
                try {
                  ((e.currentTarget as any).setPointerCapture as any)(
                    e.pointerId
                  );
                } catch (err) {}
                setDragging(true);
                // immediately seek to pointer position
                const rect = el.getBoundingClientRect();
                const p = Math.max(
                  0,
                  Math.min(1, (e.clientX - rect.left) / rect.width)
                );
                seek(p * (duration || 0));
              }}
              onPointerMove={(e) => {
                if (!dragging) return;
                const el = trackRef.current;
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const p = Math.max(
                  0,
                  Math.min(1, (e.clientX - rect.left) / rect.width)
                );
                seek(p * (duration || 0));
              }}
              onPointerUp={(e) => {
                try {
                  ((e.currentTarget as any).releasePointerCapture as any)(
                    e.pointerId
                  );
                } catch (err) {}
                setDragging(false);
              }}
              onPointerCancel={(e) => {
                try {
                  ((e.currentTarget as any).releasePointerCapture as any)(
                    e.pointerId
                  );
                } catch (err) {}
                setDragging(false);
              }}
              onPointerLeave={() => {
                if (dragging) setDragging(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  seek((currentTime || 0) - 5);
                }
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  seek((currentTime || 0) + 5);
                }
                if (e.key === "Home") {
                  e.preventDefault();
                  seek(0);
                }
                if (e.key === "End") {
                  e.preventDefault();
                  seek(duration || 0);
                }
              }}
              className="media-progress-track relative w-full h-1 lg:h-2 rounded-full cursor-pointer"
            >
              <div
                className="media-progress-filled absolute left-0 top-0 bottom-0 rounded-full"
                style={{
                  width: `${percent}%`,
                  background: "#071b65",
                }}
              />
              <div
                className="media-progress-thumb absolute w-[10px] lg:w-[14px] h-[10px] lg:h-[14px] top-1/2 -translate-y-1/2"
                style={{ left: `${percent}%` }}
                aria-hidden
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between text-xs lg:text-sm  text-white">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <button
              aria-label={`rewind ${rewindOffset} seconds`}
              onClick={rewind}
            >
              <img
                className="w-[12px] lg:w-[18px] h-[12px] lg:h-[18px]"
                src={rewindIcon}
                alt="Rewind Icon"
              />
            </button>

            <button
              aria-label={playing ? "pause" : "play"}
              onClick={togglePlay}
              className="w-[14px] lg:w-[20px] h-[14px] lg:h-[20px] flex items-center justify-center"
            >
              <img
                src={playing ? pauseIcon : playIcon}
                alt={playing ? "Pause Icon" : "Play Icon"}
                className={
                  playing
                    ? "w-[12px] lg:w-[18px] h-[12px] lg:h-[18px]"
                    : "w-[12px] lg:w-[14px] h-[12px] lg:h-[14px]"
                }
              />
            </button>

            <button
              aria-label={`forward ${forwardOffset} seconds`}
              onClick={forward}
            >
              <img
                className="w-[12px] lg:w-[18px] h-[12px] lg:h-[18px]"
                src={forwardIcon}
                alt="Forward Icon"
              />
            </button>
          </div>

          {/* status / errors */}

          {audioError ? (
            <div className="text-sm text-red-400 mt-2">{audioError}</div>
          ) : null}
        </div>

        {/* <div className="mt-4 text-sm text-slate-700 dark:text-slate-300">
        <a
          href={audioSrc}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Open audio source
        </a>
      </div> */}
      </div>
      <div className="flex flex-col p-[20px] lg:p-[32px] border-[3px] border-seventh rounded-[20px] mb-24">
        <h2 className="font-semibold text-[20px] lg:text-4xl">{title}</h2>
        {date && <p className="text-tertiary">{date}</p>}
      </div>
    </div>
  );
};

export default MediaPlayer;
