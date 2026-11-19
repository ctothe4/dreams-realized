import { describe, expect, it } from "vitest";
import { books, articles, milestones, publicBooks, publishedOnly, publicPaths, type Book, type EditorialRecord } from "@/content/editorial";

describe("editorial publication safeguards", () => {
  it("does not publish drafts, review material, approved-only or archived records", () => {
    const records: EditorialRecord[] = ["draft", "review", "approved", "archived"].map((status,index) => ({ id:String(index), slug:String(index), title:"Unpublished", approved:true, status:status as EditorialRecord["status"] }));
    expect(publishedOnly(records)).toEqual([]);
  });
  it("requires approval even when a record is marked published", () => {
    expect(publishedOnly([{id:"unapproved",slug:"unapproved",title:"Unapproved",status:"published",approved:false}])).toEqual([]);
    expect(publishedOnly([{id:"approved",slug:"approved",title:"Approved",status:"published",approved:true}])).toHaveLength(1);
  });
  it("keeps an unannounced book hidden even if approved and published", () => {
    const book: Book = { id:"future",slug:"future",title:"Unannounced",status:"published",approved:true,announced:false,synopsis:"",purchaseLinks:[],excerpts:[],reviews:[],media:[],events:[] };
    expect(publicBooks([book])).toEqual([]);
    expect(publicBooks([{...book,announced:true}])).toHaveLength(1);
  });
  it("publishes no fabricated essays or unannounced book listings", () => {
    expect(articles).toEqual([]);
    expect(books).toEqual([]);
    expect(publicPaths().filter(path => path.startsWith("/books"))).toEqual([]);
  });
  it("records the supplied August 2026 election chapter without inventing an exact day", () => {
    expect(milestones.find(item => item.id === "election-2026")?.date).toBe("2026-08");
  });
  it("records the supplied Deputy Government Chief Whip announcement date", () => {
    expect(milestones.find(item => item.id === "whip-2026")?.date).toBe("2026-10-29");
  });
});