'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        'Timeline depends on project complexity. Small projects take 2-4 weeks, medium projects 1-3 months, and larger endeavors 3+ months. We always provide realistic estimates upfront.',
    },
    // {
    //   question: 'Do you offer ongoing support after launch?',
    //   answer:
    //     'Yes! I provide post-launch support including bug fixes, performance optimization, and feature updates. We can discuss maintenance plans based on your needs.',
    // },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like AWS and Vercel. I stay updated with latest industry trends.',
    },
    {
      question: 'Can you work with existing codebases?',
      answer:
        'Absolutely! I have extensive experience refactoring and improving existing projects. Whether it\'s modernizing old code or optimizing current systems, I can help.',
    },
    {
      question: 'How do you approach design and UX?',
      answer:
        'I combine user-centric design principles with modern UI trends. Every project starts with understanding your users, wireframing, prototyping, and iterative refinement.',
    },
    {
      question: 'What about SEO and performance?',
      answer:
        'Performance and SEO are built-in, not afterthoughts. I implement best practices for Core Web Vitals, accessibility, and search engine optimization from day one.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  return (
    <section id="faq" className="relative py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? I've got answers.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          <AnimatePresence>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 rounded-xl border border-border/50 bg-gradient-to-r from-primary/5 to-transparent hover:border-primary/30 transition-all duration-300 soft-shadow group-hover:soft-shadow-lg"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={24} className="text-primary" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="px-6 py-4 text-muted-foreground leading-relaxed border-t border-border/30 mt-0"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? Let's chat!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors soft-shadow"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
