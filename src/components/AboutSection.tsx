import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Results",
    description: "See measurable growth in your digital presence within weeks, not months.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach your ideal audience with laser-focused campaigns that convert.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert marketers committed to your brand's success around the clock.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description: "Every decision backed by analytics and real-time performance insights.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
              We're Not Just an Agency,{" "}
              <span className="gradient-text">We're Your Partners</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At flying promotion, we believe in creating campaigns that don't just reach people—they move them. 
              Our team of creative strategists, designers, and data analysts work together to craft 
              marketing experiences that make your brand unforgettable.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded with a passion for innovation and results, we've helped hundreds of businesses 
              transform their digital footprint and achieve remarkable growth.
            </p>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
