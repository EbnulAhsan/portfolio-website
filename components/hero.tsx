'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Download } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const slideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const [showFB, setShowFB] = useState(false)
  const fbUrl = 'https://www.facebook.com/ebnul.aahsan'

  const handleFBClick = () => {
    window.open(fbUrl, '_blank')
    setShowFB(true)
    setTimeout(() => setShowFB(false), 3000)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Download Resume Button */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.a
                href="Md Ebnul Ahsan Resume.pdf"
                download
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-primary-foreground rounded-full hover:from-purple-600 hover:via-pink-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={slideVariants}
              className="mb-6 text-balance leading-tight"
            >
              <span className="block text-lg sm:text-xl font-medium text-muted-foreground mb-3">
                Hello I am!
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Ebnul Ahsan
              </span>
              <span className="block text-2xl sm:text-3xl font-semibold text-primary">
                Front-end Developer & Software Engineer
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground mb-8"
            >
              I create stunning, modern web experiences with smooth animations and beautiful design.
              Let's build something amazing together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors soft-shadow"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex justify-center items-center mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Animated background circle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Image container */}
              <motion.div
                className="relative w-60 h-60 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden glass-effect soft-shadow-lg border border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/ebnu.jpg"
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                onClick={handleFBClick}
                role="button"
                tabIndex={0}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm shadow-lg cursor-pointer"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                Let's Talk
              </motion.div>

              {showFB && (
                <div className="absolute -bottom-20 -right-6 bg-background/90 text-sm px-3 py-2 rounded shadow-lg">
                  Visit Facebook
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
