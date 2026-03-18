'use client'
import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState([])
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const cursorRef = useRef(null)
  const animationFrameRef = useRef()
  const lastPositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setPosition(newPosition)
      
      // Add to trail
      setTrail(prevTrail => {
        const newTrail = [
          { 
            x: newPosition.x, 
            y: newPosition.y, 
            id: Date.now() + Math.random(),
            opacity: 1,
            scale: isClicking ? 1.5 : 1
          },
          ...prevTrail.slice(0, 20) // Keep only last 20 trail points
        ]
        return newTrail
      })

      lastPositionRef.current = newPosition
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    
    // Handle hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isClicking])

  // Animate trail fade out
  useEffect(() => {
    const animateTrail = () => {
      setTrail(prevTrail => 
        prevTrail
          .map(point => ({
            ...point,
            opacity: point.opacity * 0.95,
            scale: point.scale * 0.98
          }))
          .filter(point => point.opacity > 0.01)
      )
      animationFrameRef.current = requestAnimationFrame(animateTrail)
    }
    
    animationFrameRef.current = requestAnimationFrame(animateTrail)
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: point.x,
            top: point.y,
            transform: `translate(-50%, -50%) scale(${point.scale})`,
            opacity: point.opacity * (index / trail.length), // Fade based on position in trail
          }}
        >
          <div 
            className="w-6 h-6 rounded-full"
            style={{
              background: `radial-gradient(circle, 
                rgba(255, 215, 0, ${point.opacity * 0.8}) 0%, 
                rgba(255, 193, 7, ${point.opacity * 0.6}) 30%, 
                rgba(255, 255, 255, ${point.opacity * 0.3}) 60%, 
                transparent 100%)`,
              boxShadow: `
                0 0 ${20 * point.scale}px rgba(255, 215, 0, ${point.opacity * 0.6}),
                0 0 ${40 * point.scale}px rgba(255, 193, 7, ${point.opacity * 0.4}),
                0 0 ${60 * point.scale}px rgba(255, 255, 255, ${point.opacity * 0.2})
              `,
              filter: `blur(${0.5 + (1 - point.opacity) * 2}px)`,
            }}
          />
        </div>
      ))}

      {/* Sparkle particles */}
      {trail.slice(0, 5).map((point, index) => (
        <div
          key={`sparkle-${point.id}`}
          className="fixed pointer-events-none z-50"
          style={{
            left: point.x + (Math.random() - 0.5) * 30,
            top: point.y + (Math.random() - 0.5) * 30,
            transform: 'translate(-50%, -50%)',
            opacity: point.opacity * (1 - index / 5) * 0.6,
          }}
        >
          <div 
            className="w-1 h-1 rounded-full bg-yellow-300"
            style={{
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
              animation: `sparkle ${0.5 + Math.random() * 0.5}s ease-out`,
            }}
          />
        </div>
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`,
        }}
      >
        <div 
          className="w-8 h-8 rounded-full"
          style={{
            background: isHovering 
              ? `radial-gradient(circle, 
                  rgba(255, 255, 255, 0.9) 0%, 
                  rgba(255, 215, 0, 0.8) 20%, 
                  rgba(255, 193, 7, 0.6) 50%, 
                  transparent 100%)`
              : `radial-gradient(circle, 
                  rgba(255, 255, 255, 0.9) 0%, 
                  rgba(255, 215, 0, 0.8) 30%, 
                  rgba(255, 193, 7, 0.6) 60%, 
                  transparent 100%)`,
            boxShadow: isHovering
              ? `
                  0 0 30px rgba(255, 215, 0, 0.8),
                  0 0 60px rgba(255, 193, 7, 0.6),
                  0 0 90px rgba(255, 255, 255, 0.4),
                  inset 0 0 20px rgba(255, 255, 255, 0.2)
                `
              : `
                  0 0 20px rgba(255, 215, 0, 0.8),
                  0 0 40px rgba(255, 193, 7, 0.6),
                  0 0 60px rgba(255, 255, 255, 0.4)
                `,
            filter: 'blur(0.5px)',
            transition: 'transform 0.15s ease-out, box-shadow 0.3s ease-out',
          }}
        />
        
        {/* Inner core */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
            transform: 'scale(0.3)',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3);
          }
        }

        /* Ensure cursor works on all devices */
        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  )
}
