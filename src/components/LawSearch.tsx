import React, { useState } from "react";
import { VERIFIED_LAW_DATABASE } from "../data/legalIndex";
import { LawIndexItem } from "../types";
import { Search, BookOpen, CheckCircle, Scale, ChevronDown, ChevronUp } from "lucide-react";

export const LawSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const POPULAR_SEARCH_TAGS = [
    "Article 21",
    "Consumer Rights",
    "Cyber Crime",
    "Tenant Rights",
    "Right to Privacy",
    "Zero FIR",
    "Cheque Bounce",
    "Right to Information",
    "Code on Wages",
    "RERA"
  ];

  const categories = ["ALL", "CONSTITUTIONAL LAW", "CONSUMER PROTECTION", "CYBER LAW", "LABOUR & EMPLOYMENT", "REAL ESTATE & HOUSING", "BANKING & COMMERCIAL", "CRIMINAL PROCEDURE", "PUBLIC LAW & GOVERNANCE"];

  const filteredLaws = VERIFIED_LAW_DATABASE.filter((item) => {
    const matchesCategory = selectedCategory === "ALL" || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesQuery =
      item.actTitle.toLowerCase().includes(query) ||
      item.relevantProvision.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.shortExplanation.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.keyRights.some((r) => r.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="law-search-page" className="space-y-8">
      {/* Header Block */}
      <div className="pb-6 border-b border-[#2C2A26]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FAF7F2] tracking-tight uppercase leading-[1.1]">
          SEARCH THE LAW
        </h1>
        <p className="mt-3 text-lg sm:text-xl font-serif italic text-[#B5AEA1] max-w-3xl leading-relaxed">
          Indexed statutory enactments, constitutional guarantees, and procedural rules for citizen literacy.
        </p>
      </div>

      {/* Legal Research Search Field */}
      <div className="bg-[#1C1B19] p-4 sm:p-6 border border-[#3A3731]">
        <div className="relative">
          <label htmlFor="statutory-search-input" className="sr-only">
            Search statutory enactments
          </label>
          <Search className="w-5 h-5 text-[#9E823E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="statutory-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search an Act, Article, Section, Right or Legal Topic..."
            className="w-full bg-[#121110] border border-[#3A3731] text-[#FAF7F2] font-sans text-sm sm:text-base pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#7E1828] placeholder:text-[#6E6960]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#888277] hover:text-[#FAF7F2] px-2 py-1 bg-[#24221F]"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* POPULAR SEARCHES */}
        <div className="mt-4 pt-3 border-t border-[#2C2A26]">
          <div className="text-xs font-sans text-[#888277] uppercase tracking-wider mb-2 font-semibold">
            Common Inquiries:
          </div>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCH_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className={`text-xs font-sans px-3 py-1.5 transition-colors border cursor-pointer ${
                  searchQuery.toLowerCase() === tag.toLowerCase()
                    ? "bg-[#661320] border-[#7E1828] text-[#FAF7F2] font-semibold"
                    : "bg-[#141312] border-[#2C2A26] text-[#B5AEA1] hover:text-[#FAF7F2] hover:border-[#423F39]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="mt-4 pt-3 border-t border-[#2C2A26] flex flex-wrap gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-sans px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#9E823E] text-[#141312] font-bold shadow-xs"
                  : "bg-[#201E1C] text-[#A8A196] hover:text-[#FAF7F2] hover:bg-[#2C2A26]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Indexed Results - Resembling Legal Dossiers / Gazetted Entries */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-[#2C2A26] text-xs font-sans text-[#888277]">
          <span className="font-semibold text-[#A8A196]">Index Results: {filteredLaws.length} Provisions</span>
          <span className="uppercase text-[11px]">Verified Indian Enactments</span>
        </div>

        {filteredLaws.length === 0 ? (
          <div className="py-16 text-center bg-[#181716] border border-[#2C2A26] mt-4 p-6">
            <BookOpen className="w-8 h-8 text-[#661320] mx-auto mb-3" />
            <div className="text-base font-serif font-bold text-[#FAF7F2]">
              No direct statutory provision matching &ldquo;{searchQuery}&rdquo;
            </div>
            <p className="text-xs text-[#888277] font-sans mt-1.5 max-w-md mx-auto leading-relaxed">
              Try searching with broader terms like &ldquo;Consumer&rdquo;, &ldquo;Wages&rdquo;, &ldquo;Police&rdquo;, or &ldquo;Article 21&rdquo;, or describe your scenario under My Problem.
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-5">
            {filteredLaws.map((item, idx) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-md hover:border-[#7E1828] transition-all p-5 sm:p-7"
                >
                  {/* Top Category & Status Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#DDD6C8] text-xs font-sans">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#7E1828] font-bold uppercase tracking-wider text-[11px]">{item.category}</span>
                      <span className="text-[#888277]">• Enacted {item.enactedYear}</span>
                    </div>
                    <span className="text-[#7E1828] bg-[#FAF7F2] border border-[#DDD6C8] px-2.5 py-0.5 uppercase tracking-wider text-[10px] font-semibold">
                      {item.verificationStatus}
                    </span>
                  </div>

                  {/* Act Title & Relevant Provision */}
                  <div className="mt-3.5">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#181716] tracking-tight">
                      {item.actTitle}
                    </h3>
                    <div className="text-sm font-sans text-[#7E1828] mt-1 font-bold">
                      {item.relevantProvision}
                    </div>
                    <div className="text-xs sm:text-sm font-serif italic text-[#4A463F] mt-0.5">
                      {item.title}
                    </div>
                  </div>

                  {/* Short Explanation */}
                  <p className="mt-3 text-sm font-sans text-[#2C2A26] leading-[1.75]">
                    {item.shortExplanation}
                  </p>

                  {/* Expandable Key Rights and Statutory Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#DDD6C8] space-y-4 bg-[#FAF7F2] p-5 border border-[#DDD6C8]">
                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-[#7E1828] block mb-2.5 font-bold">
                          Enforceable Citizen Rights Under This Provision:
                        </span>
                        <ul className="space-y-2">
                          {item.keyRights.map((r, rIdx) => (
                            <li
                              key={rIdx}
                              className="text-xs sm:text-sm font-sans text-[#2C2A26] flex items-start gap-2.5 leading-relaxed"
                            >
                              <CheckCircle className="w-4 h-4 text-[#7E1828] shrink-0 mt-0.5" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-[#DDD6C8]">
                        <span className="text-xs font-sans uppercase tracking-wider text-[#7E1828] block font-bold mb-1">
                          Designated Legal Forum / Tribunal:
                        </span>
                        <span className="text-xs sm:text-sm font-sans text-[#181716] font-medium">
                          {item.officialRecourse}
                        </span>
                      </div>

                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-[#7E1828] block font-bold mb-1">
                          Official Source & Legal Citation:
                        </span>
                        <span className="text-xs font-sans text-[#5D5951]">
                          {item.source}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Bottom Footer with Expand Button */}
                  <div className="mt-5 pt-3.5 border-t border-[#DDD6C8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
                    <span className="text-xs text-[#6E6960] truncate max-w-[320px]">
                      Source: {item.source}
                    </span>

                    <button
                      id={`expand-law-${idx}`}
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="text-[#181716] hover:text-[#7E1828] font-bold flex items-center gap-1.5 py-1.5 px-3 bg-[#FAF7F2] border border-[#DDD6C8] hover:border-[#7E1828] transition-colors cursor-pointer text-xs uppercase tracking-wider shadow-xs self-start sm:self-auto"
                    >
                      <span>{isExpanded ? "Collapse Provision" : "Read Full Entry"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
