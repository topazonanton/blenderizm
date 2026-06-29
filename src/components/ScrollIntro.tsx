import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240; // number of files in /frames
const STEP = 2; // play every 2nd frame
const MAX_DISPLAY_FRAMES = 80; // stop at this many stepped frames
const PAD = (n: number) => String(n).padStart(5, '0');

export default function ScrollIntro() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const framesRef = useRef<string[]>([]);

  // accumulator-based scrubbing
  const scrollAccumulator = useRef(0);
  const PIXELS_PER_FRAME = 40; // adjust sensitivity

  useEffect(() => {
    // Build and preload stepped frame URLs, but stop at MAX_DISPLAY_FRAMES.
    const frames: string[] = [];
    const base = import.meta.env.BASE_URL || '/';
    for (let i = 1; i <= TOTAL_FRAMES && frames.length < MAX_DISPLAY_FRAMES; i += STEP) {
      frames.push(`${base}frames/${PAD(i)}.jpg`);
    }
    framesRef.current = frames;

    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    let touchStartY: number | null = null;

    const maxIdx = () => Math.max(0, Math.min(MAX_DISPLAY_FRAMES - 1, framesRef.current.length - 1));
    const clamp = (n: number) => Math.max(0, Math.min(n, maxIdx()));

    const onWheel = (e: WheelEvent) => {
      if (window.scrollY > 10) return;
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      scrollAccumulator.current += e.deltaY;
      const idx = clamp(Math.round(scrollAccumulator.current / PIXELS_PER_FRAME));
      setCurrentIdx(idx);
      // snap accumulator to current frame to avoid drift
      scrollAccumulator.current = idx * PIXELS_PER_FRAME;
      // if user scrolls past last frame, release native scroll
      if (idx === maxIdx() && e.deltaY > 0) {
        document.body.style.overflow = '';
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartY == null) return;
      if (window.scrollY > 10) return;
      e.preventDefault();
      const y = e.touches[0].clientY;
      const delta = touchStartY - y;
      touchStartY = y;
      document.body.style.overflow = 'hidden';
      scrollAccumulator.current += delta;
      const idx = clamp(Math.round(scrollAccumulator.current / PIXELS_PER_FRAME));
      setCurrentIdx(idx);
      scrollAccumulator.current = idx * PIXELS_PER_FRAME;
      if (idx === maxIdx() && delta > 0) {
        document.body.style.overflow = '';
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false, capture: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false, capture: true });

    return () => {
      window.removeEventListener('wheel', onWheel, { capture: true } as any);
      window.removeEventListener('touchstart', onTouchStart as any);
      window.removeEventListener('touchmove', onTouchMove, { capture: true } as any);
      document.body.style.overflow = '';
    };
  }, []);

  const src = framesRef.current[currentIdx];

  // Fade out as user scrolls past the first viewport
  const opacity = (() => {
    const maxScroll = Math.max(window.innerHeight, 1);
    const scroll = Math.max(0, Math.min(window.scrollY, maxScroll));
    const p = scroll / maxScroll;
    return String(1 - Math.min(1, Math.pow(p, 1.1)));
  })();

  return (
    <>
      {/* Background animation placed under hero content (lower z-index than hero z-10) */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 5,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 200ms linear',
          opacity: opacity,
        }}
      >
        {src ? (
          <img
            src={src}
            alt="intro frame"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transform: 'translateZ(0)',
            }}
            referrerPolicy="no-referrer"
          />
        ) : null}
      </div>

      {/* Frame counter visible above content so visitor sees progress */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          right: 18,
          top: 18,
          zIndex: 60,
          pointerEvents: 'none',
          color: 'white',
          background: 'rgba(0,0,0,0.45)',
          padding: '6px 10px',
          borderRadius: 8,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        {framesRef.current.length > 0 ? `${String(currentIdx + 1).padStart(2, '0')} / ${String(
          framesRef.current.length
        ).padStart(2, '0')}` : `00 / ${String(MAX_DISPLAY_FRAMES).padStart(2, '0')}`}
      </div>
    </>
  );
}
