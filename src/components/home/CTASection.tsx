import { motion } from "framer-motion";
import { ArrowRight, Users, Bell, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: Users,
    title: "Join the Movement",
    description: "Become part of something real. Volunteer your time and talent.",
    link: "/join",
    cta: "Get Involved",
  },
  {
    icon: Bell,
    title: "Follow the Work",
    description: "Get updates on projects, events, and community progress.",
    link: "/join",
    cta: "Stay Updated",
  },
  {
    icon: Heart,
    title: "Share Your Story",
    description: "Your voice matters. Tell us what Matero needs.",
    link: "/join",
    cta: "Share Now",
  },
];

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="documentary-caption mb-3">Take Action</p>
          <h2 className="headline-section text-foreground mb-4">
            Be Part of the Work
          </h2>
          <p className="text-lead text-muted-foreground max-w-2xl mx-auto">
            This movement isn't about one person. It's about what we build together. 
            Your participation is the proof that change starts now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-sm p-8 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <action.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {action.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-6">
                {action.description}
              </p>
              
              <Link to={action.link}>
                <Button variant="ghost" className="group text-primary p-0 h-auto">
                  {action.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
