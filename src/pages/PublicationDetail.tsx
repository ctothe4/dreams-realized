import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/editorial/SEO";
import { ArticleGrid, PageIntro, TextLink } from "@/components/editorial/Editorial";
import { articles, books, publicBooks, publishedOnly } from "@/content/editorial";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";

export function ArticleDetail() {
  const { slug } = useParams();
  const article = publishedOnly(articles).find(item => item.slug === slug);
  if (!article) return <NotFound/>;
  const related = publishedOnly(articles).filter(item => item.id !== article.id).slice(0,3);
  return <Layout><SEO title={article.title} description={article.subtitle} type="article" schema={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.subtitle, author: { "@type": "Person", name: article.author }, datePublished: article.publishedAt, dateModified: article.updatedAt || article.publishedAt, mainEntityOfPage: `https://alexandersakala.com/perspectives/${article.slug}` }}/><PageIntro eyebrow={article.category} title={article.title} description={article.subtitle}/><article className="container max-w-3xl pb-20"><div className="flex flex-wrap gap-4 text-xs text-muted-foreground border-y py-5 mb-10"><span>By {article.author}</span><time dateTime={article.publishedAt}>{article.publishedAt}</time><span>{article.readingMinutes} min read</span>{article.updatedAt && <span>Updated {article.updatedAt}</span>}</div>{article.image && <img src={article.image} alt="" className="w-full aspect-video object-cover mb-10"/>}<div className="prose-editorial">{article.paragraphs.map((paragraph,index) => <p key={index}>{paragraph}</p>)}</div></article><section className="container pb-24">{related.length > 0 && <><h2 className="font-display text-4xl mb-10">Related writing</h2><ArticleGrid articles={related}/></>}<div className="mt-10"><TextLink to="/perspectives">All Perspectives</TextLink></div></section></Layout>;
}

export function BookDetail() {
  const { slug } = useParams();
  const book = publicBooks(books).find(item => item.slug === slug);
  if (!book) return <NotFound/>;
  return <Layout><SEO title={book.title} description={book.synopsis} schema={book.publishedAt ? { "@context": "https://schema.org", "@type": "Book", name: book.title, author: { "@type": "Person", name: "Alexander Mumba Sakala" }, datePublished: book.publishedAt, ...(book.isbn ? { isbn: book.isbn } : {}), ...(book.publisher ? { publisher: { "@type": "Organization", name: book.publisher } } : {}) } : undefined}/><PageIntro eyebrow="Books / Alexander Mumba Sakala" title={book.title} description={book.synopsis}/><section className="container pb-24 grid md:grid-cols-2 gap-12">{book.cover && <img src={book.cover} alt={`${book.title} book cover`} className="w-full max-w-sm"/>}<div className="space-y-7"><dl className="space-y-3 text-sm">{book.edition && <div><dt className="text-muted-foreground">Edition</dt><dd>{book.edition}</dd></div>}{book.publisher && <div><dt className="text-muted-foreground">Publisher</dt><dd>{book.publisher}</dd></div>}{book.publishedAt && <div><dt className="text-muted-foreground">Publication date</dt><dd>{book.publishedAt}</dd></div>}{book.isbn && <div><dt className="text-muted-foreground">ISBN</dt><dd>{book.isbn}</dd></div>}</dl>{book.purchaseLinks.map(link => <Button key={link.url} asChild><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></Button>)}{book.excerpts.map((excerpt,index) => <p key={index} className="leading-relaxed text-muted-foreground">{excerpt}</p>)}{book.reviews.map(review => <blockquote key={review.attribution} className="border-l pl-5"><p>{review.quote}</p><cite>{review.attribution}</cite></blockquote>)}{book.events.map(event => <div key={event.title}><h2 className="font-display text-2xl">{event.title}</h2><p>{event.date}</p>{event.url && <a href={event.url} className="underline">Event details</a>}</div>)}{book.media.map(url => <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="block underline">Book media resource</a>)}<TextLink to="/about">About the Author</TextLink><TextLink to="/connect">Publishing & Media Enquiries</TextLink></div></section></Layout>;
}

export function BooksIndex() {
  const visible = publicBooks(books);
  if (!visible.length) return <NotFound/>;
  return <Layout><SEO title="Books" description="Official announced books by Alexander Mumba Sakala."/><PageIntro eyebrow="Writing / Books" title="Books by Alexander." description="Official announced publications."/><section className="container pb-24 grid md:grid-cols-3 gap-12">{visible.map(book => <article key={book.id}>{book.cover && <img src={book.cover} alt={`${book.title} cover`} loading="lazy" className="aspect-[2/3] w-full object-contain mb-6"/>}<h2 className="font-display text-3xl mb-6">{book.title}</h2><TextLink to={`/books/${book.slug}`}>Discover the Book</TextLink></article>)}</section></Layout>;
}