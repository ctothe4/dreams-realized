import { Layout } from "@/components/layout/Layout";
import { SEO, personSchema } from "@/components/editorial/SEO";
import { PageIntro, TextLink } from "@/components/editorial/Editorial";
import { biography, publishedOnly } from "@/content/editorial";
import portrait from "@/assets/alexander-editorial-portrait.webp";
import community from "@/assets/alexander-community-2.webp";
export default function About() {
 return <Layout><SEO title="His Story" description="Meet Alexander Mumba Sakala: entrepreneur, community-minded leader and public figure in Zambia. The person beyond his public positions." schema={personSchema}/><PageIntro eyebrow="His story / Alexander Mumba Sakala" title="The man behind the name." description="Entrepreneurship. Community. Leadership. A personal journey that continues to unfold."/>
 <div className="container"><img src={portrait} alt="Alexander Mumba Sakala" className="w-full aspect-[2/1] md:aspect-[2.5/1] object-cover"/></div>
 <section className="container section-space home-intro"><div><p className="eyebrow mb-6">A personal introduction</p><h2 className="editorial-heading">A story bigger<br/>than any title.</h2></div><div className="prose-editorial">{publishedOnly(biography).map(section => <div key={section.id}>{section.body.map(p => <p key={p}>{p}</p>)}</div>)}<TextLink to="/journey">Follow His Journey</TextLink></div></section>
 <section className="bg-card section-space"><div className="container grid md:grid-cols-2 gap-12 items-center"><figure><img src={community} alt="Alexander meeting people in the community" className="w-full aspect-[4/3] object-cover" loading="lazy"/><figcaption className="photo-caption">Personal photograph collection. Date and event details not yet confirmed.</figcaption></figure><div><p className="eyebrow mb-6">People & place</p><h2 className="editorial-heading mb-6">A Zambian story.</h2><p className="text-muted-foreground leading-relaxed mb-8">Community contribution and public service are part of Alexander’s wider journey. Matero is the constituency he currently represents in Zambia’s National Assembly.</p><TextLink to="/journey/public-service">His Current Chapter</TextLink></div></div></section></Layout>;
}
