'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function EntryDoors() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftDoorRef = useRef<HTMLDivElement>(null)
  const rightDoorRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const [hasRun, setHasRun] = useState(false)

  useEffect(() => {
    // Play once per session
    if (sessionStorage.getItem('hasSeenEntry')) {
      setHasRun(true)
      return
    }

    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)

    const tl = gsap.timeline({
      onComplete: () => {
        setHasRun(true)
        document.body.style.overflow = 'auto'
        sessionStorage.setItem('hasSeenEntry', 'true')
      }
    })

    // Logo entrance
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out'
    })
    // Logo exit & Doors opening
    .to(logoRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    }, '+=0.8')
    .to(leftDoorRef.current, {
      xPercent: -100,
      duration: 1.5,
      ease: 'power3.inOut'
    }, '<')
    .to(rightDoorRef.current, {
      xPercent: 100,
      duration: 1.5,
      ease: 'power3.inOut'
    }, '<')
    .set(containerRef.current, { display: 'none' })

    return () => { 
      tl.kill()
      document.body.style.overflow = 'auto' 
    }
  }, [])

  if (hasRun) return null

  return (
    <div ref={containerRef} className="fixed inset-0 z-[99999] flex overflow-hidden pointer-events-none">
      {/* Left Door */}
      <div 
        ref={leftDoorRef} 
        className="w-1/2 h-full bg-black relative border-r border-[#FF6B35] shadow-[20px_0_50px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2670&auto=format&fit=crop')] bg-cover opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
      </div>

      {/* Right Door */}
      <div 
        ref={rightDoorRef} 
        className="w-1/2 h-full bg-black relative border-l border-[#FF6B35] shadow-[-20px_0_50px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2670&auto=format&fit=crop')] bg-cover opacity-20 grayscale scale-x-[-1]" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80" />
      </div>

      {/* Center Logo */}
      <div 
        ref={logoRef} 
        className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 drop-shadow-2xl z-50 pointer-events-none"
      >
        <Image 
          src="/logo.png" 
          alt="4 Point Contractors Logo" 
          width={800} 
          height={600} 
          className="object-contain max-w-[80vw]" 
          priority 
        />
      </div>
    </div>
  )
}
