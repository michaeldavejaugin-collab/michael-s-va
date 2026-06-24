'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy-900 overflow-hidden">

      {/* Background Base */}
      <div className="absolute inset-0 bg-navy-900" />

      {/* Premium Glow */}
      <div
        className="
          absolute
          left-[-200px]
          top-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-gold-400/10
          blur-[180px]
        "
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[55%_45%] items-center min-h-screen">

          {/* LEFT CONTENT */}
          <div className="relative z-20 max-w-3xl py-24">

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 border border-gold-400/30 bg-gold-400/5 px-4 py-2 mb-8"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className="fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              <span className="font-sans text-xs text-white/70 tracking-wide">
                Trusted by clients across the US, UK & Australia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                font-serif
                text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-medium
                text-white
                leading-[1.02]
                tracking-tight
              "
            >
              Virtual Operations
              <br />
              <span className="text-gold-400 italic">
                &amp; E-commerce
              </span>
              <br />
              Excellence
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-16 h-px bg-gold-400 my-8 origin-left"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="
                font-sans
                text-lg
                md:text-xl
                text-white/70
                leading-relaxed
                max-w-xl
              "
            >
              I help ambitious e-commerce brands and global businesses
              streamline operations, grow revenue, and scale —
              without the overhead of a full-time hire.
            </motion.p>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 mb-10"
            >
              <p className="font-sans text-sm text-white/40 tracking-[0.15em] uppercase">
                Michael Dave Jaugin — Virtual Operations Specialist
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary">
                Work With Me <ArrowRight size={16} />
              </Link>

              <Link href="/services" className="btn-outline-white">
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="
                mt-20
                pt-10
                border-t
                border-white/10
                grid
                grid-cols-2
                md:grid-cols-4
                gap-8
              "
            >
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '2+', label: 'Years Team Leadership' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl md:text-4xl font-medium text-gold-400">
                    {stat.value}
                  </div>

                  <div className="font-sans text-xs text-white/40 tracking-wide mt-1 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT VIDEO - DESKTOP ONLY */}
          <div className="hidden lg:flex relative h-[85vh] items-center justify-center">

            {/* Fade Into Video */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 via-30% to-transparent z-20" />

            {/* Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-20" />

            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                opacity-70
                blur-[1px]
              "
            >
              <source
                src="/videos/hero-video.mp4"
                type="video/mp4"
              />
            </video>

            {/* Glow */}
            <div className="absolute inset-0 bg-gold-400/5 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Mobile Background Image */}
      <div className="lg:hidden absolute inset-0 -z-0">
        <img
          src="/images/hero-mobile.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}