'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeader({
  label,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  dark = false,
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-14 md:mb-16',
        isCenter && 'text-center',
        className
      )}
    >
      {label && (
        <p className="section-label mb-4">{label}</p>
      )}
      {!isCenter && <div className="divider-gold mb-5" />}
      <h2
        className={cn(
          'font-serif font-medium leading-tight text-balance',
          'text-3xl md:text-4xl lg:text-5xl',
          dark ? 'text-white' : 'text-navy-900'
        )}
      >
        {title}
        {titleHighlight && (
          <span className="text-gold-400 italic"> {titleHighlight}</span>
        )}
      </h2>
      {isCenter && <div className="divider-gold mx-auto mt-5" />}
      {subtitle && (
        <p
          className={cn(
            'font-sans text-base md:text-lg leading-relaxed mt-5',
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl',
            dark ? 'text-white/60' : 'text-charcoal/60'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
