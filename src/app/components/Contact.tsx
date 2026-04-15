import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Code } from 'lucide-react';

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "roshaikh21@gmail.com",
      link: "mailto:roshaikh21@gmail.com",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Roshan Shaikh",
      link: "https://www.linkedin.com/in/roshan-shaikh-0bab59343",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "RoshanS-Dev",
      link: "https://github.com/RoshanS-Dev",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "Roshan_Shaikh21",
      link: "https://leetcode.com/u/Roshan_Shaikh21/",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-xl transition-all duration-300" />
                
                <div className="relative flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                    <p className="text-white font-medium truncate group-hover:text-purple-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>

                  <svg 
                    className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500">
            Designed & Built by <span className="text-purple-400 font-semibold">Roshan Shaikh</span>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Pune, India • 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
