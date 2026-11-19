import { ArrowRight, ArrowUpRight, Feather } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { civicPlatform, milestones, publishedOnly, type Article } from "@/content/editorial";

export function TextLink({ to, children, light = false }: { to: string; children: React.ReactNode; light?: boolean }) {
  return <Button asChild variant="link" className={`editorial-link ${light ? "text-primary-foreground" : "text-foreground"}`}><Link to={to}>{children}<ArrowRight size={16} /></Link></Button>;
}
export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro container"><p className="eyebrow">{eyebrow}</p><h1 className="page-title">{title}</h1><p className="intro-copy">{description}</p></section>;
}
export function EmptyEditorial({ title, text }: { title: string; text: string }) {
  return <div className="empty-editorial"><Feather className="text-primary mb-6" size={28} strokeWidth={1} /><h2 className="text-3xl font-display mb-4">{title}</h2><p className="text-muted-foreground max-w-lg leading-relaxed">{text}</p></div>;
}
export function Timeline({ compact = false }: { compact?: boolean }) {
  return <div className="timeline">{publishedOnly(milestones).map((item, index) => <article key={item.id} className="timeline-entry"><div className="timeline-date"><span className="text-primary text-xs">0{index + 1}</span><time dateTime={item.date}>{item.dateLabel}</time></div><div><p className="eyebrow mb-3">{item.category}</p><h3 className="text-3xl md:text-4xl font-display mb-4">{item.title}</h3><p className="text-muted-foreground leading-relaxed max-w-xl">{item.narrative}</p>{!compact && <div className="mt-5 text-xs text-muted-foreground leading-relaxed max-w-xl"><p>{item.sourceLabel}</p><a className="inline-flex items-center gap-2 underline underline-offset-4 mt-3" href={item.source} target="_blank" rel="noopener noreferrer">National Assembly constituency record<ArrowUpRight size={13} /></a></div>}</div></article>)}</div>;
}
export function CivicLink() {
  return <div className="civic-link"><p className="text-sm text-muted-foreground leading-relaxed">For constituency information and services, explore <a href={civicPlatform} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4">MyConstituency.africa <ArrowUpRight className="inline" size={13} /></a>.</p><p className="text-xs text-muted-foreground mt-2">A separate civic platform. This link does not confirm that a Matero digital office is operational.</p></div>;
}
export function ArticleGrid({ articles }: { articles: Article[] }) {
  return <div className="grid md:grid-cols-3 gap-10">{publishedOnly(articles).map(article => <article key={article.id}><Link to={`/perspectives/${article.slug}`}>{article.image && <img src={article.image} alt="" loading="lazy" className="aspect-[4/3] object-cover w-full mb-6" />}<p className="eyebrow">{article.category}</p><h2 className="font-display text-3xl mt-3 mb-4">{article.title}</h2><p className="text-muted-foreground">{article.subtitle}</p><p className="text-xs text-muted-foreground mt-5">{article.publishedAt} · {article.readingMinutes} min read</p></Link></article>)}</div>;
}