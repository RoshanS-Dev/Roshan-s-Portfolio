import { motion } from 'motion/react';
import { Award, Calendar, CheckCircle } from 'lucide-react';
import japaneseImg from '../../imports/japanese_nptel.jpg';
import redhatImg from '../../imports/redhat_certificate.jpg';

export function Certifications() {
  const certifications = [
    {
      title: "Introduction to Japanese Language and Culture",
      issuer: "Indian Institute of Technology (IIT)",
      image: japaneseImg,
      description: "My first experience learning Japanese and also my first time appearing for a Japanese language exam.",
      details: [
        "12 weeks of structured learning",
        "25 online assignments",
        "Final proctored examination"
      ],
      score: "Assignment: 19.06/25 | Proctored Exam: 30.75/75",
      color: "from-red-500 to-pink-500",
      flag: "🇯🇵"
    },
    {
      title: "Red Hat System Administration I (RH124 - RHA) Ver. 9.3",
      issuer: "Red Hat",
      image: redhatImg,
      description: "Hands-on experience with Linux system administration, including essential command-line operations, managing users and files, and understanding system processes and configurations.",
      details: [
        "Essential command-line operations",
        "Managing users and files",
        "System processes and configurations"
      ],
      score: null,
      color: "from-red-600 to-orange-600",
      flag: null
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
            Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
                
                <div className="relative grid lg:grid-cols-2 gap-8 p-8 md:p-10">
                  {/* Left: Content */}
                  <div className="flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      {cert.flag && <span className="text-3xl">{cert.flag}</span>}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-purple-400 font-semibold mb-4">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-300 mb-6">
                      {cert.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-6">
                      {cert.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Score */}
                    {cert.score && (
                      <div className="flex items-center gap-2 bg-gray-700/30 rounded-lg px-4 py-3 border border-gray-600/30">
                        <Calendar className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-300 text-sm">{cert.score}</span>
                      </div>
                    )}
                  </div>

                  {/* Right: Certificate Image */}
                  <div className="flex items-center justify-center order-1 lg:order-2">
                    <div className="relative w-full rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-auto object-contain"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
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
