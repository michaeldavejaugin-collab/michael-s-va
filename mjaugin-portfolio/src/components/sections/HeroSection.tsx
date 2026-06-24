'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
  // Premium staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full bg-[#0a1124] overflow-hidden flex items-center select-none">
      
      {/* ──────────────────────────────────────────────────────────────
          1. BACKGROUND IMPLEMENTATION (DESKTOP VIDEO VS. MOBILE IMAGE)
          ────────────────────────────────────────────────────────────── */}
      
      {/* Desktop & Tablet Cinematic Video Background (>= 768px) */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-right lg:object-center pointer-events-none opacity-85 transition-opacity duration-700"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mobile-Optimized Static High-Res Image Fallback (< 768px) */}
      <div className="md:hidden absolute inset-0 w-full h-full z-0">
        <img
          src="/images/hero-mobile.jpg"
          alt="Professional Work Environment"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* ──────────────────────────────────────────────────────────────
          2. LUXURY LAYERING, GRADIENT MASKS & PREMIUM GLOWS
          ────────────────────────────────────────────────────────────── */}
      
      {/* Layer 2: Left-to-Right Gradients matching your exact design file */}
      {/* Solid deep navy on the left to perfectly secure text contrast; translucent on the right for video visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a1124] via-[#0a1124]/90 md:via-[#0a1124]/75 via-40% to-[#0a1124]/20" />
      
      {/* Tablet-specific deep overlay adjustments (768px to 1023px) */}
      <div className="hidden md:block lg:hidden absolute inset-0 z-10 bg-[#0a1124]/40" />

      {/* Top & Bottom Vignette fades */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a1124]/40 via-transparent to-[#0a1124]" />

      {/* Layer 3: Animated Premium Glow / Gold Radial Aura behind Text */}
      <div className="absolute left-[-100px] top-1/4 w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-[#e5ba53]/5 blur-[120px] md:blur-[180px] pointer-events-none z-10" />

      {/* Fine-line Tech Grid Overlay from your template mockup */}
      <div
        className="absolute inset-0 opacity-[0.02] z-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ──────────────────────────────────────────────────────────────
          3. MAIN RESPONSIVE CONTENT AREA
          ────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-28 pb-16 md:py-24">
        
        {/* Enforcing strict left-aligned typography bounding limits */}
        <div className="w-full lg:w-[55%] xl:w-[52%] flex flex-col justify-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            {/* Social Proof Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 border border-[#e5ba53]/30 bg-[#e5ba53]/5 px-3.5 py-1.5 mb-6 md:mb-8"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className="fill-[#e5ba53] text-[#e5ba53]"
                  />
                ))}
              </div>
              <span className="font-sans text-[11px] sm:text-xs text-white/80 tracking-wide font-light">
                Trusted by clients across the US, UK & Australia
              </span>
            </motion.div>

            {/* Premium Serif Typography Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-[1.08] sm:leading-[1.02] tracking-tight"
            >
              Virtual Operations
              <br />
              <span className="text-[#e5ba53] italic font-serif">
                &amp; E-commerce
              </span>
              <br />
              Excellence
            </motion.h1>

            {/* Accent Separator Line */}
            <motion.div
              variants={itemVariants}
              className="w-16 h-px bg-[#e5ba53] my-6 md:my-8"
            />

            {/* Subheadline Body copy */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-white/70 leading-relaxed font-light max-w-xl mb-4"
            >
              I help ambitious e-commerce brands and global businesses streamline operations, grow revenue, and scale — without the overhead of a full-time hire.
            </motion.p>

            {/* Signature Label */}
            <motion.div variants={itemVariants} className="mb-8 md:mb-10">
              <p className="font-sans text-[10px] sm:text-xs text-white/40 tracking-[0.15em] uppercase font-light">
                Michael Dave Jaugin — Virtual Operations Specialist
              </p>
            </motion.div>

            {/* Premium Luxury Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#e5ba53] hover:bg-[#d4a942] text-black text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors duration-300"
              >
                Work With Me <ArrowRight size={15} />
              </Link>

              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-white/20 hover:border-white/60 text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Metric Statistics Section */}
            <motion.div
              variants={itemVariants}
              className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
            >
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '2+', label: 'Years Team Leadership' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-white/10 pl-4 first:border-0 first:pl-0 sm:first:border-l sm:first:pl-4 sm:odd:border-l sm:even:border-l lg:border-l lg:first:border-0 lg:first:pl-0">
                  <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#e5ba53]">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[9px] sm:text-[10px] text-white/40 tracking-wider mt-1 uppercase font-light leading-snug">
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