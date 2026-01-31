import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import alexanderCommunity1 from "@/assets/alexander-community-1.jpg";
import alexanderCommunity2 from "@/assets/alexander-community-2.jpg";

const values = [
  {
    title: "Integrity",
    description: "Words must match actions. Always.",
  },
  {
    title: "Consistency",
    description: "Leadership is a daily practice, not a campaign season performance.",
  },
  {
    title: "Humility",
    description: "The community leads. We follow and serve.",
  },
  {
    title: "Action",
    description: "Work speaks louder than promises ever could.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="documentary-caption mb-4">Meet Alexander</p>
              <h1 className="headline-hero text-foreground mb-6">
                A Maker. A Builder. A Son of Matero.
              </h1>
              <p className="text-lead text-muted-foreground mb-6">
                Before the campaign, there was the work. Entrepreneur, job creator, 
                community builder. Alexander Sakala has spent years proving that 
                leadership isn't about titles. It's about what you do.
              </p>
              <p className="text-muted-foreground">
                Born and raised in Matero, Alexander understands the challenges 
                this community faces because he's lived them. His journey from 
                local entrepreneur to aspiring Member of Parliament isn't a 
                career move. It's a continuation of the same work he's always done.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={alexanderCommunity1}
                  alt="Alexander Sakala with UPND supporters in Matero"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={alexanderCommunity2}
                  alt="Alexander Sakala greeting community members"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-sm">
                <p className="font-serif text-lg font-semibold">
                  "Work before power."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="documentary-caption mb-4">The Origin</p>
            <h2 className="headline-section text-foreground mb-8">
              Matero Roots
            </h2>
            
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p className="border-documentary pl-6">
                Matero isn't just where Alexander lives. It's who he is. The dusty 
                streets, the market stalls, the families working to build better 
                lives. He's walked these paths his entire life.
              </p>
              
              <p>
                Growing up here taught him something that no university or political 
                training could: real change happens at the ground level. It happens 
                in conversations at the market. In shared labor. In the simple act 
                of showing up, again and again.
              </p>
              
              <p>
                This understanding shaped everything that followed. When he started 
                his businesses, he hired locally. When he saw community needs, he 
                didn't wait for government programs. He organized. He built. He worked.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entrepreneur Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="documentary-caption mb-4">The Work</p>
            <h2 className="headline-section text-foreground mb-8">
              Entrepreneur & Job Creator
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lead">
                Alexander's entrepreneurial journey began with a simple belief: 
                economic opportunity should start at home.
              </p>
              
              <p>
                His businesses have created jobs for dozens of young people in 
                Matero. Not as charity, but as investment in community capacity. 
                He believes that a thriving local economy is the foundation for 
                everything else: safer streets, better schools, stronger families.
              </p>
              
              <p>
                This isn't theory. It's his lived practice. Every hire, every 
                supplier relationship, every business decision has been guided 
                by one question: does this lift up Matero?
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="documentary-caption mb-4">The Philosophy</p>
            <h2 className="headline-section text-foreground">
              Leadership Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-serif text-2xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
