'use client'

import React from "react"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // const contactInfo = [
  //   { icon: Mail, label: 'Email', value: 'ebnu1721@gmail.com', href: 'mailto:ebnu1721@gmail.com' },
  //   { icon: Phone, label: 'Phone', value: '+8801303834841', href: 'tel:+8801303834841' },
  //   { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: '#' },
  // ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ebnu1721@gmail.com',
      href: 'mailto:ebnu1721@gmail.com?subject=Portfolio Inquiry'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1303-834841',
      href: 'tel:+8801303834841'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: 'https://www.google.com/maps/search/?api=1&query=Dhaka,Bangladesh'
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData

    // Basic validation
    if (!name || !email || !subject || !message) {
      return
    }

    setIsSubmitting(true)

    const to = 'ebnu1721@gmail.com'
    const subjectEncoded = encodeURIComponent(subject)
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${to}?subject=${subjectEncoded}&body=${encodeURIComponent(
      body
    )}`

    // Open user's mail client
    window.location.href = mailto

    // Reset form after opening mail client
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 500)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-all duration-300 soft-shadow group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0"
                  >
                    <Icon size={24} className="text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.label}</h3>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent soft-shadow p-8"
          >
            <div className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Name', name: 'name', type: 'text' },
                  { label: 'Email', name: 'email', type: 'email' },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold mb-3">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:bg-background transition-all duration-300 focus:border-primary outline-none focus:soft-shadow"
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      required
                    />
                  </motion.div>
                ))}
              </div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-3">Subject</label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:bg-background transition-all duration-300 focus:border-primary outline-none focus:soft-shadow"
                  placeholder="What is this about?"
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-3">Message</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:bg-background transition-all duration-300 focus:border-primary outline-none focus:soft-shadow resize-none"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 soft-shadow"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
