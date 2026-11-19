export type PublicationStatus = "draft" | "review" | "approved" | "published" | "archived";
export interface EditorialRecord { id: string; slug: string; title: string; status: PublicationStatus; approved: boolean; source?: string; }
export interface BiographySection extends EditorialRecord { body: string[]; }
export interface Milestone extends EditorialRecord { date: string; dateLabel: string; category: string; narrative: string; image?: string; sourceLabel: string; }
export interface Article extends EditorialRecord { subtitle: string; author: string; publishedAt: string; updatedAt?: string; category: string; readingMinutes: number; image?: string; paragraphs: string[]; }
export interface MediaEntry extends EditorialRecord { date: string; type: "interview" | "speech" | "podcast" | "video" | "talk"; description: string; originalUrl: string; embedUrl?: string; }
export interface Book extends EditorialRecord { announced: boolean; synopsis: string; cover?: string; edition?: string; publishedAt?: string; publisher?: string; isbn?: string; purchaseLinks: { label: string; url: string }[]; excerpts: string[]; reviews: { quote: string; attribution: string }[]; media: string[]; events: { title: string; date: string; url?: string }[]; }
export interface Initiative extends EditorialRecord { description: string; date?: string; }
export interface SpeakingEngagement extends EditorialRecord { date: string; venue: string; originalUrl?: string; }
export interface ProfileLink { label: string; url: string; verified: boolean; }

export const isPublic = (record: EditorialRecord) => record.status === "published" && record.approved;
export const publishedOnly = <T extends EditorialRecord>(records: T[]): T[] => records.filter(isPublic);
export const publicBooks = (records: Book[]) => publishedOnly(records).filter(book => book.announced);
export const name = "Alexander Mumba Sakala";
export const currentPosition = "Currently serving as Member of Parliament for Matero Constituency and Deputy Government Chief Whip in Zambia.";
export const officialRecord = "https://www.parliament.gov.zm/node/1043";
export const civicPlatform = "https://myconstituency.africa";
export const biography: BiographySection[] = [{ id: "introduction", slug: "introduction", title: "The person beyond the position", status: "published", approved: true, source: "Owner-provided editorial brief, November 2026", body: ["Alexander Mumba Sakala is an entrepreneur, community-minded leader and public figure in Zambia. His journey encompasses entrepreneurship, community contribution and public service.", "His parliamentary responsibilities are an important chapter in that journey, not the whole story. This is his personal home: a place for his life, experiences, ideas and the chapters still to come."] }];
export const milestones: Milestone[] = [
  { id: "election-2026", slug: "elected-to-parliament", title: "A new chapter in Parliament", date: "2026-08", dateLabel: "August 2026", category: "Public service", narrative: "Elected Member of Parliament for Matero Constituency in the August 2026 general election, representing UPND.", status: "published", approved: true, source: officialRecord, sourceLabel: "Details supplied by Alexander's team, November 2026. Official constituency reference linked below; an updated member record is awaiting confirmation." },
  { id: "whip-2026", slug: "deputy-government-chief-whip", title: "An additional responsibility", date: "2026-10-29", dateLabel: "29 October 2026", category: "Parliamentary leadership", narrative: "Appointment as Deputy Government Chief Whip announced on 29 October 2026.", status: "published", approved: true, source: officialRecord, sourceLabel: "Appointment date supplied by Alexander's team, November 2026. The direct official appointment reference is awaiting confirmation." },
];
export const articles: Article[] = [];
export const mediaEntries: MediaEntry[] = [];
export const books: Book[] = [];
export const initiatives: Initiative[] = [];
export const speakingEngagements: SpeakingEngagement[] = [];
export const profileLinks: ProfileLink[] = [];
export const editorialDrafts: BiographySection[] = [
  { id: "foundations", slug: "foundations", title: "Foundations and formative years", status: "draft", approved: false, body: ["EDITORIAL PLACEHOLDER: approved personal history, education and formative experiences required."] },
  { id: "enterprise", slug: "enterprise", title: "Entrepreneurship", status: "draft", approved: false, body: ["EDITORIAL PLACEHOLDER: confirmed ventures, dates and personally attributable achievements required."] },
];
export const navigation = [{ label: "Home", path: "/" }, { label: "His Story", path: "/about" }, { label: "The Journey", path: "/journey" }, { label: "Perspectives", path: "/perspectives" }, { label: "Writing", path: "/writing" }, { label: "Media", path: "/media" }, { label: "Connect", path: "/connect" }];
export const publicPaths = () => ["/", "/about", "/journey", "/journey/public-service", "/perspectives", "/writing", "/media", "/connect", "/privacy", ...publishedOnly(articles).map(a => `/perspectives/${a.slug}`), ...publicBooks(books).map(b => `/books/${b.slug}`)];