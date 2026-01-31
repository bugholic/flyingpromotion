import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Video,
  Camera,
  PenLine,
  Share2,
  Megaphone,
  Target,
  MessageCircle,
  Globe2,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Instagram post & reel creation",
    description: "Thumb-stopping visuals and edits tailored to your brand voice and niche.",
  },
  {
    icon: Video,
    title: "Video editing and video shoot",
    description: "Full-cycle production - from on-site shooting to polished story-driven edits.",
  },
  {
    icon: PenLine,
    title: "Caption, hashtag & script writing",
    description: "Copy that hooks, hashtags that rank, and scripts that keep viewers watching.",
  },
  {
    icon: MessageCircle,
    title: "Complete social media handling",
    description: "Daily posting, inbox care, and community management handled end-to-end.",
  },
  {
    icon: Megaphone,
    title: "Paid ads (Instagram/Facebook)",
    description: "Performance-first ads with precise targeting and continuous optimization.",
  },
  {
    icon: Target,
    title: "Lead generation & enquiry setup",
    description: "Funnels, forms, and follow-ups built to convert interest into revenue.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business setup & handling",
    description: "Catalogs, quick replies, and automations to keep conversations converting.",
  },
  {
    icon: Globe2,
    title: "Website building & designing",
    description: "High-converting landing pages and full sites aligned to your campaign goals.",
  },
  {
    icon: Camera,
    title: "Product image shoot",
    description: "Studio-quality shots that make your products pop across every platform.",
  },
  {
    icon: Palette,
    title: "Graphic designing (menu, posters, banners)",
    description: "Brand-consistent creatives for launches, offers, and everyday promotion.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(pointer:coarse)");
    const update = () => setIsTouch(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section id="services" className="py-24 bg-background relative overflow-visible">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Services built to <span className="gradient-text">grow your brand</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From daily content to revenue-focused funnels, we cover every step so you stay visible, memorable, and profitable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const baseAnim = isInView ? { opacity: 1, y: 0 } : {};
            const pose = isActive
              ? { rotateX: 0, rotateY: 0, scale: 1.02 }
              : { rotateX: 0, rotateY: 0, scale: 1 };

            return (
              <motion.div
                layout
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ ...baseAnim, ...pose }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className={`glass-card p-6 flex flex-col gap-3 relative overflow-visible group hover:bg-white/10 hover:text-slate-100 ${
                  isActive ? "z-50" : "z-10"
                }`}
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={() => !isTouch && setActiveIndex(index)}
                onMouseLeave={() => !isTouch && setActiveIndex(null)}
                onClick={() => {
                  if (!isTouch) return;
                  setActiveIndex((prev) => (prev === index ? null : index));
                }}
                whileHover={!isTouch ? { rotateX: -2, rotateY: 3, scale: 1.015 } : {}}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                  <service.icon className="w-6 h-6 group-hover:scale-150 transition-all duration-300"/>
                </div>
                <h3 className="text-xl font-heading font-semibold leading-tight">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 right-0 top-0 mt-3 z-50"
                  >
                    <div className="rounded-2xl border border-border bg-background shadow-2xl shadow-black/25 p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shrink-0 shadow-md shadow-primary/30">
                          <service.icon className="w-5 h-5" />
                        </div>
                        <div className="font-heading font-semibold leading-tight text-base">
                          {service.title}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )} */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
