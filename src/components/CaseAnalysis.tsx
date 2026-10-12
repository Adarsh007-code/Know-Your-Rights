import React from "react";
import { CaseAnalysisData } from "../types";
import { FirstSteps } from "./FirstSteps";
import { EvidenceChecklist } from "./EvidenceChecklist";
import { LawReferences } from "./LawReferences";
import { AlertTriangle, UserCheck, ExternalLink, RotateCcw, Download, ShieldCheck } from "lucide-react";

interface CaseAnalysisProps {
  data: CaseAnalysisData;
  onReset: () => void;
}

export const CaseAnalysis: React.FC<CaseAnalysisProps> = ({ data, onReset }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="case-analysis-container" className="space-y-10">
      {/* Opened Case File / Docket Card */}
      <div className="bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-lg relative overflow-hidden">
        {/* Top Docket Stamp & File Binding Bar */}
        <div className="bg-[#661320] text-[#FAF7F2] px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs font-sans tracking-wider uppercase font-semibold">
          <div className="flex items-center gap-3">
            <span className="bg-[#4A0E18] px-3 py-1 border border-[#7E1828]">
              Case Dossier
            </span>
            <span className="text-[#EFE9DB]">Docket ID: {data.caseId}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#BFA15F]">Status: Preliminary Assessment</span>
            <span className="hidden sm:inline text-[#EFE9DB]/80 normal-case">{data.timestamp}</span>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          {/* Case File Header Summary */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-[#DDD6C8] text-xs font-sans text-[#5D5951] gap-2">
            <div>
              <span className="uppercase text-[11px] font-semibold text-[#7E1828]">Jurisdiction: </span>
              <strong className="text-[#181716] uppercase font-bold">{data.location}</strong>
            </div>
            <div>
              <span className="uppercase text-[11px] font-semibold text-[#7E1828]">Incident Period: </span>
              <strong className="text-[#181716] font-bold">{data.dateOccurred || "Recent"}</strong>
            </div>
            <div>
              <span className="uppercase text-[11px] font-semibold text-[#7E1828]">Legal Review: </span>
              <strong className="text-[#7E1828] font-bold">
                {data.source === "AI_ANALYSIS" ? "Statutory Engine Analysis" : "Central Statutes Registry"}
              </strong>
            </div>
          </div>

          {/* TWO-COLUMN STRUCTURE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-[#DDD6C8]">
            {/* LEFT COLUMN: WHAT WE UNDERSTAND */}
            <div className="lg:col-span-7 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#DDD6C8] pb-6 lg:pb-0">
              <span className="text-xs font-sans tracking-wider text-[#7E1828] uppercase font-bold block mb-1">
                Factual Reconstruction • Citizen Dispute
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#181716] tracking-tight mt-2">
                What We Understand
              </h2>
              <div className="border-b border-[#DDD6C8] pb-4 mb-4" />
              
              <div className="text-[15px] sm:text-base font-sans text-[#2C2A26] leading-[1.75] bg-[#FAF7F2] p-5 border border-[#DDD6C8]">
                {data.situationSummary}
              </div>

              {/* Original Excerpt */}
              <div className="mt-5">
                <span className="text-xs font-sans text-[#736E62] uppercase tracking-wider block mb-1.5 font-bold">
                  Submitted Citizen Statement:
                </span>
                <p className="text-sm sm:text-[15px] font-serif italic text-[#3A3731] bg-[#FAF7F2] p-4 border-l-4 border-[#7E1828] border border-[#DDD6C8] leading-relaxed">
                  &ldquo;{data.problemText}&rdquo;
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: POSSIBLE LEGAL AREA */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-sans tracking-wider text-[#7E1828] uppercase font-bold block mb-1">
                  Classification • Legal Branches
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#181716] tracking-tight mt-2">
                  Possible Legal Areas
                </h2>
                <div className="border-b border-[#DDD6C8] pb-4 mb-4" />
                
                <p className="text-xs font-sans text-[#5D5951] leading-relaxed">
                  Primary branches of substantive and procedural law governing this dispute:
                </p>

                {/* Stamped Document Labels */}
                <div className="mt-4 space-y-2.5">
                  {data.possibleLegalAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#FAF7F2] border border-[#DDD6C8] text-xs font-sans font-bold text-[#181716] tracking-wide uppercase flex items-center justify-between shadow-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 bg-[#7E1828]" />
                        <span>{area}</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#7E1828] bg-[#FDE8EA] border border-[#7E1828]/40 px-2 py-0.5">
                        Applicable
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DDD6C8] flex items-center justify-between text-xs font-sans text-[#5D5951]">
                <span className="font-semibold uppercase text-[11px]">Primary Category:</span>
                <span className="text-[#181716] font-bold">{data.category}</span>
              </div>
            </div>
          </div>

          {/* Action Bar Inside Document */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#5D5951]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#7E1828]" />
              <span>Educational Legal Assessment • Preserved Reference Record</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="print-case-docket-btn"
                onClick={handlePrint}
                className="px-4 py-2 bg-[#FAF7F2] hover:bg-[#EFE9DB] text-[#181716] border border-[#DDD6C8] font-bold flex items-center gap-2 transition-colors cursor-pointer text-xs uppercase tracking-wider"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print Docket</span>
              </button>
              <button
                id="re-analyze-button"
                onClick={onReset}
                className="px-4 py-2 bg-[#661320] hover:bg-[#7E1828] text-[#FAF7F2] border border-[#4A0E18] font-bold flex items-center gap-2 transition-colors cursor-pointer text-xs uppercase tracking-wider shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Analyze New Dispute</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 1. MOST IMPORTANT SECTION: WHERE DO I START? */}
      <FirstSteps steps={data.firstSteps} />

      {/* 2. EVIDENCE SECTION: BUILD YOUR RECORD */}
      <EvidenceChecklist initialEvidence={data.evidenceToPreserve} caseId={data.caseId} />

      {/* 3. LAW REFERENCES */}
      <LawReferences laws={data.relevantLaws} />

      {/* 4. AUTHORITIES TO APPROACH */}
      {data.authoritiesToApproach && data.authoritiesToApproach.length > 0 && (
        <section id="authorities-section" className="mt-12">
          <div className="pb-4 border-b border-[#2C2A26]">
            <span className="text-xs font-sans tracking-wider text-[#BFA15F] uppercase font-semibold block mb-1">
              Statutory Redressal • Support Channels
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF7F2] tracking-tight">
              Where Can I Seek Further Help?
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.authoritiesToApproach.map((auth, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#F5F2EB] border border-[#DDD6C8] text-[#1C1B19] shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-sans font-bold text-[#7E1828] uppercase tracking-wider">
                    {auth.type}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#181716] mt-1.5 leading-snug">
                    {auth.name}
                  </h3>
                  {auth.jurisdiction && (
                    <p className="text-xs font-sans text-[#5D5951] mt-2 leading-relaxed">
                      {auth.jurisdiction}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-[#DDD6C8] flex items-center justify-between text-xs font-sans">
                  {auth.contact && (
                    <span className="text-[#181716] bg-[#FAF7F2] font-semibold px-2.5 py-1 border border-[#DDD6C8]">
                      Helpline: {auth.contact}
                    </span>
                  )}
                  {auth.portal && (
                    <span className="text-[#7E1828] font-bold hover:underline flex items-center gap-1">
                      <span>{auth.portal}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. WARNINGS & PROFESSIONAL HELP */}
      <section id="warnings-section" className="mt-12 bg-[#1C1A17] border border-[#3E3B35] p-6 sm:p-8">
        <div className="flex items-center gap-2.5 text-[#E5A4AE] font-sans text-xs font-bold uppercase tracking-wider mb-3">
          <AlertTriangle className="w-4 h-4 text-[#E5A4AE]" />
          <span>Critical Procedural Cautions</span>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-[#DFD7C4] mb-6 leading-relaxed">
          {data.warnings.map((warn, wIdx) => (
            <li key={wIdx} className="flex items-start gap-2.5">
              <span className="text-[#BFA15F] font-bold mt-0.5">•</span>
              <span>{warn}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-[#2C2A26] flex items-start gap-3">
          <UserCheck className="w-5 h-5 text-[#BFA15F] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-sans text-[#A8A196]">
            <strong className="text-[#FAF7F2] font-serif font-bold text-sm block mb-1">
              When to Consult an Enrolled Advocate:
            </strong>
            {data.whenToSeekProfessionalHelp}
          </div>
        </div>
      </section>

      {/* Bottom Floating Return Action */}
      <div className="pt-8 border-t border-[#2C2A26] flex justify-center">
        <button
          onClick={onReset}
          className="px-6 py-3 bg-[#22201D] hover:bg-[#661320] text-[#FAF7F2] font-sans text-xs uppercase tracking-wider font-bold border border-[#3E3B35] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Assess Another Situation</span>
        </button>
      </div>
    </div>
  );
};
