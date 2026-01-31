import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-end pb-16 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Alexander Sakala in Matero community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="documentary-caption text-primary mb-4">
            Matero Constituency
          </p>
          
          <h1 className="headline-hero text-primary-foreground mb-6">
            We're Working Here.
          </h1>
          
          <p className="text-lead text-primary-foreground/90 mb-4 font-serif italic">
            "Ti sebenza kuno"
          </p>
          
          <p className="text-lead text-primary-foreground/80 max-w-xl mb-8">
            Action before promise. Proof before politics. 
            This is not a campaign. It's a movement in motion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/work">
              <Button size="lg" className="group">
                Follow the Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/join">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Join the Movement
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
