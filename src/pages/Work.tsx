import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const projects = [
  {
    id: 1,
    image: work1,
    title: "Drainage Infrastructure Improvement",
    location: "Matero East",
    date: "January 2026",
    category: "Infrastructure",
    description: "Community-led initiative to improve drainage systems and reduce flooding during the rainy season. Working alongside local contractors and residents to build sustainable solutions.",
    status: "In Progress",
  },
  {
    id: 2,
    image: work2,
    title: "Youth Vocational Training Program",
    location: "Matero Community Center",
    date: "January 2026",
    category: "Youth & Skills",
    description: "Hands-on training program teaching carpentry, metalwork, and construction skills to young people. Creating pathways to employment and entrepreneurship.",
    status: "Ongoing",
  },
  {
    id: 3,
    image: work3,
    title: "Weekly Community Dialogue Sessions",
    location: "Various Locations",
    date: "Every Saturday",
    category: "Community",
    description: "Open community meetings where residents share concerns, ideas, and feedback directly. No speeches, just listening and collaborative problem-solving.",
    status: "Ongoing",
  },
  {
    id: 4,
    image: work1,
    title: "Market Vendor Support Initiative",
    location: "Matero Main Market",
    date: "December 2025",
    category: "Economic",
    description: "Supporting local market vendors with improved trading spaces, storage solutions, and access to micro-financing opportunities.",
    status: "Completed",
  },
  {
    id: 5,
    image: work2,
    title: "School Supply Distribution",
    location: "Matero Schools",
    date: "November 2025",
    category: "Education",
    description: "Partnership with local businesses to provide essential school supplies to students from families facing economic hardship.",
    status: "Completed",
  },
];

const categories = ["All", "Infrastructure", "Youth & Skills", "Community", "Economic", "Education"];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="documentary-caption text-primary mb-4">
              Live Feed
            </p>
            <h1 className="headline-hero text-foreground mb-6">
              Work in Motion
            </h1>
            <p className="text-lead text-muted-foreground">
              This is the heart of our movement. A living record of real projects, 
              real progress, and real impact in Matero. No promises, just proof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-sm whitespace-nowrap transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Feed */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-video overflow-hidden rounded-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="documentary-caption text-primary">
                      We're working here
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {project.location}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {project.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-sm bg-muted text-sm text-muted-foreground">
                      {project.category}
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-sm text-sm ${
                      project.status === "Completed"
                        ? "bg-accent/20 text-accent"
                        : project.status === "In Progress"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
