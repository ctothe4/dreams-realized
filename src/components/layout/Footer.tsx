import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { navigation, profileLinks } from "@/content/editorial";
export function Footer() {
 return <footer className="bg-secondary text-secondary-foreground"><div className="container py-16">
 <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 mb-14"><div><Link to="/" className="font-display text-4xl md:text-5xl">Alexander Sakala<span className="text-primary">.</span></Link><p className="text-secondary-foreground/60 text-sm mt-5">The life. The work. The journey.</p><p className="text-secondary-foreground/60 text-xs leading-relaxed max-w-lg mt-7">The personal website of Alexander Mumba Sakala. Not the official National Assembly website or Matero’s constituency-service portal.</p></div><nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-10 gap-y-4 content-start text-sm">{navigation.map(item => <Link key={item.path} to={item.path} className="text-secondary-foreground/80 hover:text-secondary-foreground">{item.label}</Link>)}<Link to="/privacy" className="text-secondary-foreground/80">Privacy</Link>{profileLinks.filter(p => p.verified).map(p => <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer">{p.label}<ArrowUpRight className="inline ml-2" size={12}/></a>)}</nav></div>
 <div className="border-t border-secondary-foreground/20 pt-6 flex flex-col md:flex-row gap-4 justify-between text-[11px] text-secondary-foreground/60"><p>© {new Date().getFullYear()} Alexander Mumba Sakala. All rights reserved.</p><p>Lusaka, Zambia</p></div>
 </div></footer>;
}
