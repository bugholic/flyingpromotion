import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  // {
  //   name: "Alex Morgan",
  //   role: "Founder & CEO",
  //   image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  //   bio: "Visionary leader with 15+ years in digital marketing",
  // },
  // {
  //   name: "Jessica Chen",
  //   role: "Creative Director",
  //   image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  //   bio: "Award-winning designer transforming brands",
  // },
  // {
  //   name: "Marcus Williams",
  //   role: "Head of Strategy",
  //   image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  //   bio: "Data-driven strategist delivering results",
  // },
  // {
  //   name: "Sophia Patel",
  //   role: "Social Media Lead",
  //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  //   bio: "Social expert growing communities worldwide",
  // },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Passionate professionals dedicated to making your brand soar
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover-lift">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      {[Linkedin, Twitter, Mail].map((Icon, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
