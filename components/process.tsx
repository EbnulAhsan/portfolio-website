'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Pencil, Code, Rocket } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Ideate',
      description: 'Understanding your vision and defining project goals',
      icon: Lightbulb,
      color: 'from-blue-500/20 to-blue-500/5',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Creating beautiful, user-centric design solutions',
      icon: Pencil,
      color: 'from-purple-500/20 to-purple-500/5',
    },
    {
      number: '03',
      title: 'Develop',
      description: 'Building robust, scalable, and performant solutions',
      icon: Code,
      color: 'from-cyan-500/20 to-cyan-500/5',
    },
    {
      number: '04',
      title: 'Deploy',
      description: 'Launching and optimizing for maximum impact',
      icon: Rocket,
      color: 'from-green-500/20 to-green-500/5',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="relative py-20">
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
            My <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to bringing ideas to life with precision and creativity
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`group relative rounded-2xl bg-gradient-to-br ${step.color} border border-border/50 soft-shadow overflow-hidden`}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <div className="relative p-8 h-full flex flex-col justify-between">
                  {/* Number */}
                  <div className="mb-6">
                    <motion.div
                      className="text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon size={32} className="text-primary" />
                  </motion.div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 w-6 -mr-3 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:hidden mt-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 mb-8 relative"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg"
                >
                  {step.number}
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                )}
              </div>
              <div className="pb-8 pt-2">
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process
