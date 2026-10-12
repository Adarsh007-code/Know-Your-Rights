import React from "react";
import { Scale } from "lucide-react";
import { NavTab } from "./VerticalNavigation";

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  onOpenBackgroundModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBackgroundModal }) => {
  return (
    <footer id="editorial-colophon-footer" className="mt-20 pt-10 pb-12 border-t border-[#2C2A26] select-none">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#24221F]">
        {/* Brand Colophon */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 bg-[#661320] flex items-center justify-center text-[#FAF7F2] font-serif font-bold text-sm border border-[#7E1828] shadow-sm">
            <Scale className="w-4 h-4 text-[#FAF7F2]" />
          </div>
          <div>
            <div className="font-serif font-bold text-base sm:text-lg text-[#FAF7F2] tracking-wide">
              KNOW YOUR RIGHTS
            </div>
            <div className="text-xs font-sans text-[#BFA15F] font-medium tracking-wider uppercase">
              Legal Awareness Initiative • Republic of India
            </div>
          </div>
        </div>

        {/* Navigation Quick Links - Professional Sans-Serif Menu */}
        <nav className="flex flex-wrap items-center gap-6 text-xs font-sans font-medium tracking-wider text-[#A8A196] uppercase" aria-label="Footer Navigation">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-[#FAF7F2] transition-colors py-1 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("problem")}
            className="hover:text-[#FAF7F2] transition-colors py-1 cursor-pointer"
          >
            My Problem
          </button>
          <button
            onClick={() => onNavigate("search")}
            className="hover:text-[#FAF7F2] transition-colors py-1 cursor-pointer"
          >
            Search Law
          </button>
          <button
            onClick={() => onNavigate("resources")}
            className="hover:text-[#FAF7F2] transition-colors py-1 cursor-pointer"
          >
            Resources
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="hover:text-[#FAF7F2] transition-colors py-1 cursor-pointer"
          >
            About
          </button>
          {onOpenBackgroundModal && (
            <button
              onClick={onOpenBackgroundModal}
              className="text-[#BFA15F] hover:text-[#FAF7F2] transition-colors py-1 cursor-pointer flex items-center gap-1 font-semibold"
            >
              <span>Background Pic</span>
              <span>↗</span>
            </button>
          )}
        </nav>
      </div>

      {/* Legal Notice & Gazette Colophon */}
      <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-[13px] font-sans text-[#888277]">
        <p className="max-w-xl leading-relaxed">
          Statutory information referenced herein complies with the Constitution of India, Central Acts, and statutory regulations. Not a substitute for professional legal advice from an enrolled advocate.
        </p>

        <div className="text-left md:text-right shrink-0 space-y-0.5">
          <div className="text-[#A8A196] font-medium">Public Legal Awareness Register</div>
          <div className="text-[#9E823E] font-medium tracking-wide">Non-Profit Public Legal Education</div>
        </div>
      </div>
    </footer>
  );
};
