import { motion } from 'motion/react';
import { Code, Database, Globe, BarChart } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["C", "C++", "Python", "JavaScript (Learning)"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart,
      title: "Data & ML",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML", "CSS", "Flask", "React (Learning)"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Databases & DSA",
      skills: ["MySQL", "MongoDB", "50+ LeetCode Problems"],
      color: "from-orange-500 to-red-500"
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
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300" />
                
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + (i * 0.05) }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
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
