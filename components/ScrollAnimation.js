'use client'
import { useEffect, useState } from 'react'

export default function ScrollAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = Math.min(currentScroll / totalHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <div className="relative w-full h-full">
        {/* First image - shows at the beginning */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/jurrasicpark.png')",
            opacity: 1 - scrollProgress,
            transition: 'opacity 0.1s ease-out'
          }}
        />
        
        {/* Second image - shows at the end */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/jurrasicpark2.png')",
            opacity: scrollProgress,
            transition: 'opacity 0.1s ease-out'
          }}
        />
      </div>
    </div>
  )
}
