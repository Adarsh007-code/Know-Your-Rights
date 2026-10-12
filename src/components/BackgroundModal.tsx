import React, { useState } from "react";
import { X, Maximize2, Download, Eye, Sparkles, Image as ImageIcon } from "lucide-react";
import { PROJECT_BACKGROUND_SRC } from "./BackgroundLayer";

interface BackgroundModalProps {
  isOpen: boolean;
  onClose: () => void;
  dimLevel: "dark" | "medium" | "subtle" | "clear";
  onChangeDimLevel: (level: "dark" | "medium" | "subtle" | "clear") => void;
}

export const BackgroundModal: React.FC<BackgroundModalProps> = ({
  isOpen,
  onClose,
  dimLevel,
  onChangeDimLevel,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project Background Photo Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#181716] border border-[#3E3B35] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2C2A26] bg-[#1F1E1B]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#661320] text-[#FAF7F2] border border-[#7E1828]">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-serif font-bold text-[#FAF7F2] tracking-wide">
                Project Background Photo • Legal Chamber & Library
              </h2>
              <p className="text-[11px] font-sans text-[#A8A196]">
                Authentic high-resolution visual backdrop crafted for Know Your Rights
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A8A196] hover:text-[#FAF7F2] hover:bg-[#2C2A26] rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Main Image Frame */}
          <div className="relative group bg-[#0D0C0B] border border-[#2C2A26] overflow-hidden rounded-sm shadow-inner flex items-center justify-center min-h-[260px] sm:min-h-[380px]">
            <img
              src={PROJECT_BACKGROUND_SRC}
              alt="High-resolution courtroom library desk background"
              className={`w-full max-h-[55vh] object-contain transition-transform duration-300 ${
                isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            {/* Quick overlay pill with resolution and zoom tip */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono text-[#EFE9DB] border border-white/10 rounded">
              <span>{isZoomed ? "Click to reset zoom" : "Click image to zoom"}</span>
              <Maximize2 className="w-3 h-3 text-[#BFA15F]" />
            </div>
          </div>

          {/* Background Photo Details & Visual Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3.5 bg-[#1F1E1B] border border-[#2C2A26]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#BFA15F] font-bold block mb-1">
                Visual Composition
              </span>
              <p className="text-xs font-sans text-[#C7BFB1] leading-relaxed">
                A warm, atmospheric advocate&apos;s chamber featuring dark mahogany woodwork, antique brass legal scales, and amber illumination from a classic desk reading lamp.
              </p>
            </div>

            <div className="p-3.5 bg-[#1F1E1B] border border-[#2C2A26]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#BFA15F] font-bold block mb-1">
                Statutory Heritage
              </span>
              <p className="text-xs font-sans text-[#C7BFB1] leading-relaxed">
                Leather-bound law volumes symbolizing sovereign statutes, gazettes, and official constitutional jurisprudence of India.
              </p>
            </div>

            <div className="p-3.5 bg-[#1F1E1B] border border-[#2C2A26]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#BFA15F] font-bold block mb-1">
                Asset Metadata
              </span>
              <p className="text-xs font-sans text-[#C7BFB1] leading-relaxed">
                File: <span className="font-mono text-[11px] text-[#FAF7F2]">legal_court_desk.jpg</span>
                <br />
                Dimensions: 1024×1024 • 803 KB
                <br />
                Format: JPEG (Full RGB)
              </p>
            </div>
          </div>

          {/* Interactive Live Background Dimness Controller */}
          <div className="p-4 bg-[#211F1C] border border-[#3E3B35]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FAF7F2] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#BFA15F]" />
                  Live Website Background Visibility
                </span>
                <p className="text-xs font-sans text-[#8E877B] mt-0.5">
                  Adjust how intensely this background photo appears across the entire app
                </p>
              </div>

              <div className="flex items-center gap-1.5 bg-[#141312] p-1 border border-[#2C2A26]">
                {(
                  [
                    { id: "dark", label: "Dark (Editorial)" },
                    { id: "medium", label: "Medium" },
                    { id: "subtle", label: "Subtle" },
                    { id: "clear", label: "Clear (Vivid)" },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => onChangeDimLevel(opt.id)}
                    className={`px-2.5 py-1 text-xs font-sans font-medium transition-colors ${
                      dimLevel === opt.id
                        ? "bg-[#661320] text-[#FAF7F2] font-semibold"
                        : "text-[#A8A196] hover:text-[#FAF7F2] hover:bg-[#1F1E1B]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-t border-[#2C2A26] bg-[#141312]">
          <div className="text-xs font-sans text-[#777166] flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-[#BFA15F]" />
            <span>Currently using: <strong className="text-[#EFE9DB] capitalize">{dimLevel}</strong> backdrop visibility</span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={PROJECT_BACKGROUND_SRC}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium text-[#FAF7F2] bg-[#2C2A26] hover:bg-[#3E3B35] border border-[#4A463F] transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <a
              href={PROJECT_BACKGROUND_SRC}
              download="know_your_rights_courtroom_desk.jpg"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-sans font-semibold text-[#FAF7F2] bg-[#661320] hover:bg-[#7E1828] border border-[#9A1E32] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download High-Res JPG</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
