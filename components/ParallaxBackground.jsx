'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations on load
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Video Layer - YOUR VIDEO GOES HERE */}
      <div className="absolute inset-0 z-0">
        {/* ADD YOUR VIDEO HERE - Just uncomment and add your video file */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg_vid.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for video - adjust opacity to make video lighter/darker */}
      {/* <div className="absolute inset-0 bg-black/40 z-[1]" /> */}

      {/* Far background gradient - slowest moving */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          background: 'linear-gradient(to bottom, rgba(10, 31, 10, 0.3) 0%, rgba(26, 58, 26, 0.4) 50%, rgba(15, 42, 15, 0.3) 100%)',
        }}
      />

      {/* ENTRANCE ANIMATION 1: T-Rex from LEFT - appears on page load */}
      <div
        className="absolute z-[5] transition-all duration-[2s] ease-out"
        style={{
          bottom: '25%',
          left: isLoaded ? '6%' : '-30%',
          transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)`,
          opacity: isLoaded ? 1 : 0,
        }}
      >
        <img 
          src="/trex.png" 
          alt="T-Rex"
          className="object-contain drop-shadow-2xl"
          style={{ 
            width: '400px', 
            height: 'auto',
            backgroundColor: 'transparent'
          }}
        />
      </div>

      {/* ENTRANCE ANIMATION 2: Velociraptor from RIGHT - appears on page load */}
      <div
        className="absolute z-[5] transition-all duration-[2.5s] ease-out"
        style={{
          bottom: '5%',
          right: isLoaded ? '1%' : '-30%',
          transform: `translate(-${scrollY * 0.15}px, ${scrollY * 0.12}px)`,
          opacity: isLoaded ? 1 : 0,
        }}
      >
        <img 
          src="/trex.png" 
          alt="Velociraptor"
          className="object-contain drop-shadow-2xl"
          style={{ 
            width: '350px', 
            height: 'auto',
            backgroundColor: 'transparent'
          }}
        />
      </div>

      {/* ENTRANCE ANIMATION 3: Flying Pterodactyl from TOP RIGHT - appears on page load */}
      <div
        className="absolute z-[6] transition-all duration-[3s] ease-out"
        style={{
          top: isLoaded ? '5%' : '-30%',
          right: isLoaded ? '15%' : '-20%',
          transform: `translate(-${scrollY * 0.25}px, ${scrollY * 0.18}px) rotate(${Math.sin(scrollY / 100) * 3}deg)`,
          opacity: isLoaded ? 1 : 0,
        }}
      >
        <img 
          src="/trex.png" 
          alt="T-Rex"
          className="object-contain drop-shadow-2xl"
          style={{ 
            width: '400px', 
            height: 'auto',
            backgroundColor: 'transparent'
          }}
        />
      </div>

      {/* SCROLL-ACTIVATED: Additional ground dinosaur - appears as you scroll */}
      <div
        className="absolute z-[4]"
        style={{
          bottom: '8%',
          left: '15%',
          transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.15}px)`,
          opacity: Math.min(scrollY / 300, 1),
        }}
      >
        {/* PLACEHOLDER: Add your Triceratops or Stegosaurus PNG here */}
        <div className="relative w-72 h-60 bg-green-500/20 rounded-lg border-2 border-dashed border-green-500 flex items-center justify-center shadow-xl">
          <span className="text-white text-center text-sm">
            🦕 Triceratops PNG<br />
            (appears on scroll)<br />
            272x260px
          </span>
        </div>
      </div>

      {/* SCROLL-ACTIVATED: Flying Pterodactyl - comes from LEFT as you scroll (your favorite effect!) */}
      <div
        className="absolute z-[7]"
        style={{
          top: '25%',
          left: `${-300 + scrollY * 0.5}px`,
          transform: `translateY(${Math.sin(scrollY / 100) * 20}px) rotate(${Math.sin(scrollY / 100) * 5}deg)`,
          opacity: scrollY > 150 ? Math.min((scrollY - 150) / 300, 1) : 0,
        }}
      >
        {/* PLACEHOLDER: Add your flying Pterodactyl PNG here */}
        <div className="relative w-80 h-48 bg-purple-500/20 rounded-lg border-2 border-dashed border-purple-500 flex items-center justify-center shadow-xl">
          <span className="text-white text-center text-sm">
            🦅 Flying Pterodactyl PNG<br />
            (flies from LEFT on scroll - your fave!)<br />
            380x248px
          </span>
        </div>
      </div>

      {/* SCROLL-ACTIVATED: Second flying dinosaur - higher up, floating effect */}
      <div
        className="absolute z-[7]"
        style={{
          top: '12%',
          left: `${-200 + scrollY * 0.4}px`,
          transform: `translateY(${Math.sin((scrollY + 50) / 80) * 15}px) rotate(${Math.sin((scrollY + 50) / 80) * 3}deg)`,
          opacity: scrollY > 400 ? Math.min((scrollY - 400) / 400, 1) : 0,
        }}
      >
        {/* PLACEHOLDER: Add your second flying dinosaur PNG here */}
        <div className="relative w-64 h-40 bg-indigo-500/20 rounded-lg border-2 border-dashed border-indigo-500 flex items-center justify-center shadow-xl">
          <span className="text-white text-center text-sm">
            🦅 Flying Dino 2 PNG<br />
            (floats in on scroll)<br />
            264x140px
          </span>
        </div>
      </div>

      {/* SCROLL-ACTIVATED: Plants from the RIGHT */}
      <div
        className="absolute z-[3]"
        style={{
          bottom: '5%',
          right: `${-400 + scrollY * 0.35}px`,
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: scrollY > 200 ? Math.min((scrollY - 200) / 300, 1) : 0,
        }}
      >
        {/* PLACEHOLDER: Add your large palm/fern PNG here */}
        <div className="relative w-96 h-80 bg-emerald-500/20 rounded-lg border-2 border-dashed border-emerald-500 flex items-center justify-center shadow-xl">
          <span className="text-white text-center text-sm">
            🌴 Large Plant/Fern PNG<br />
            (slides from right on scroll)<br />
            396x380px
          </span>
        </div>
      </div>

      {/* SCROLL-ACTIVATED: Smaller plants cluster from RIGHT */}
      <div
        className="absolute z-[3]"
        style={{
          bottom: '30%',
          right: `${-300 + scrollY * 0.3}px`,
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: scrollY > 500 ? Math.min((scrollY - 500) / 300, 1) : 0,
        }}
      >
        {/* PLACEHOLDER: Add your smaller plants PNG here */}
        <div className="relative w-64 h-64 bg-lime-500/20 rounded-lg border-2 border-dashed border-lime-500 flex items-center justify-center shadow-xl">
          <span className="text-white text-center text-sm">
            🌿 Small Plants PNG<br />
            (slides from right on scroll)<br />
            264x264px
          </span>
        </div>
      </div>

      {/* SCROLL-ACTIVATED: Foreground plants - fastest moving */}
      <div
        className="absolute z-[8]"
        style={{
          bottom: 0,
          left: `${scrollY * 0.5}px`,
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        {/* PLACEHOLDER: Add your foreground plant PNG here */}
        <div className="relative w-48 h-64 bg-teal-500/20 rounded-lg border-2 border-dashed border-teal-500 flex items-center justify-center shadow-xl">
          <span className="text-white text-center text-sm">
            🌱 Foreground Plant PNG<br />
            (left side)<br />
            148x264px
          </span>
        </div>
      </div>

      {/* Fog/mist effect overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[9]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 31, 10, 0.5) 100%)',
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />
    </div>
  );
}