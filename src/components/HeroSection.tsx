import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Megaphone,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "./ui/button";

const FloatingIcon = ({
  icon: Icon,
  className,
  delay = 0,
  gradient = "from-primary to-accent",
}: {
  icon: React.ElementType;
  className: string;
  delay?: number;
  gradient?: string;
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotateY: [0, 15, 0],
      rotateX: [0, -10, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
  >
    <div
      className={`relative p-4 md:p-6 rounded-2xl bg-gradient-to-br ${gradient} shadow-2xl`}
      style={{
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 40px rgba(255,107,0,0.3)",
        transform: "rotateX(10deg) rotateY(-5deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent" />
      {/* Bottom shadow for 3D depth */}
      <div className="absolute -bottom-2 left-2 right-2 h-4 bg-black/20 blur-lg rounded-full" />
      <Icon
        className="w-8 h-8 md:w-12 md:h-12 text-white relative z-10"
        strokeWidth={1.5}
      />
    </div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 diagonal-grid-overlay"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Floating 3D Icons */}
      <FloatingIcon
        icon={Rocket}
        className="top-32 right-[15%] hidden md:block"
        delay={0}
        gradient="from-orange-500 to-red-500"
      />
      <FloatingIcon
        icon={Megaphone}
        className="bottom-40 left-[10%] hidden md:block"
        delay={1}
        gradient="from-amber-500 to-orange-600"
      />
      <FloatingIcon
        icon={Target}
        className="top-48 left-[8%] hidden md:block"
        delay={0.5}
        gradient="from-orange-400 to-rose-500"
      />
      <FloatingIcon
        icon={TrendingUp}
        className="bottom-32 right-[12%] hidden md:block"
        delay={2}
        gradient="from-yellow-500 to-orange-500"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Your Growth Partner in Digital World
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            We Make Your Brand <span className="gradient-text">Fly Higher</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Transform your digital presence with cutting-edge marketing
            strategies. We help businesses soar to new heights with creative
            solutions and data-driven results.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" className="group text-white">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button variant="heroOutline" size="xl">
              View Our Work
            </Button> */}
          </motion.a>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { value: "15+", label: "Happy Clients" },
              { value: "50+", label: "Projects Done" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-card p-4 md:p-6"
              >
                <div className="text-2xl md:text-4xl font-heading font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
