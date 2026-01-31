import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const oldWay = [
  "Promise everything during campaigns",
  "Disappear after elections",
  "Speak about communities from a distance",
  "Measure success by votes won",
];

const newWay = [
  "Show the work before asking for trust",
  "Stay present every day, not just election season",
  "Live in and with the community",
  "Measure success by lives improved",
];

const Movement = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="documentary-caption text-primary mb-4">
              The Movement
            </p>
            <h1 className="headline-hero text-foreground mb-6">
              A Different Way
            </h1>
            <p className="text-lead text-muted-foreground">
              This isn't about winning an election. It's about building 
              a new model for what political leadership can be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Old vs New */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-muted/50 p-8 md:p-12 rounded-sm"
            >
              <p className="documentary-caption text-muted-foreground mb-4">
                The Promise Economy
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                The Old Way of Politics
              </h2>
              <ul className="space-y-4">
                {oldWay.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="text-muted-foreground/50">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* New Way */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-sm"
            >
              <p className="documentary-caption text-primary mb-4">
                The Proof Economy
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                The Movement Way
              </h2>
              <ul className="space-y-4">
                {newWay.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="documentary-caption mb-4">Core Philosophy</p>
            <h2 className="headline-section text-foreground mb-8">
              "Ti sebenza kuno"
            </h2>
            
            <div className="space-y-8 text-muted-foreground">
              <p className="text-lead border-documentary pl-6">
                In a world of endless political promises, we've chosen a 
                different path: proof. Instead of asking you to imagine 
                what we might do someday, we invite you to witness what 
                we're doing now.
              </p>
              
              <p>
                Every project we undertake, every community we serve, every 
                improvement we make. These aren't campaign tactics. They're 
                evidence of a simple truth: real leadership doesn't wait 
                for power. It works.
              </p>
              
              <p>
                This movement is built on the radical idea that you shouldn't 
                have to trust a politician's words. You should be able to 
                see their work. Judge their consistency. Measure their impact.
              </p>
              
              <p>
                We believe this transparency isn't just morally right. It's 
                the only foundation for genuine, lasting change. When the 
                work comes first, accountability follows naturally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Not a Campaign */}
      <section className="py-20 md:py-32 bg-charcoal">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="documentary-caption text-primary mb-4">
              Building for the Long Term
            </p>
            <h2 className="headline-section text-primary-foreground mb-8">
              A Movement, Not a Campaign
            </h2>
            
            <p className="text-lead text-primary-foreground/80 mb-8">
              Campaigns end. Movements evolve. We're building something 
              designed to outlast any single election. A model for 
              community-driven leadership that can grow, adapt, and 
              continue serving Matero for decades.
            </p>
            
            <Link to="/join">
              <Button size="lg" className="group">
                Join the Movement
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Movement;
