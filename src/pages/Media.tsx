import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import heroImage from "@/assets/hero-community.jpg";

const featuredVideos = [
  {
    id: 1,
    title: "The Matero Story",
    subtitle: "A Documentary",
    thumbnail: heroImage,
    duration: "12:34",
    category: "Featured",
  },
];

const videos = [
  {
    id: 2,
    title: "Building Together: Drainage Project",
    thumbnail: work1,
    duration: "4:22",
    category: "Community Work",
  },
  {
    id: 3,
    title: "Youth Training: Day One",
    thumbnail: work2,
    duration: "6:15",
    category: "Youth & Skills",
  },
  {
    id: 4,
    title: "Voices from the Market",
    thumbnail: work3,
    duration: "3:48",
    category: "Community Voices",
  },
  {
    id: 5,
    title: "Saturday Dialogue: What Matero Needs",
    thumbnail: work3,
    duration: "8:02",
    category: "Community Dialogue",
  },
  {
    id: 6,
    title: "Behind the Scenes: A Week in Matero",
    thumbnail: work1,
    duration: "5:37",
    category: "Behind the Scenes",
  },
];

const Media = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <p className="documentary-caption text-primary mb-4">
              Media Hub
            </p>
            <h1 className="headline-hero text-foreground mb-6">
              Stories in Motion
            </h1>
            <p className="text-lead text-muted-foreground">
              Documentary footage, community voices, and behind-the-scenes 
              moments. The real story of a movement being built.
            </p>
          </motion.div>

          {/* Featured Video */}
          {featuredVideos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="documentary-caption text-primary mb-2">
                  {video.category}
                </p>
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {video.title}
                </h2>
                <p className="text-primary-foreground/80">
                  {video.subtitle} • {video.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="headline-subsection text-foreground">
              More Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-sm overflow-hidden mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <span className="absolute bottom-2 right-2 bg-foreground/80 text-primary-foreground text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                
                <p className="documentary-caption text-primary mb-1">
                  {video.category}
                </p>
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
