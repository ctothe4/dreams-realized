import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { WorkPreviewSection } from "@/components/home/WorkPreviewSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ManifestoSection />
      <WorkPreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
