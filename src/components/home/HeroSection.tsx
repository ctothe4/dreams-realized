import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/alexander-editorial-portrait.webp";
import { currentPosition } from "@/content/editorial";
export function HeroSection() {
 return <section className="hero"><img src={portrait} alt="Portrait of Alexander Mumba Sakala" className="hero-photo" fetchPriority="high"/><div className="hero-shade"/>
 <div className="container relative"><p className="hero-name text-primary-foreground/80">Alexander Mumba Sakala</p><p className="eyebrow text-primary-foreground/70">The life. The work. The journey.</p><h1 className="hero-title">A story bigger<br/>than any title<span className="text-primary-foreground/60">.</span></h1><p className="text-sm md:text-base text-primary-foreground/85 mb-3">Entrepreneurship. Community. Leadership. Public service.</p><p className="text-sm text-primary-foreground/65 max-w-sm leading-relaxed">Explore the experiences, ideas and defining moments of Alexander Mumba Sakala.</p><div className="flex flex-wrap gap-x-8 gap-y-3 mt-8"><Button asChild className="rounded-none bg-background text-foreground hover:bg-background/90 h-12 px-6"><Link to="/about">Discover His Story<ArrowRight/></Link></Button><Button asChild variant="link" className="text-primary-foreground px-0"><Link to="/journey">Explore His Journey<ArrowRight/></Link></Button></div></div>
 <p className="hero-role text-primary-foreground/65">{currentPosition}</p><p className="hero-portrait-caption">ALEXANDER MUMBA SAKALA · ZAMBIA</p></section>;
}
