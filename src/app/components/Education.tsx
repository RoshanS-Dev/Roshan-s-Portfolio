import { motion } from 'motion/react';
import { GraduationCap, TrendingUp } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science (AI-ML)",
      institution: "JSPM Rajarshi Shahu College of Engineering",
      location: "Pune, India",
      duration: "2023 - 2027",
      performance: [
        { label: "Semester 1 SGPA", value: "8.18" },
        { label: "Semester 2 SGPA", value: "8.23" },
        { label: "Semester 3 SGPA", value: "9.23" }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      degree: "12th Grade (HSC)",
      institution: "Maharashtra State Board",
      location: "Pune, India",
      duration: "2023",
      performance: [
        { label: "Percentage", value: "70.17%" },
        { label: "MHT-CET", value: "95.96%" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      degree: "10th Grade (SSC)",
      institution: "Maharashtra State Board",
      location: "Pune, India",
      duration: "2021",
      performance: [
        { label: "Percentage", value: "80.20%" }
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic journey and achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300" />
                
                <div className="relative flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-purple-400 font-medium">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-gray-400 md:text-right">
                        {edu.duration}
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="flex flex-wrap gap-4">
                      {edu.performance.map((perf, i) => (
                        <div key={i} className="flex items-center gap-2 bg-gray-700/30 rounded-lg px-4 py-2 border border-gray-600/30">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                          <span className="text-gray-400 text-sm">{perf.label}:</span>
                          <span className="text-white font-bold">{perf.value}</span>
                        </div>
                      ))}
                    </div>
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
