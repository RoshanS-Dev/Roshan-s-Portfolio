import { motion } from 'motion/react';
import myPhoto from '../../imports/my_photo_ai.jpg';

export function About() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Passionate about technology and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden">
                <img 
                  src={myPhoto}
                  alt="Roshan Shaikh"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 hover:from-purple-500/5 hover:to-pink-500/5 rounded-2xl transition-all duration-300" />
              
              <div className="relative space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am <span className="text-purple-400 font-semibold">Roshan Shaikh</span>, a Computer Science and Business Systems (AI-ML) student at JSPM's Rajashri Shahu College of Engineering, Pune. I have a strong interest in technology and problem-solving, and I actively build projects to apply my knowledge to real-world challenges.
                </p>
                
                <p>
                  I am continuously working on strengthening my technical skills in programming, data analysis, and development, while also focusing on consistency and growth. Alongside my academic journey, I am a <span className="text-pink-400 font-semibold">district-level cricket player</span>, which has helped me develop discipline, teamwork, and leadership qualities.
                </p>
                
                <p>
                  I am motivated to learn, adapt, and contribute effectively while building a strong foundation for future opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
