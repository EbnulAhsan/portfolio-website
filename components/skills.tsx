'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Palette,
  Zap,
  Database,
  GitBranch,
  Rocket,
  Users,
  BarChart3,
} from 'lucide-react'

const Skills = () => {
  const skills = [
    { icon: Code, label: 'Frontend', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Database, label: 'Backend', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { icon: Palette, label: 'UI/UX Design', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: Zap, label: 'Performance', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { icon: GitBranch, label: 'Version Control', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { icon: Rocket, label: 'DevOps', color: 'text-red-500', bg: 'bg-red-500/10' },
    { icon: Users, label: 'Collaboration', color: 'text-green-500', bg: 'bg-green-500/10' },
    { icon: BarChart3, label: 'Analytics', color: 'text-pink-500', bg: 'bg-pink-500/10' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="relative py-20">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.label}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  scale: 1.08,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative rounded-xl border border-border/50 soft-shadow overflow-hidden cursor-pointer"
              >
                {/* Background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                />

                <div
                  className={`relative p-6 h-full flex flex-col items-center justify-center text-center group-hover:${skill.bg} transition-all duration-300`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.2 }}
                    className={`p-3 rounded-lg ${skill.bg} group-hover:bg-primary/20 transition-all duration-300 mb-4`}
                  >
                    <Icon size={32} className={skill.color} />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-sm md:text-base font-semibold">{skill.label}</h3>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.15,
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tech Stack Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Frontend Stack',
              techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            },
            {
              title: 'Backend Stack',
              techs: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
            },
            {
              title: 'Tools & Services',
              techs: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
            },
          ].map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50 soft-shadow p-8"
            >
              <h3 className="text-lg font-bold mb-6">{stack.title}</h3>
              <div className="flex flex-wrap gap-3">
                {stack.techs.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
