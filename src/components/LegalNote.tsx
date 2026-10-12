import React, { useState } from "react";
import { TODAY_LEGAL_NOTES, EMERGENCY_CONTACTS } from "../data/legalIndex";
import { PhoneCall, AlertCircle, RefreshCw, BookmarkCheck } from "lucide-react";

export const LegalNote: React.FC = () => {
  const [noteIndex, setNoteIndex] = useState(0);

  const currentNote = TODAY_LEGAL_NOTES[noteIndex % TODAY_LEGAL_NOTES.length];

  const handleNextNote = () => {
    setNoteIndex((prev) => (prev + 1) % TODAY_LEGAL_NOTES.length);
  };

  return (
    <aside
      id="contextual-information-panel"
      className="hidden xl:block w-72 shrink-0 bg-[#161514]/90 border-l border-[#2C2A26] backdrop-blur-md sticky top-0 h-screen overflow-y-auto py-7 px-5 select-none"
    >
      {/* Panel Docket Tag */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2C2A26]">
        <span className="text-xs font-sans font-semibold tracking-wider uppercase text-[#BFA15F]">
          Contextual Brief
        </span>
        <span className="text-[11px] font-sans text-[#888277]">Citizen Bulletin</span>
      </div>

      {/* TODAY'S LEGAL NOTE */}
      <section className="mt-5 pb-6 border-b border-[#2C2A26]">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-sans uppercase text-[#EFE9DB] tracking-wider font-semibold flex items-center gap-1.5">
            <BookmarkCheck className="w-3.5 h-3.5 text-[#BFA15F]" />
            Today&apos;s Legal Note
          </h2>
          <button
            id="cycle-legal-note-btn"
            onClick={handleNextNote}
            title="Read another note"
            className="text-[#888277] hover:text-[#FAF7F2] p-1 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>

        <div className="mt-3 bg-[#1C1A18] border border-[#33302B] p-3.5">
          <h3 className="text-xs font-serif font-bold text-[#F7F4EC] leading-snug">
            {currentNote.title}
          </h3>
          <p className="mt-2 text-xs text-[#A8A196] leading-relaxed font-sans">
            {currentNote.note}
          </p>
          <div className="mt-3 pt-2 border-t border-[#2C2A26] flex items-center justify-between text-[11px] font-sans">
            <span className="text-[#BFA15F] font-semibold text-[10px] uppercase">Statute:</span>
            <span className="text-[#888277] truncate max-w-[150px]" title={currentNote.statute}>
              {currentNote.statute}
            </span>
          </div>
        </div>
      </section>

      {/* IMPORTANT DISCLAIMER */}
      <section className="mt-6 pb-6 border-b border-[#2C2A26]">
        <div className="flex items-center gap-1.5 text-xs font-sans uppercase text-[#BFA15F] font-semibold tracking-wide">
          <AlertCircle className="w-3.5 h-3.5 text-[#BFA15F]" />
          Important Notice
        </div>
        <p className="mt-2 text-xs font-sans text-[#A8A196] leading-relaxed">
          This platform provides general legal awareness and does not replace counsel from a licensed advocate.
        </p>
        <div className="mt-3 p-2.5 bg-[#1B1214] border border-[#58111D] text-xs font-sans text-[#E5A4AE] leading-relaxed">
          No advocate-client relationship is formed. Laws and procedures differ across states and jurisdictions in India.
        </div>
      </section>

      {/* NEED IMMEDIATE HELP? */}
      <section className="mt-6">
        <div className="flex items-center gap-1.5 text-xs font-sans uppercase text-[#FAF7F2] font-semibold tracking-wider">
          <PhoneCall className="w-3.5 h-3.5 text-[#7E1828]" />
          Need Immediate Help?
        </div>
        <p className="mt-1.5 text-xs font-sans text-[#888277] leading-relaxed">
          National helplines and statutory portals:
        </p>

        <div className="mt-3 space-y-2">
          {EMERGENCY_CONTACTS.slice(0, 4).map((item) => (
            <div
              key={item.number}
              className="p-2.5 bg-[#1C1B19] border border-[#2C2A26] hover:border-[#3E3B35] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans text-[#DFD7C4] font-semibold truncate max-w-[150px]">
                  {item.name}
                </span>
                <span className="font-sans text-xs font-bold text-[#FAF7F2] bg-[#2C2A26] px-2 py-0.5 border border-[#3E3B35]">
                  {item.number}
                </span>
              </div>
              <p className="text-[11px] font-sans text-[#888277] mt-1 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* NALSA Legal Aid Highlight */}
        <div className="mt-4 p-3 bg-[#171D22] border border-[#233544] text-xs font-sans text-[#B0D4F1] leading-relaxed">
          <div className="font-semibold text-[#E1F0FD] uppercase text-[11px] tracking-wide mb-0.5">Free Legal Aid (NALSA)</div>
          Under Section 12 of the Legal Services Authorities Act, eligible citizens are entitled to free legal aid through DLSA and High Court Legal Services Committees.
        </div>
      </section>
    </aside>
  );
};
