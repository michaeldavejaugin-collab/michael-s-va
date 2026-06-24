'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
  // Stagger variants for high-end luxury feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative min-h-screen w-full bg-[#0a1128] overflow-hidden flex items-center">
      
      {/* LAYER 1: Background Video - FULLY UNIFIED FOR DESKTOP & MOBILE */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-30 lg:opacity-60 pointer-events-none"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* LAYER 2: Advanced Dark Masking (Adapts perfectly between mobile & desktop) */}
      {/* Dynamic left-to-right fade on desktop, solid enveloping dark overlay on mobile */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#0a1128] via-[#0a1128]/90 lg:via-[#0a1128]/80 to-[#0a1128]/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a1128] via-transparent to-[#0a1128]/50" />

      {/* LAYER 3: Luxury Radial Aura / Glow Behind Text */}
      <div className="absolute left-[-10%] top-[20%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-[#d4af37]/5 blur-[100px] sm:blur-[150px] mix-blend-screen pointer-events-none z-10" />

      {/* Premium Tech Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] z-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* MAIN LAYOUT CONTAINER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-32 pb-20 lg:py-32">
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            {/* Social Proof Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 border border-[#d4af37]/30 bg-[#d4af37]/5 px-4 py-2 mb-6 sm:mb-8 rounded-sm"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className="fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>
              <span className="font-sans text-[11px] sm:text-xs text-white/70 tracking-wide">
                Trusted by clients across the US, UK & Australia
              </span>
            </motion.div>

            {/* Dynamic Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-[1.1] sm:leading-[1.02] tracking-tight"
            >
              Virtual Operations
              <br />
              <span className="text-[#d4af37] italic font-normal">
                &amp; E-commerce
              </span>
              <br />
              Excellence
            </motion.h1>

            {/* Accent Divider */}
            <motion.div
              variants={itemVariants}
              className="w-16 h-px bg-[#d4af37] my-6 sm:my-8"
            />

            {/* Rich Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-4"
            >
              I help ambitious e-commerce brands and global businesses streamline operations, grow revenue, and scale — without the overhead of a full-time hire.
            </motion.p>

            {/* Owner Signature branding */}
            <motion.div
              variants={itemVariants}
              className="mb-8 sm:mb-10"
            >
              <p className="font-sans text-[10px] sm:text-xs text-white/40 tracking-[0.15em] uppercase">
                Michael Dave Jaugin — Virtual Operations Specialist
              </p>
            </motion.div>

            {/* Call To Action Interactivity */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8952e] hover:brightness-110 text-black text-sm font-medium tracking-wide transition-all duration-300 rounded-sm shadow-xl shadow-[#d4af37]/5"
              >
                Work With Me <ArrowRight size={16} />
              </Link>

              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 hover:border-white/60 hover:bg-white/5 text-white text-sm font-medium tracking-wide transition-all duration-300 rounded-sm"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Data Metrics & Proof Grid */}
            <motion.div
              variants={itemVariants}
              className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
            >
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '2+', label: 'Team Leadership' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#d4af37]">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[10px] sm:text-xs text-white/40 tracking-wide mt-1 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>

    </section>
  )
}