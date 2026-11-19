import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="documentary-caption mb-6">The Philosophy</p>
          
          <blockquote className="border-documentary pl-6 text-left md:text-center md:border-l-0 md:border-t-0 md:pl-0">
            <p className="headline-subsection text-foreground leading-relaxed mb-8">
              "Most politicians ask you to trust their promises. 
              We believe in something different:
              <span className="text-primary"> showing you the work first.</span>"
            </p>
          </blockquote>
          
          <p className="text-lead text-muted-foreground">
            In Matero, we don't wait for power to serve. We're already working. 
            Every project you see here, every story we share, is proof that 
            leadership is not about what you promise—it's about what you do today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
