import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Flying Promotion transformed our brand completely. Our engagement rates increased by 300% in just three months!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenLeaf Co.",
    content: "The team's creativity and dedication exceeded all expectations. They truly understand modern digital marketing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Nova Corp",
    content: "Working with Flying Promotion was a game-changer. Their data-driven approach delivered real, measurable results.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Owner, Urban Eats",
    content: "Best investment we ever made. Our social media following grew 10x and sales doubled within 6 months.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "CEO, StyleHub",
    content: "Incredibly professional and creative team. They brought our vision to life in ways we never imagined possible.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Show 3 cards on desktop, 1 on mobile
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
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
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </motion.div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border/50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile View - Single Card */}
        <div className="md:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border/50"
          >
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Quote className="w-5 h-5 text-primary" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <p className="text-foreground/80 leading-relaxed mb-6">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-card rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-card rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
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
    </section>
  );
};

export default TestimonialsSection;
