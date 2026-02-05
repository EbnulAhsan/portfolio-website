'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory management',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/projects/ecommerce.jpg',
      gradient: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/30',
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard with real-time data visualization',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      image: '/projects/dashboard.jpg',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Intelligent chat interface with natural language processing',
      tags: ['React', 'OpenAI', 'Express'],
      image: '/projects/chat.jpg',
      gradient: 'from-green-500/20 to-cyan-500/20',
      borderColor: 'border-green-500/30',
    },
    // {
    //   id: 4,
    //   title: 'Mobile App Design',
    //   description: 'Cross-platform mobile application with smooth animations',
    //   tags: ['React Native', 'Firebase', 'UI/UX'],
    //   image: '/projects/mobile.jpg',
    //   gradient: 'from-purple-500/20 to-pink-500/20',
    //   borderColor: 'border-purple-500/30',
    //  have to add other projects later  
    // },
    // {
    //   id: 5,
    //   title: 'Portfolio Website',
    //   description: 'Interactive portfolio showcasing creative projects',
    //   tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    //   image: '/projects/portfolio.jpg',
    //   gradient: 'from-orange-500/20 to-red-500/20',
    //   borderColor: 'border-orange-500/30',
    // },
    // {
    //   id: 6,
    //   title: 'Content Management System',
    //   description: 'Headless CMS for efficient content delivery',
    //   tags: ['Node.js', 'PostgreSQL', 'GraphQL'],
    //   image: '/projects/cms.jpg',
    //   gradient: 'from-indigo-500/20 to-purple-500/20',
    //   borderColor: 'border-indigo-500/30',
    // },
  ]

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

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of my recent work and creative explorations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} border ${project.borderColor} backdrop-blur-sm soft-shadow cursor-pointer transition-all duration-300 hover:soft-shadow-lg`}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-muted/50 to-muted/20 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold leading-tight flex-1">
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ x: 4, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  >
                    <ArrowUpRight size={20} className="text-primary" />
                  </motion.div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/0 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
