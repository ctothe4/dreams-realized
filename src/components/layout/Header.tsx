import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { books, navigation, publicBooks } from "@/content/editorial";
export function Header() {
 const [isOpen, setIsOpen] = useState(false);
 const { pathname } = useLocation();
 useEffect(() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
 const items = publicBooks(books).length ? [...navigation.slice(0,5), { label: "Books", path: "/books" }, ...navigation.slice(5)] : navigation;
 return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
  <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-background">Skip to content</a>
  <div className="container flex items-center justify-between h-20 lg:h-24 gap-8">
   <Link to="/" aria-label="Alexander Sakala home" className="shrink-0 leading-tight"><span className="block text-[17px] font-medium uppercase">Alexander Sakala<span className="text-primary">.</span></span><span className="block text-[9px] uppercase text-muted-foreground mt-1">The life. The work. The journey.</span></Link>
   <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">{items.map(item => <Link key={item.path} to={item.path} aria-current={pathname === item.path ? "page" : undefined} className={`text-xs py-2 transition-colors ${pathname === item.path ? "text-primary border-b border-primary" : "text-muted-foreground hover:text-foreground"}`}>{item.label}{item.path === "/connect" && <ArrowUpRight className="inline ml-1" size={12}/>}</Link>)}</nav>
   <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X/> : <Menu/>}</Button>
  </div>
  {isOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden container py-5 border-t flex flex-col gap-1">{items.map(item => <Link key={item.path} to={item.path} aria-current={pathname === item.path ? "page" : undefined} onClick={() => setIsOpen(false)} className="py-3 text-sm">{item.label}</Link>)}</nav>}
 </header>;
}
