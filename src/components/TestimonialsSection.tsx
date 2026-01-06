import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Flying Promotionn transformed our brand completely. Our engagement rates increased by 300% in just three months!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenLeaf Co.",
    content: "The team's creativity and dedication exceeded all expectations. They truly understand modern digital marketing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    color: "from-orange-500 to-amber-400",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Nova Corp",
    content: "Working with Flying Promotionn was a game-changer. Their data-driven approach delivered real, measurable results.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "David Park",
    role: "Owner, Urban Eats",
    content: "Best investment we ever made. Our social media following grew 10x and sales doubled within 6 months.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    color: "from-red-400 to-orange-400",
  },
  {
    name: "Lisa Thompson",
    role: "CEO, StyleHub",
    content: "Incredibly professional and creative team. They brought our vision to life in ways we never imagined possible.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    color: "from-orange-300 to-rose-400",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Bookshelf Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bookshelf Container */}
          <div className="flex items-end justify-center gap-2 md:gap-4 h-[400px] md:h-[450px] perspective-1000">
            {testimonials.map((testimonial, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, rotateY: -30 }}
                  animate={isInView ? {
                    opacity: Math.abs(offset) <= 1 ? 1 : 0.5,
                    rotateY: offset * 5,
                    scale: isActive ? 1 : 0.85,
                    x: offset * 20,
                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  } : {}}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative w-48 md:w-64 cursor-pointer transition-all duration-500 ${
                    isActive ? 'z-10' : 'z-0'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Book/Card */}
                  <motion.div
                    animate={{
                      rotateY: hoveredIndex === index ? -20 : 0,
                      translateZ: hoveredIndex === index ? 30 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`relative bg-gradient-to-br ${testimonial.color} rounded-2xl p-6 h-80 md:h-96 shadow-2xl overflow-hidden`}
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: isActive 
                        ? '0 25px 50px -12px rgba(0,0,0,0.25), 10px 0 20px -10px rgba(0,0,0,0.1)' 
                        : '0 10px 30px -12px rgba(0,0,0,0.15)',
                    }}
                  >
                    {/* Spine Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col text-white">
                      <Quote className="w-8 h-8 opacity-50 mb-4" />
                      <p className="text-sm md:text-base flex-grow leading-relaxed opacity-90">
                        "{testimonial.content}"
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full border-2 border-white/50 object-cover"
                        />
                        <div>
                          <div className="font-semibold text-sm">{testimonial.name}</div>
                          <div className="text-xs opacity-75">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
                    <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/10 rounded-full" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Shelf */}
          <div className="relative h-8 mt-4">
            <div className="absolute inset-x-0 h-3 bg-gradient-to-r from-orange-800 via-orange-600 to-orange-800 rounded-lg shadow-lg" />
            <div className="absolute inset-x-0 top-3 h-2 bg-gradient-to-b from-orange-900 to-orange-950 rounded-b-lg" />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
