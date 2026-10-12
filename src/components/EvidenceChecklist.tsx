import React, { useState } from "react";
import { EvidenceItem } from "../types";
import { CheckSquare, Square, ShieldAlert, Plus, Printer, Check } from "lucide-react";

interface EvidenceChecklistProps {
  initialEvidence: EvidenceItem[];
  caseId: string;
}

export const EvidenceChecklist: React.FC<EvidenceChecklistProps> = ({
  initialEvidence,
  caseId,
}) => {
  const [items, setItems] = useState<EvidenceItem[]>(initialEvidence);
  const [newLabel, setNewLabel] = useState("");
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Sync if initialEvidence changes
  React.useEffect(() => {
    setItems(initialEvidence);
  }, [initialEvidence]);

  const toggleCheck = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabel.trim()) return;
    const newItem: EvidenceItem = {
      id: `custom-${Date.now()}`,
      label: newLabel.trim(),
      checked: false,
    };
    setItems((prev) => [...prev, newItem]);
    setNewLabel("");
  };

  const handleCopyRecord = () => {
    const lines = [
      `KNOW YOUR RIGHTS — EVIDENCE DOCKET [CASE ID: ${caseId}]`,
      `Preservation Status:`,
      ...items.map((it) => `[${it.checked ? "X" : " "}] ${it.label}`),
      `\nNote: Under Section 65B of the Indian Evidence Act / Section 63 Bharatiya Sakshya Adhiniyam, digital records should retain metadata and timestamps.`,
    ];
    navigator.clipboard.writeText(lines.join("\n"));
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const completedCount = items.filter((i) => i.checked).length;

  return (
    <section id="build-your-record-section" className="mt-12">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between pb-4 border-b border-[#2C2A26]">
        <div>
          <span className="text-xs font-sans tracking-wider text-[#BFA15F] uppercase font-semibold block mb-1">
            Documentary Discovery • Evidentiary Trail
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF7F2] tracking-tight uppercase leading-[1.1]">
            BUILD YOUR RECORD
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-sans text-[#A8A196] tracking-wider font-semibold">
            {completedCount} of {items.length} Preserved
          </span>
          <button
            id="copy-record-button"
            onClick={handleCopyRecord}
            className="text-xs font-sans uppercase bg-[#FAF7F2] hover:bg-[#661320] hover:text-[#FAF7F2] text-[#181716] border border-[#DDD6C8] hover:border-[#4A0E18] px-3.5 py-1.5 transition-colors flex items-center gap-2 font-bold tracking-wider cursor-pointer shadow-xs"
          >
            {copiedNotification ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Printer className="w-3.5 h-3.5 text-[#7E1828]" />
                <span>Export Docket</span>
              </>
            )}
          </button>
        </div>
      </div>

      <p className="mt-3 text-base sm:text-lg text-[#B5AEA1] font-serif italic max-w-3xl leading-relaxed">
        Indian courts and administrative tribunals place primary reliance on contemporaneous documentary evidence. Never delete, edit, or crop digital screenshots or communication trails.
      </p>

      {/* Legal Checklist Table / Document Sheet */}
      <div className="mt-6 bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-md">
        {/* Table Column Labels */}
        <div className="bg-[#EFE9DB] px-5 py-3 border-b border-[#DDD6C8] grid grid-cols-12 text-xs font-sans text-[#5D5951] uppercase tracking-wider font-semibold">
          <span className="col-span-2 sm:col-span-1">Status</span>
          <span className="col-span-8 sm:col-span-9">Document / Artifact Description</span>
          <span className="col-span-2 sm:col-span-2 text-right">Priority</span>
        </div>

        {/* Checklist Rows */}
        <div className="divide-y divide-[#E2DACB]">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className="px-5 py-4 grid grid-cols-12 items-center cursor-pointer hover:bg-[#FAF7F2] transition-colors group"
            >
              {/* Checkbox Icon */}
              <div className="col-span-2 sm:col-span-1 flex items-center">
                {item.checked ? (
                  <CheckSquare className="w-5 h-5 text-[#7E1828]" />
                ) : (
                  <Square className="w-5 h-5 text-[#888277] group-hover:text-[#181716]" />
                )}
              </div>

              {/* Label */}
              <div className="col-span-8 sm:col-span-9 pr-2">
                <span
                  className={`text-sm font-sans block ${
                    item.checked
                      ? "line-through text-[#888277]"
                      : "text-[#181716] font-semibold"
                  }`}
                >
                  {item.label}
                </span>
                {item.description && (
                  <span className="text-xs font-sans text-[#5D5951] block mt-0.5 leading-normal">
                    {item.description}
                  </span>
                )}
              </div>

              {/* Priority Stamp */}
              <div className="col-span-2 sm:col-span-2 text-right">
                {item.required ? (
                  <span className="text-[10px] font-sans text-[#7E1828] bg-[#FAF7F2] border border-[#DDD6C8] px-2 py-0.5 uppercase tracking-wider font-bold">
                    Critical
                  </span>
                ) : (
                  <span className="text-[10px] font-sans text-[#757065] uppercase font-semibold">
                    Supporting
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Custom Item Input */}
        <form onSubmit={handleAddCustom} className="p-3.5 bg-[#EFE9DB] border-t border-[#DDD6C8] flex gap-2.5">
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="+ Add another evidence item or document to track..."
            className="flex-1 bg-[#FAF7F2] border border-[#DDD6C8] text-xs sm:text-sm font-sans text-[#181716] px-3.5 py-2 focus:outline-none focus:border-[#7E1828] placeholder:text-[#888277]"
          />
          <button
            type="submit"
            className="text-xs font-sans uppercase font-bold bg-[#7E1828] hover:bg-[#661320] text-[#FAF7F2] px-4 py-2 flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </form>
      </div>

      {/* Statutory Evidence Notice */}
      <div className="mt-4 p-4 bg-[#F5F2EB] border border-[#DDD6C8] text-xs text-[#2C2A26] font-sans flex items-start gap-3 shadow-sm">
        <ShieldAlert className="w-4 h-4 text-[#7E1828] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-sans text-[#7E1828] font-bold text-xs uppercase tracking-wide">
            Statutory Preservation Advisory (Section 65B Evidence Act / Section 63 BSA):
          </span>{" "}
          Do not delete original chats or email headers. When printing WhatsApp conversations or digital logs for police or court submission, preserve the original device, as an electronic certificate under Section 65B (or Section 63 BSA 2023) may be required.
        </div>
      </div>
    </section>
  );
};
