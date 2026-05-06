"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/lib/language-context";

/* ─── helpers ──────────────────────────────────────────── */
function fmt(s: number) {
  if (!isFinite(s) || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

/* ─── Video Dialog ─────────────────────────────────────── */
function VideoDialog({ onClose }: { onClose: () => void }) {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const wrapRef    = useRef<HTMLDivElement>(null);
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [playing,      setPlaying]      = useState(false);
  const [currentTime,  setCurrentTime]  = useState(0);
  const [duration,     setDuration]     = useState(0);
  const [volume,       setVolume]       = useState(1);
  const [muted,        setMuted]        = useState(false);
  const [ctrlVisible,  setCtrlVisible]  = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [closing,      setClosing]      = useState(false);

  const close = useCallback(() => {
    setClosing(true);
    videoRef.current?.pause();
    setTimeout(onClose, 300);
  }, [onClose]);

  /* Keyboard shortcuts */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      const v = videoRef.current;
      if (!v) return;
      if (e.key === "Escape")       { close(); return; }
      if (e.key === " " || e.key === "k") { e.preventDefault(); v.paused ? v.play() : v.pause(); }
      if (e.key === "ArrowRight")   { v.currentTime = Math.min(v.currentTime + 5,  v.duration); }
      if (e.key === "ArrowLeft")    { v.currentTime = Math.max(v.currentTime - 5,  0); }
      if (e.key === "ArrowUp")      { e.preventDefault(); v.volume = Math.min(v.volume + 0.1, 1); setVolume(v.volume); }
      if (e.key === "ArrowDown")    { e.preventDefault(); v.volume = Math.max(v.volume - 0.1, 0); setVolume(v.volume); }
      if (e.key === "m")            { v.muted = !v.muted; setMuted(v.muted); }
      if (e.key === "f")            { toggleFullscreen(); }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [close]);

  /* Fullscreen change sync */
  useEffect(() => {
    const fn = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", fn);
    return () => document.removeEventListener("fullscreenchange", fn);
  }, []);

  /* Auto-hide controls */
  const revealControls = useCallback(() => {
    setCtrlVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!videoRef.current?.paused) setCtrlVisible(false);
    }, 3000);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      wrapRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = parseFloat(e.target.value);
    if (videoRef.current) videoRef.current.currentTime = t;
    setCurrentTime(t);
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (videoRef.current) { videoRef.current.volume = v; videoRef.current.muted = v === 0; }
    setMuted(v === 0);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-all duration-300 ${closing ? "opacity-0" : "opacity-100"}`}
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(14px)" }}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div
        ref={wrapRef}
        className={`relative w-full max-w-[860px] rounded-[22px] overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] shadow-[0_40px_120px_rgba(0,0,0,0.9)] transition-all duration-300 ${closing ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100"}`}
        style={{ animation: closing ? "none" : "dialogIn 0.42s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        {/* Top accent */}
        <div className="absolute top-0 inset-x-0 h-[1px] z-20" style={{ background: "linear-gradient(90deg,transparent,rgba(124,91,245,0.7),transparent)" }} />

        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] text-[#8a8680] hover:text-white hover:bg-[rgba(255,255,255,0.15)] transition-all duration-200"
          aria-label="Close"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        {/* ── Video area ── */}
        <div
          className="relative bg-black aspect-video cursor-pointer select-none"
          onMouseMove={revealControls}
          onMouseLeave={() => playing && setCtrlVisible(false)}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/parit-bhardwaj-orchix-founder.jpg"
            playsInline
            onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
            onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
            onPlay={() => { setPlaying(true); revealControls(); }}
            onPause={() => { setPlaying(false); setCtrlVisible(true); }}
            onEnded={() => { setPlaying(false); setCtrlVisible(true); setCurrentTime(0); }}
            // src="/founder-message.mp4"  ← drop video in /public and uncomment
          />

          {/* Big center play button — only when paused */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${playing ? "opacity-0" : "opacity-100"}`}
          >
            <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-[#7c5bf5] shadow-[0_0_50px_rgba(124,91,245,0.7)] border border-[rgba(255,255,255,0.2)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            </div>
          </div>

          {/* ── Custom controls bar ── */}
          <div
            className={`absolute bottom-0 inset-x-0 z-10 transition-opacity duration-300 ${ctrlVisible ? "opacity-100" : "opacity-0"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient scrim */}
            <div className="h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)" }} />

            <div className="px-5 pb-4 -mt-16 relative">
              {/* ── Seek bar ── */}
              <div className="relative h-1 mb-4 group/seek cursor-pointer" onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pct = (e.clientX - rect.left) / rect.width;
                const t = pct * duration;
                if (videoRef.current) videoRef.current.currentTime = t;
                setCurrentTime(t);
              }}>
                {/* Track */}
                <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.18)] group-hover/seek:h-[5px] group-hover/seek:-top-[2px] transition-all duration-150" />
                {/* Fill */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#7c5bf5] group-hover/seek:h-[5px] group-hover/seek:-top-[2px] transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
                {/* Thumb */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover/seek:opacity-100 transition-all duration-150 pointer-events-none"
                  style={{ left: `calc(${progress}% - 6px)` }}
                />
                {/* Invisible range for keyboard a11y */}
                <input
                  type="range" min={0} max={duration || 100} step={0.1}
                  value={currentTime}
                  onChange={seek}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer"
                />
              </div>

              {/* ── Control row ── */}
              <div className="flex items-center gap-4">
                {/* Play / pause */}
                <button onClick={togglePlay} className="text-white hover:text-[#a78bfa] transition-colors duration-150" aria-label={playing ? "Pause" : "Play"}>
                  {playing
                    ? <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                    : <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  }
                </button>

                {/* Time */}
                <span className="text-[0.72rem] text-[#c4bfb8] tabular-nums shrink-0">
                  {fmt(currentTime)} <span className="text-[#8a8680]">/</span> {fmt(duration)}
                </span>

                <div className="flex-1" />

                {/* Volume */}
                <div className="flex items-center gap-2 group/vol">
                  <button onClick={toggleMute} className="text-[#c4bfb8] hover:text-white transition-colors duration-150 shrink-0" aria-label={muted ? "Unmute" : "Mute"}>
                    {muted || volume === 0
                      ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                      : volume < 0.5
                      ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/></svg>
                      : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"/></svg>
                    }
                  </button>
                  {/* Volume track */}
                  <div className="relative w-20 h-1 group/vtrack cursor-pointer">
                    <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.18)]" />
                    <div className="absolute inset-y-0 left-0 rounded-full bg-[#7c5bf5]" style={{ width: `${(muted ? 0 : volume) * 100}%` }} />
                    <input
                      type="range" min={0} max={1} step={0.02}
                      value={muted ? 0 : volume}
                      onChange={changeVolume}
                      className="absolute inset-0 w-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Fullscreen */}
                <button onClick={toggleFullscreen} className="text-[#c4bfb8] hover:text-white transition-colors duration-150" aria-label="Toggle fullscreen">
                  {isFullscreen
                    ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"/></svg>
                    : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Info strip ── */}
        <div className="px-6 py-4 flex items-center gap-3 border-t border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,10,0.8)]">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[rgba(124,91,245,0.4)] shrink-0">
            <Image src="/parit-bhardwaj-orchix-founder.jpg" alt="Parit" fill className="object-cover object-top" sizes="36px" />
          </div>
          <div className="min-w-0">
            <p className="text-[0.8rem] font-semibold text-[#f5f2eb] truncate">Parit Bhardwaj — Founder, OrchiX</p>
            <p className="text-[0.68rem] text-[#8a8680]">Recorded personally for every visitor · ~2 min</p>
          </div>
          <a
            href="#"
            className="ml-auto shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-[#7c5bf5] text-white text-[0.75rem] font-semibold rounded-full no-underline transition-all duration-200 hover:bg-[#6a4ae0] hover:shadow-[0_0_24px_rgba(124,91,245,0.5)] whitespace-nowrap"
          >
            Book a Call
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Keyboard hint */}
        <div className="px-6 py-2 flex items-center gap-4 border-t border-[rgba(255,255,255,0.04)] bg-[rgba(8,8,8,0.6)]">
          {[["Space", "Play/Pause"], ["← →", "Seek 5s"], ["↑ ↓", "Volume"], ["M", "Mute"], ["F", "Fullscreen"], ["Esc", "Close"]].map(([key, label]) => (
            <span key={key} className="flex items-center gap-1 text-[0.6rem] text-[#8a8680]">
              <kbd className="px-1.5 py-0.5 rounded bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] font-mono text-[0.58rem] text-[#c4bfb8]">{key}</kbd>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Thumbnail trigger ────────────────────────────────── */
function FounderVideo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c5bf5] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7c5bf5]" />
          </span>
          <p className="text-[0.68rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa]">
            Personal message from Parit
          </p>
        </div>

        {/* Thumbnail card */}
        <button
          onClick={() => setOpen(true)}
          className="relative rounded-[18px] overflow-hidden border border-[rgba(124,91,245,0.2)] bg-[#0d0d0d] shadow-[0_0_50px_rgba(124,91,245,0.1)] group/video w-full text-left"
          aria-label="Watch Parit's personal message"
        >
          {/* Top accent */}
          <div className="absolute top-0 inset-x-0 h-[1px] z-10" style={{ background: "linear-gradient(90deg,transparent,rgba(124,91,245,0.6),transparent)" }} />

          {/* Poster */}
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="/parit-bhardwaj-orchix-founder.jpg"
              alt="Parit Bhardwaj personal message"
              fill
              className="object-cover object-top scale-100 group-hover/video:scale-105 transition-transform duration-700"
              sizes="400px"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[rgba(10,10,10,0.52)] group-hover/video:bg-[rgba(10,10,10,0.38)] transition-colors duration-300" />

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#7c5bf5] shadow-[0_0_40px_rgba(124,91,245,0.65)] border border-[rgba(255,255,255,0.2)] transition-all duration-300 group-hover/video:scale-110 group-hover/video:shadow-[0_0_60px_rgba(124,91,245,0.9)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              <div className="text-center">
                <p className="text-[0.82rem] font-semibold text-white">Watch Parit&apos;s message</p>
                <p className="text-[0.68rem] text-[rgba(255,255,255,0.55)] mt-0.5">~2 min · recorded just for you</p>
              </div>
            </div>

            {/* Duration badge */}
            <span className="absolute bottom-3 right-3 text-[0.62rem] font-semibold text-white bg-[rgba(0,0,0,0.6)] px-2 py-0.5 rounded-md backdrop-blur-sm">2:00</span>
          </div>
        </button>

        <p className="text-[0.7rem] text-[#8a8680] text-center leading-[1.6]">
          No sales pitch — just Parit talking to you directly.
        </p>
      </div>

      {open && <VideoDialog onClose={() => setOpen(false)} />}
    </>
  );
}

