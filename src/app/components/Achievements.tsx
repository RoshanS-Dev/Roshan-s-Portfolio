import { motion } from 'motion/react';
import { Trophy, Users, Lightbulb, Medal } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "District-level Cricket Player",
      description: "Represented district in competitive cricket tournaments"
    },
    {
      icon: Medal,
      title: "University Cricket Participant",
      description: "Competed at university-level cricket championships"
    },
    {
      icon: Users,
      title: "Department Cricket Captain",
      description: "Led and managed the department cricket team"
    },
    {
      icon: Lightbulb,
      title: "SIH 2025 Participant",
      description: "Participated in Smart India Hackathon 2025"
    },
    {
      icon: Users,
      title: "Esports Club Organizer",
      description: "Organized and managed esports events and tournaments"
    },
    {
      icon: Trophy,
      title: "Sports Event Volunteer",
      description: "Actively volunteered in organizing sports events"
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
            Achievements & Activities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond coding - leadership, teamwork, and community involvement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-xl transition-all duration-300" />
                
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
