import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/editorial/SEO";
import { ArticleGrid, EmptyEditorial, PageIntro, TextLink } from "@/components/editorial/Editorial";
import { articles, publishedOnly } from "@/content/editorial";
export default function Publishing({ writing = false }: { writing?: boolean }) {
 const published = publishedOnly(articles);
 return <Layout><SEO title={writing ? "Writing" : "Perspectives"} description={writing ? "The writing and publishing home of Alexander Mumba Sakala. Approved published work will appear here." : "Essays, commentary and personal reflections by Alexander Mumba Sakala, as approved work becomes available."}/><PageIntro eyebrow={writing ? "Writing" : "Ideas & perspectives"} title={writing ? "The written word." : "Room for reflection."} description={writing ? "A home for Alexander’s published words and the ideas they carry." : "Experiences considered. Ideas explored. Personal reflections, in Alexander’s own words."}/><section className="container pb-24">{published.length ? <ArticleGrid articles={published}/> : <EmptyEditorial title={writing ? "No published writing yet." : "The next words are still to come."} text="No essays or personal reflections have been published here yet."/>}<div className="mt-12"><TextLink to={writing ? "/perspectives" : "/writing"}>{writing ? "Explore Perspectives" : "Visit Writing"}</TextLink></div></section></Layout>;
}
