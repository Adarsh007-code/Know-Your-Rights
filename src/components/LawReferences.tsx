import React, { useState } from "react";
import { RelevantLaw } from "../types";
import { BookMarked, ExternalLink, X, Scale, CheckCircle } from "lucide-react";

interface LawReferencesProps {
  laws: RelevantLaw[];
}

export const LawReferences: React.FC<LawReferencesProps> = ({ laws }) => {
  const [activeLawModal, setActiveLawModal] = useState<RelevantLaw | null>(null);

  return (
    <section id="relevant-laws-section" className="mt-12">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between pb-4 border-b border-[#2C2A26]">
        <div>
          <span className="text-xs font-sans tracking-wider text-[#BFA15F] uppercase font-semibold block mb-1">
            Statutory Jurisprudence • Governing Enactments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF7F2] tracking-tight uppercase leading-[1.1]">
            RELEVANT LAW
          </h2>
        </div>
        <span className="text-xs font-sans text-[#888277] uppercase tracking-wider font-semibold">
          Legal Enactments
        </span>
      </div>

      <p className="mt-3 text-base sm:text-lg text-[#B5AEA1] font-serif italic max-w-3xl leading-relaxed">
        Statutory enactments, acts, and constitutional provisions relevant to the factual matrix described. Read provisions before initiating correspondence.
      </p>

      {/* Editorial Document Entries */}
      <div className="mt-8 space-y-6">
        {laws.map((law, idx) => (
          <article
            key={idx}
            className="bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-md hover:border-[#7E1828] p-6 sm:p-8 relative transition-all"
          >
            {/* Top Meta Row with Stamp */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#DDD6C8] text-xs font-sans">
              <span className="text-[#7E1828] uppercase tracking-wider font-bold text-[11px]">
                Statutory Reference • Citation {idx + 1}
              </span>
              <span
                className={`px-2.5 py-0.5 uppercase tracking-wider border text-[10px] font-bold ${
                  law.status === "Statutory Reference"
                    ? "border-[#DDD6C8] text-[#7E1828] bg-[#FAF7F2]"
                    : "border-[#DDD6C8] text-[#9E823E] bg-[#FAF7F2]"
                }`}
              >
                {law.status}
              </span>
            </div>

            {/* Title & Layout */}
            <div className="mt-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#181716] tracking-tight">
                {law.actName}
              </h3>
              <div className="text-xs sm:text-sm font-sans text-[#7E1828] mt-1 font-bold uppercase tracking-wide">
                {law.provision}
              </div>

              <p className="mt-3 text-sm font-sans text-[#2C2A26] leading-[1.75]">
                {law.shortExplanation}
              </p>

              {/* Key Rights Bullets */}
              {law.keyRights && law.keyRights.length > 0 && (
                <div className="mt-4 pt-3 border-t border-[#DDD6C8]">
                  <div className="text-xs font-sans uppercase tracking-wider text-[#7E1828] mb-2 font-bold">
                    Protected Statutory Rights:
                  </div>
                  <ul className="space-y-2">
                    {law.keyRights.map((right, rIdx) => (
                      <li
                        key={rIdx}
                        className="text-xs sm:text-sm font-sans text-[#2C2A26] flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle className="w-4 h-4 text-[#7E1828] shrink-0 mt-0.5" />
                        <span>{right}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bottom Action Line */}
              <div className="mt-5 pt-4 border-t border-[#DDD6C8] flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-sans text-[#5D5951] flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#7E1828]" />
                  <span><strong className="font-semibold text-[#181716]">Legal Forum:</strong> {law.officialRecourse}</span>
                </div>

                <button
                  id={`view-provision-${idx}`}
                  onClick={() => setActiveLawModal(law)}
                  className="text-xs font-sans uppercase tracking-wider font-bold bg-[#FAF7F2] hover:bg-[#661320] hover:text-[#FAF7F2] text-[#181716] px-3.5 py-1.5 border border-[#DDD6C8] hover:border-[#4A0E18] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>View Provision</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Detail Modal for Statutory Provision */}
      {activeLawModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="bg-[#FAF7F2] text-[#1C1B19] max-w-2xl w-full border border-[#DDD6C8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Top Red Bar */}
            <div className="h-2 bg-[#7E1828] w-full" />

            {/* Modal Header */}
            <div className="p-6 border-b border-[#DDD6C8] flex items-start justify-between bg-[#F5F2EB]">
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-[#7E1828] block font-bold mb-1">
                  Official Statutory Dossier
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#181716]">
                  {activeLawModal.actName}
                </h3>
                <div className="text-xs sm:text-sm font-sans text-[#5D5951] mt-1 font-semibold">
                  {activeLawModal.provision}
                </div>
              </div>

              <button
                id="close-law-modal-btn"
                onClick={() => setActiveLawModal(null)}
                className="p-1.5 text-[#5D5951] hover:text-[#181716] border border-[#DDD6C8] bg-[#FAF7F2] cursor-pointer transition-colors"
                aria-label="Close provision modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-sm font-sans text-[#2C2A26] leading-relaxed">
              <div>
                <h4 className="text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold mb-1.5">
                  Analysis & Statutory Application
                </h4>
                <p className="bg-[#F5F2EB] p-4 border border-[#DDD6C8] text-sm leading-relaxed">
                  {activeLawModal.shortExplanation}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold mb-2">
                  Entitlements & Core Rights Under This Act
                </h4>
                <div className="space-y-2">
                  {activeLawModal.keyRights.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 bg-[#F5F2EB] border border-[#DDD6C8]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#7E1828] shrink-0 mt-0.5" />
                      <span className="text-sm">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold mb-1.5">
                  Recourse & Jurisdictional Forum
                </h4>
                <p className="text-sm bg-[#F5F2EB] p-3 border border-[#DDD6C8] text-[#181716] font-medium">
                  {activeLawModal.officialRecourse}
                </p>
              </div>

              <div className="p-4 bg-[#FDE8EA] border border-[#E5A4AE] text-xs text-[#7E1828] leading-relaxed">
                <strong>Statutory Caveat:</strong> Legislative amendments and court precedents periodically alter procedural application. Citing provisions in formal affidavits must be verified with an enrolled Advocate or the official Gazette of India.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#F5F2EB] border-t border-[#DDD6C8] flex justify-end">
              <button
                onClick={() => setActiveLawModal(null)}
                className="px-5 py-2 bg-[#7E1828] hover:bg-[#661320] text-[#FAF7F2] font-sans text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer shadow-xs"
              >
                Return to Case File
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