/* ─── Section ──────────────────────────────────────────── */
export default function FounderSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative z-[2] px-[3rem] py-[5rem] max-[1100px]:px-6 max-[600px]:px-4 max-[600px]:py-12"
    >
      <div className="jelly-card relative max-w-[1200px] mx-auto rounded-[28px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] overflow-hidden px-14 pt-14 pb-12 max-[700px]:px-6 max-[700px]:pt-10 max-[700px]:pb-8">

        <div className="absolute top-[-80px] left-[30%] w-[500px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(124,91,245,0.1) 0%, transparent 65%)" }} aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(124,91,245,0.5) 40%, rgba(167,139,250,0.3) 60%, transparent 100%)" }} aria-hidden="true" />

        {/* Label row */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-[rgba(124,91,245,0.6)]" />
            <span className={`text-[0.65rem] uppercase tracking-[0.18em] font-semibold text-[#a78bfa]${isRTL ? " font-cairo" : ""}`}>{t.founder.eyebrow}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(124,91,245,0.2)] bg-[rgba(124,91,245,0.06)]">
            <span className={`text-[0.65rem] uppercase tracking-[0.1em] font-semibold text-[#a78bfa]${isRTL ? " font-cairo" : ""}`}>{t.founder.badge}</span>
          </div>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-[1fr_380px] gap-14 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">

          {/* Left */}
          <div className="relative">
            <div className="absolute -top-4 -left-2 font-playfair text-[8rem] leading-none text-[#7c5bf5] opacity-[0.07] select-none pointer-events-none" aria-hidden="true">&ldquo;</div>

            <blockquote
              className={`relative z-[1] font-syne font-extrabold leading-[1.2] tracking-[-0.03em] text-[#f5f2eb] mb-8${isRTL ? " font-cairo" : ""}`}
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2.1rem)" }}
            >
              {t.founder.quote_before}{" "}
              <span className={`font-playfair italic font-normal text-[#a78bfa]${isRTL ? " font-cairo" : ""}`}>{t.founder.quote_years}</span>{" "}
              {t.founder.quote_after}{" "}
              <span className={`text-[#8a8680] font-normal text-[0.88em]${isRTL ? " font-cairo" : ""}`}>{t.founder.quote_secondary}</span>
            </blockquote>

            <div className="w-full h-px bg-[rgba(255,255,255,0.06)] mb-7" />

            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[rgba(124,91,245,0.35)] shadow-[0_0_20px_rgba(124,91,245,0.2)] shrink-0">
                  <Image src="/parit-bhardwaj-orchix-founder.jpg" alt="Parit Bhardwaj — Founder of OrchiX" fill className="object-cover object-top" sizes="48px" />
                </div>
                <div>
                  <p className={`font-syne font-bold text-[0.95rem] text-[#f5f2eb] tracking-[-0.01em]${isRTL ? " font-cairo" : ""}`}>{t.founder.name}</p>
                  <p className={`text-[0.72rem] text-[#8a8680] tracking-[0.02em] mt-[2px]${isRTL ? " font-cairo" : ""}`}>{t.founder.role}</p>
                </div>
              </div>
              <a href="#" className={`group inline-flex items-center gap-[0.5rem] px-5 py-[0.7rem] bg-transparent border border-[rgba(255,255,255,0.15)] text-[#f5f2eb] text-[0.8rem] font-semibold rounded-full tracking-[0.04em] uppercase transition-all duration-300 no-underline hover:bg-[#7c5bf5] hover:border-[#7c5bf5] hover:shadow-[0_0_30px_rgba(124,91,245,0.4)] font-space-grotesk whitespace-nowrap${isRTL ? " font-cairo" : ""}`}>
                {t.founder.cta}
                <svg className={`transition-transform duration-300${isRTL ? " rotate-180 group-hover:-translate-x-[3px]" : " group-hover:translate-x-[3px]"}`} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* Right */}
          <FounderVideo />
        </div>
      </div>
    </section>
  );
}
