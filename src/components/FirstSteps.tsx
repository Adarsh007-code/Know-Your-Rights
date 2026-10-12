import React from "react";
import { FirstStep } from "../types";
import { Clock, CheckCircle2 } from "lucide-react";

interface FirstStepsProps {
  steps: FirstStep[];
}

export const FirstSteps: React.FC<FirstStepsProps> = ({ steps }) => {
  return (
    <section id="where-do-i-start-section" className="mt-12">
      {/* Section Header - Matches Reference Hierarchy */}
      <div className="flex flex-wrap items-baseline justify-between pb-4 border-b border-[#2C2A26]">
        <div>
          <span className="text-xs font-sans tracking-wider text-[#BFA15F] uppercase font-semibold block mb-1">
            Immediate Recourse • Procedural Sequence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF7F2] tracking-tight uppercase leading-[1.1]">
            WHERE DO I START?
          </h2>
        </div>
        <span className="text-xs font-sans text-[#888277] uppercase tracking-wider font-semibold">
          Sequential Protocol
        </span>
      </div>

      <p className="mt-3 text-base sm:text-lg text-[#B5AEA1] font-serif italic max-w-3xl leading-relaxed">
        The earliest actions taken in any legal conflict dictate your legal standing. Follow this sequence before confronting opposing parties or filing petitions.
      </p>

      {/* Sequential Action Cards - Warm Legal Docket Style */}
      <div className="mt-8 space-y-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-md hover:border-[#7E1828] transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#DDD6C8] text-xs font-sans">
              <span className="font-bold text-[#7E1828] uppercase tracking-wider text-[11px]">
                Phase {step.stepNumber} of {steps.length}
              </span>
              {step.urgent ? (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase bg-[#FAF7F2] text-[#7E1828] px-2.5 py-0.5 border border-[#DDD6C8] font-bold tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#7E1828]" />
                  Time Sensitive
                </span>
              ) : (
                <span className="text-[11px] font-sans text-[#888277] uppercase tracking-wider font-semibold">
                  Standard Pre-Filing Procedure
                </span>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#181716] tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm font-sans text-[#2C2A26] leading-[1.75]">
                {step.description}
              </p>

              {step.actionItem && (
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-sans text-[#181716] bg-[#FAF7F2] border border-[#DDD6C8] px-3.5 py-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7E1828] shrink-0" />
                  <span><strong className="font-semibold text-[#7E1828]">Action Directive:</strong> {step.actionItem}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
