import { Link } from "react-router-dom";
import { SEO } from "@/components/editorial/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout><SEO title="Page Not Found" description="This page is not available on Alexander Sakala's personal website." noindex/><div className="container flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <p className="eyebrow mb-5">404 / Not available</p>
        <h1 className="mb-6 font-display text-5xl">A page not yet written.</h1>
        <p className="mb-8 text-muted-foreground">This page is not available.</p>
        <Button asChild variant="outline"><Link to="/">Return Home</Link></Button>
      </div>
    </div></Layout>
  );
};

export default NotFound;
