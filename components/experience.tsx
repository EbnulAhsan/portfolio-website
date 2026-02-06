'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    /*{
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc',
      period: '2022 - Present',
      description:
        'Leading development of scalable web applications with modern tech stack. Mentoring junior developers and architecting system solutions.',
      highlights: ['React & Next.js', 'Team Leadership', 'AWS Architecture'],
    },*/
    /*{
      role: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd',
      period: '2020 - 2022',
      description:
        'Developed and maintained multiple client projects. Improved performance and user experience. Collaborated with design and product teams.',
      highlights: ['Full-Stack Development', 'Database Design', 'API Integration'],
    },*/
    {
      role: 'Jr.Frontend Developer',
      company: 'SparkTech Agency',
      period: '2026 - present',
      description:
        'Created responsive and interactive web interfaces. Implemented animations and complex UI components. Ensured cross-browser compatibility.',
      highlights: ['UI Development', 'Responsive Design', 'Performance Optimization'],
    },
    {
      role: 'Junior Web Developer',
      company: 'Startup Hub',
      period: '2025 - 2026',
      description:
        'Assisted in building web applications using HTML, CSS, and JavaScript. Learned best practices in web development and collaboration.',
      highlights: ['Web Basics', 'Git & GitHub', 'Team Collaboration'],
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="experience" className="relative py-20">
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
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A journey of growth and technical excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              variants={itemVariants}
              className="relative mb-12 md:mb-16"
            >
              {/* Timeline line */}
              <div className="hidden md:block absolute left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/0" />

              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="hidden md:flex absolute left-0 top-8 w-24 h-24 items-center justify-center"
              >
                <div className="w-6 h-6 rounded-full bg-primary border-4 border-background soft-shadow" />
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 12 }}
                className="md:ml-56 group rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent soft-shadow overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex px-4 py-2 rounded-lg bg-primary/10 text-sm font-medium text-primary w-fit"
                    >
                      {exp.period}
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3">
                    {exp.highlights.map((highlight) => (
                      <motion.span
                        key={highlight}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-primary/20 text-primary"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Building modern, user-focused digital experiences with passion and precision
          </p>
          <p className="text-sm text-primary font-semibold">
            Always learning, always growing 🚀
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
