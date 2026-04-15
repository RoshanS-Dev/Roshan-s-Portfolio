import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Hospital Resource Optimization Analyzer",
      description: "ML-powered analyzer that predicts resource requirements, optimizes bed allocation, and provides actionable insights through an intuitive Flask web dashboard. Reduces operational costs by 15-20% and improves bed utilization efficiency.",
      image: "https://images.unsplash.com/photo-1587230307094-7ea936b24278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NjI2MjgyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      techStack: ["Python", "Flask", "Machine Learning", "Pandas", "NumPy", "Scikit-learn"],
      color: "from-purple-500 to-pink-500",
      liveLink: "https://lnkd.in/dn244H8E",
      githubLink: "https://lnkd.in/dn244H8E"
    },
    {
      title: "Smart Data Analysis Platform",
      description: "A comprehensive platform for analyzing large datasets with automated insights, visualization tools, and export capabilities. Supports multiple data formats and provides real-time analytics.",
      image: "https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBkYXNoYm9hcmQlMjBjaGFydHN8ZW58MXx8fHwxNzc2MjQyNTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Flask"],
      color: "from-blue-500 to-cyan-500",
      liveLink: "https://lnkd.in/dSSvzHN6",
      githubLink: "https://lnkd.in/dSSvzHN6"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building practical solutions to real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-gray-700/50 text-gray-200 text-xs border border-gray-600/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => window.open(project.liveLink, '_blank')}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button 
                      onClick={() => window.open(project.githubLink, '_blank')}
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-gray-700/50"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
