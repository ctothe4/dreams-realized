import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/editorial/SEO";
import { EmptyEditorial, PageIntro, TextLink } from "@/components/editorial/Editorial";
import { mediaEntries, publishedOnly } from "@/content/editorial";
import speaking from "@/assets/alexander-speaking.webp";
import community from "@/assets/alexander-community-1.webp";
import { ArrowUpRight } from "lucide-react";
export default function Media() {
 const entries = publishedOnly(mediaEntries);
 return <Layout><SEO title="Media & Speaking" description="Alexander Mumba Sakala's approved photographs and future archive of verified interviews, speeches, conversations and media appearances."/><PageIntro eyebrow="Media & speaking" title="In conversation." description="Interviews, speeches and public conversations. A record of Alexander’s voice, as verified material becomes available."/>
 <section className="container pb-20">{entries.length ? <div className="grid md:grid-cols-2 gap-10">{entries.map(entry => <article key={entry.id} className="border-t py-8"><p className="eyebrow">{entry.type} · {entry.date}</p><h2 className="font-display text-3xl my-4">{entry.title}</h2><p className="text-muted-foreground mb-5">{entry.description}</p><a href={entry.originalUrl} target="_blank" rel="noopener noreferrer" className="underline">Original source<ArrowUpRight className="inline ml-2" size={14}/></a>{entry.embedUrl?.startsWith("https://www.youtube-nocookie.com/embed/") && <iframe src={entry.embedUrl} title={entry.title} loading="lazy" className="w-full aspect-video mt-6" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>}</article>)}</div> : <EmptyEditorial title="The media archive is awaiting its first entries." text="No verified interviews, speeches or recordings have been published here yet."/>}</section>
 <section className="bg-card section-space"><div className="container"><p className="eyebrow mb-5">Personal photograph collection</p><h2 className="editorial-heading mb-10">Moments, in focus.</h2><div className="grid md:grid-cols-2 gap-8">{[{src:speaking,alt:"Alexander speaking with community members"},{src:community,alt:"Alexander with a group of community members"}].map(photo => <figure key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" className="w-full aspect-[4/3] object-cover"/><figcaption className="photo-caption">{photo.alt}. Date and event details awaiting confirmation.</figcaption></figure>)}</div></div></section>
 <section className="container section-space"><h2 className="editorial-heading mb-6">Media & speaking enquiries.</h2><TextLink to="/connect">Connect</TextLink></section></Layout>;
}
