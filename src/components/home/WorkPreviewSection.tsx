import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const projects = [
  {
    id: 1,
    image: work1,
    title: "Drainage Infrastructure",
    location: "Matero East",
    description: "Community-led drainage improvements reducing flooding during rainy season.",
    date: "January 2026",
  },
  {
    id: 2,
    image: work2,
    title: "Youth Skills Training",
    location: "Matero Community Center",
    description: "Hands-on vocational training for young people in carpentry and metalwork.",
    date: "January 2026",
  },
  {
    id: 3,
    image: work3,
    title: "Community Dialogue",
    location: "Matero Market",
    description: "Weekly community meetings to hear directly from residents about local needs.",
    date: "Ongoing",
  },
];

export function WorkPreviewSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <p className="documentary-caption mb-3">Live Updates</p>
            <h2 className="headline-section text-foreground">Work in Motion</h2>
          </div>
          <Link to="/work" className="mt-4 md:mt-0">
            <Button variant="ghost" className="group text-primary">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </div>
              
              <p className="documentary-caption text-primary mb-2">
                We're working here — {project.location}
              </p>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <p className="text-xs text-muted-foreground mt-3">
                {project.date}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
