'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: position.x,
        top: position.y,
        background:
          'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(245, 158, 11, 0.24) 35%, rgba(245, 158, 11, 0.1) 60%, rgba(245, 158, 11, 0) 100%)',
        filter: 'blur(1px)',
      }}
    />
  );
}
