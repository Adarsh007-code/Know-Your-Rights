import React from "react";
import { POPULAR_LEGAL_TOPICS } from "../data/legalIndex";
import { QuickTopic } from "../types";
import {
  ArrowRight,
  ShieldAlert,
  Briefcase,
  Home,
  Scale,
  AlertTriangle,
  Landmark,
  BookOpen,
  FileText
} from "lucide-react";

interface QuickTopicsProps {
  onSelectTopic: (topic: QuickTopic) => void;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "CYBER LAW":
      return <ShieldAlert className="w-4 h-4 text-[#7E1828]" />;
    case "LABOUR & EMPLOYMENT":
      return <Briefcase className="w-4 h-4 text-[#7E1828]" />;
    case "PROPERTY & TENANCY":
      return <Home className="w-4 h-4 text-[#7E1828]" />;
    case "CONSUMER LAW":
      return <Scale className="w-4 h-4 text-[#7E1828]" />;
    case "CYBER & CRIMINAL":
      return <AlertTriangle className="w-4 h-4 text-[#7E1828]" />;
    case "BANKING & COMMERCIAL":
      return <Landmark className="w-4 h-4 text-[#7E1828]" />;
    default:
      return <BookOpen className="w-4 h-4 text-[#7E1828]" />;
  }
};

export const QuickTopics: React.FC<QuickTopicsProps> = ({ onSelectTopic }) => {
  return (
    <section id="people-ask-about-section" className="mt-14">
      {/* Editorial Case Header Block - Matches Reference Screenshot Header */}
      <div className="pb-6 border-b border-[#2C2A26]">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-[#888277] uppercase tracking-wider mb-3">
          <span className="text-[#BFA15F] font-semibold">Recurring Dispute Register • Republic of India</span>
          <span className="text-[#A8A196]">Statutory & Precedent Archive</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FAF7F2] tracking-tight leading-[1.05] uppercase">
          PEOPLE ASK ABOUT.
        </h2>

        <p className="mt-3 text-lg sm:text-xl text-[#B5AEA1] font-serif italic max-w-3xl leading-relaxed">
          Standard statutory disputes frequently encountered by Indian citizens across tribunals, forums, and police desks.
        </p>
      </div>

      {/* Main Paper Docket Container - Matching the Upper Intake Docket Theme */}
      <div className="mt-8 bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-lg p-6 sm:p-10 relative overflow-hidden">
        {/* Docket Header Metadata */}
        <div className="border-b border-[#DDD6C8] pb-4 mb-6 flex flex-wrap items-start justify-between gap-3">
          <div>
            <span className="text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold block mb-1">
              Common Citizen Disputes & Legal Remedies
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#181716] tracking-tight mt-2">
              Frequently Encountered Grievances
            </h3>
          </div>
          <span className="text-xs font-sans text-[#7E1828] font-semibold uppercase bg-[#FAF7F2] border border-[#DDD6C8] px-3 py-1">
            Catalog KYR-02
          </span>
        </div>

        <p className="text-[15px] sm:text-base font-sans text-[#2C2A26] leading-[1.75] mb-6">
          Select any dispute below to review the governing statutory framework, required evidentiary trails, and automatically populate the citizen intake statement for personalized analysis.
        </p>

        {/* Structured Legal Docket Grid - Authentic Legal Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POPULAR_LEGAL_TOPICS.map((topic) => (
            <div
              id={`quick-topic-${topic.number}`}
              key={topic.number}
              onClick={() => onSelectTopic(topic)}
              className="p-5 sm:p-6 bg-[#FAF7F2] border border-[#DDD6C8] hover:border-[#7E1828] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Legal Header Row with Category & Stamp */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D1] text-xs font-sans">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(topic.category)}
                    <span className="font-bold text-[#7E1828] uppercase tracking-wider text-[11px]">
                      Dispute Case #{topic.number}
                    </span>
                  </div>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-[#5D5951] bg-[#EFE9DB] border border-[#DDD6C8] px-2 py-0.5 font-semibold">
                    {topic.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="mt-3.5 text-base sm:text-lg font-serif font-bold text-[#181716] tracking-tight group-hover:text-[#7E1828] transition-colors leading-snug">
                  {topic.title}
                </h4>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-[13px] font-sans text-[#4A463F] leading-[1.65]">
                  {topic.description}
                </p>

                {/* Governing Statute Box */}
                <div className="mt-4 p-3 bg-[#F5F2EB] border border-[#DDD6C8]">
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#7E1828] font-bold block mb-0.5">
                    Governing Statutory Provisions
                  </span>
                  <span className="text-xs font-sans text-[#181716] font-semibold block truncate">
                    {topic.commonStatute}
                  </span>
                </div>
              </div>

              {/* Action Button Strip */}
              <div className="mt-5 pt-3.5 border-t border-[#E8E1D1]">
                <button
                  type="button"
                  className="w-full py-2.5 px-3 bg-[#EFE9DB] group-hover:bg-[#661320] group-hover:text-[#FAF7F2] text-[#181716] border border-[#DDD6C8] group-hover:border-[#4A0E18] font-sans text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-[#7E1828] group-hover:text-[#FAF7F2] transition-colors" />
                  <span>Load Case Statement</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Docket Footer Note */}
        <div className="mt-8 pt-5 border-t border-[#DDD6C8] flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-[#5D5951]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7E1828]" />
            Citizen case frameworks referenced from Central Acts & High Court precedent benches
          </span>
          <span className="text-[#7E1828] font-bold">
            6 Case Models Available
          </span>
        </div>
      </div>
    </section>
  );
};
