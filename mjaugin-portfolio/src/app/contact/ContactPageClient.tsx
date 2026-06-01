'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Clock, Globe2, Calendar, Send, CheckCircle2 } from 'lucide-react'

export function ContactPageClient() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: send to API route / Formspree / Resend / etc.
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="section-label mb-5">Get In Touch</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
              Let&rsquo;s Start a
              <span className="text-gold-400 italic"> Conversation</span>
            </h1>
            <p className="font-sans text-lg text-white/60 leading-relaxed max-w-2xl">
              The first step is a free, no-obligation discovery call. Tell me about your business and I will tell you how I can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact layout */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <p className="section-label mb-4">Contact Details</p>
                <div className="divider-gold mb-6" />
                <div className="space-y-4">
                  <a
                    href="mailto:hello@michaeldavejaugin.com"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:border-gold-400 transition-all duration-300">
                      <Mail size={16} className="group-hover:text-navy-900 transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="font-sans text-xs text-charcoal/40 uppercase tracking-wide">Email</div>
                      <div className="font-sans text-sm text-navy-900 group-hover:text-gold-400 transition-colors">
                        hello@michaeldavejaugin.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:border-gold-400 transition-all duration-300">
                      <Linkedin size={16} className="group-hover:text-navy-900 transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="font-sans text-xs text-charcoal/40 uppercase tracking-wide">LinkedIn</div>
                      <div className="font-sans text-sm text-navy-900 group-hover:text-gold-400 transition-colors">
                        linkedin.com/in/michaeldavejaugin
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="font-sans text-xs text-charcoal/40 uppercase tracking-wide">Availability</div>
                      <div className="font-sans text-sm text-navy-900">Mon – Fri, flexible hours</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                      <Globe2 size={16} />
                    </div>
                    <div>
                      <div className="font-sans text-xs text-charcoal/40 uppercase tracking-wide">Time Zone</div>
                      <div className="font-sans text-sm text-navy-900">PHT (UTC+8) — flexible overlap</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar booking */}
              <div className="bg-navy-900 p-7">
                <Calendar size={20} className="text-gold-400 mb-4" />
                <h3 className="font-serif text-white text-xl font-medium mb-2">Book a Discovery Call</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed mb-5">
                  Free 30-minute call — no commitment required. Let&rsquo;s explore how I can support your business.
                </p>
                {/* Google Calendar integration placeholder */}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-xs"
                >
                  <Calendar size={14} /> Schedule a Call
                </a>
                <p className="font-sans text-xs text-white/30 mt-3 text-center">
                  Powered by Google Calendar / Calendly
                </p>
              </div>

              {/* Response time */}
              <div className="border border-gold-400/20 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-sans text-xs text-charcoal/60 uppercase tracking-wide">Typical Response Time</span>
                </div>
                <p className="font-serif text-2xl text-navy-900 font-medium">Within 24 hours</p>
                <p className="font-sans text-xs text-charcoal/50 mt-1">Often much faster — I prioritise enquiries</p>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <CheckCircle2 size={48} className="text-gold-400 mb-5" />
                  <h2 className="font-serif text-3xl text-navy-900 font-medium mb-3">Message Received</h2>
                  <p className="font-sans text-charcoal/60 max-w-sm">
                    Thank you for reaching out. I will review your message and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-8">
                    <p className="section-label mb-3">Send a Message</p>
                    <div className="divider-gold" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold-400 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold-400 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold-400 transition-colors duration-200"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold-400 transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        <option>Virtual Assistance</option>
                        <option>E-commerce Operations</option>
                        <option>Shopify Management</option>
                        <option>Website Development</option>
                        <option>Lead Generation</option>
                        <option>Operations Support</option>
                        <option>Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                        Monthly Budget
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold-400 transition-colors duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option>Under $500/month</option>
                        <option>$500 – $1,000/month</option>
                        <option>$1,000 – $2,000/month</option>
                        <option>$2,000 – $3,000/month</option>
                        <option>$3,000+/month</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs text-charcoal/50 uppercase tracking-wide block mb-2">
                      Tell Me About Your Business &amp; Needs *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe your business, the challenges you are facing, and what kind of support you are looking for..."
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold-400 transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message <Send size={15} />
                  </button>

                  <p className="font-sans text-xs text-charcoal/40 text-center">
                    Your information is kept confidential and never shared with third parties.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
