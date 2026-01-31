import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Bell, MessageSquare, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const involvementTypes = [
  {
    icon: Users,
    title: "Volunteer",
    description: "Join community projects, events, and outreach efforts.",
  },
  {
    icon: Bell,
    title: "Stay Updated",
    description: "Get regular updates on projects and progress.",
  },
  {
    icon: MessageSquare,
    title: "Share Your Voice",
    description: "Tell us what Matero needs. Your input shapes our work.",
  },
  {
    icon: Calendar,
    title: "Attend Events",
    description: "Join community dialogues and local gatherings.",
  },
];

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    involvement: [] as string[],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for joining!",
      description: "We'll be in touch soon. Welcome to the movement.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      area: "",
      involvement: [],
      message: "",
    });
  };

  const toggleInvolvement = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      involvement: prev.involvement.includes(type)
        ? prev.involvement.filter((t) => t !== type)
        : [...prev.involvement, type],
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="documentary-caption text-primary mb-4">
              Take Action
            </p>
            <h1 className="headline-hero text-foreground mb-6">
              Join the Movement
            </h1>
            <p className="text-lead text-muted-foreground">
              We are a community of people committed to real work and real 
              change in Matero. Your participation is what makes this movement real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="headline-subsection text-foreground">
              Ways to Get Involved
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {involvementTypes.map((type, index) => (
              <motion.button
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleInvolvement(type.title)}
                className={`text-left p-6 rounded-sm border transition-all ${
                  formData.involvement.includes(type.title)
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <type.icon className={`w-8 h-8 mb-4 ${
                  formData.involvement.includes(type.title)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`} />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Phone Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+260..."
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Email (optional)
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Area in Matero
                </label>
                <Input
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="Which part of Matero do you live in?"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Your Message (optional)
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you'd like to see in Matero, or share your story..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Join the Movement
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By joining, you agree to receive updates about our work and events. 
                You can unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 md:py-32 bg-charcoal">
        <div className="container max-w-3xl text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-serif text-2xl md:text-3xl text-primary-foreground leading-relaxed mb-6">
              "You're not joining a campaign. You're joining real work. 
              Together, we're building something that will last beyond 
              any election."
            </p>
            <cite className="text-primary not-italic">Alexander Sakala</cite>
          </motion.blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
