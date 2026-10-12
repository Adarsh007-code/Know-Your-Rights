import React from "react";
import { Scale, BookOpen, FileText, HelpCircle, Shield, Menu, X, Image as ImageIcon } from "lucide-react";
import { PROJECT_BACKGROUND_SRC } from "./BackgroundLayer";

export type NavTab = "home" | "problem" | "search" | "resources" | "about";

interface VerticalNavigationProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  caseIdActive?: string | null;
  onOpenBackgroundModal?: () => void;
}

export const VerticalNavigation: React.FC<VerticalNavigationProps> = ({
  activeTab,
  onSelectTab,
  caseIdActive,
  onOpenBackgroundModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);


  const navItems: { id: NavTab; label: string; description: string; icon: React.ReactNode }[] = [
    { id: "home", label: "Home", description: "Case Intake", icon: <FileText className="w-4 h-4" /> },
    { id: "problem", label: "Case Docket", description: "Rights & Remedies", icon: <Scale className="w-4 h-4" /> },
    { id: "search", label: "Search Law", description: "Statutory Index", icon: <BookOpen className="w-4 h-4" /> },
    { id: "resources", label: "Legal Portals", description: "Helplines & Courts", icon: <Shield className="w-4 h-4" /> },
    { id: "about", label: "About KYR", description: "Public Mission", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP VERTICAL NAVIGATION RAIL ================= */}
      <aside
        id="vertical-navigation-rail"
        className="hidden lg:flex flex-col justify-between w-64 shrink-0 bg-[#161514]/95 border-r border-[#2C2A26] backdrop-blur-md sticky top-0 h-screen z-30 select-none py-7 px-5"
      >
        {/* Top Branding Section */}
        <div>
          <div className="flex items-center gap-3 pb-5 border-b border-[#2C2A26]">
            <div className="w-8 h-8 bg-[#661320] flex items-center justify-center text-[#F7F4EC] font-serif font-bold text-xs tracking-wider border border-[#7E1828] shadow-sm">
              <Scale className="w-4 h-4 text-[#FAF7F2]" />
            </div>
            <div>
              <div className="text-[11px] tracking-wider font-sans font-semibold text-[#BFA15F] uppercase leading-tight">
                Republic of India
              </div>
              <div className="text-xs font-serif font-bold text-[#EFE9DB] tracking-wide mt-0.5">
                Legal Awareness Desk
              </div>
            </div>
          </div>

          {/* Distinctive Vertical Editorial Heading */}
          <div className="pt-6 pb-6 border-b border-[#2C2A26]">
            <div className="text-2xl font-serif font-bold tracking-tight text-[#FAF7F2] leading-[1.08]">
              <div>KNOW</div>
              <div>YOUR</div>
              <div className="text-[#BFA15F]">RIGHTS.</div>
            </div>
            <p className="text-xs font-sans text-[#A8A196] mt-2 leading-relaxed">
              Empowering citizens with statutory rights and procedural guidance.
            </p>
          </div>

          {/* Active Case Badge if user has analyzed a problem */}
          {caseIdActive && (
            <div className="mt-5 p-3 bg-[#1C1A17] border border-[#3E3B35]">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-[#888277] uppercase text-[10px] tracking-wider font-semibold">Active Docket</span>
                <span className="text-[#BFA15F] font-semibold">{caseIdActive}</span>
              </div>
              <button
                id="nav-view-active-case"
                onClick={() => handleNavClick("problem")}
                className="w-full mt-2.5 text-xs font-sans font-semibold uppercase tracking-wider bg-[#2C2A26] hover:bg-[#661320] text-[#FAF7F2] py-1.5 px-2.5 transition-colors flex items-center justify-between border border-[#3E3B35]"
              >
                <span>Open Analysis</span>
                <span>→</span>
              </button>
            </div>
          )}

          {/* Navigation Items */}
          <nav className="mt-6 space-y-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full group flex items-center justify-between px-3 py-2.5 text-left transition-all duration-150 border ${
                    isActive
                      ? "bg-[#22201D] border-[#7E1828] text-[#FAF7F2] shadow-sm"
                      : "border-transparent text-[#B5AEA1] hover:text-[#FAF7F2] hover:bg-[#1C1B19] hover:border-[#2C2A26]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`transition-colors ${
                        isActive ? "text-[#BFA15F]" : "text-[#7E1828] group-hover:text-[#BFA15F]"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <div className="font-serif font-bold text-sm tracking-wide">
                        {item.label}
                      </div>
                      <div className="text-[11px] font-sans text-[#777166] group-hover:text-[#A8A196] leading-tight">
                        {item.description}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-sm transition-all duration-200 ${
                      isActive ? "text-[#BFA15F] translate-x-0 opacity-100" : "opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 text-[#A8A196]"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Rail Metadata & Background Photo Button */}
        <div className="pt-4 border-t border-[#2C2A26] space-y-3">
          {onOpenBackgroundModal && (
            <button
              type="button"
              onClick={onOpenBackgroundModal}
              className="w-full flex items-center gap-2.5 p-2 bg-[#1C1B19] hover:bg-[#252320] border border-[#2C2A26] hover:border-[#4A463F] text-left transition-colors group cursor-pointer"
              title="Click to view full background photo"
            >
              <div className="w-8 h-8 rounded-xs overflow-hidden shrink-0 border border-[#3E3B35]">
                <img
                  src={PROJECT_BACKGROUND_SRC}
                  alt="Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-serif font-bold text-[#FAF7F2] group-hover:text-[#BFA15F] flex items-center justify-between">
                  <span>Background Pic</span>
                  <span className="text-[10px] text-[#A8A196]">View ↗</span>
                </div>
                <div className="text-[10px] font-sans text-[#777166] truncate">
                  Court desk chamber artwork
                </div>
              </div>
            </button>
          )}

          <div className="text-xs font-sans text-[#888277] leading-relaxed">
            <span className="font-semibold text-[#A8A196] block">Public Legal Resource</span>
            Constitution of India & Central Enactments
          </div>
          <div className="text-[11px] font-sans text-[#6E6960]">
            Free citizen awareness initiative
          </div>
        </div>
      </aside>

      {/* ================= MOBILE / TABLET COMPACT TOP NAVIGATION ================= */}
      <header
        id="mobile-top-header"
        className="lg:hidden sticky top-0 z-40 bg-[#161514]/95 border-b border-[#2C2A26] backdrop-blur-md px-4 py-3 select-none"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNavClick("home")}>
            <div className="w-7 h-7 bg-[#661320] flex items-center justify-center text-[#F7F4EC] font-serif font-bold text-xs border border-[#7E1828]">
              <Scale className="w-4 h-4 text-[#FAF7F2]" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-[#FAF7F2] tracking-wide">
                KNOW YOUR RIGHTS
              </div>
              <div className="text-[10px] font-sans text-[#BFA15F] tracking-wider uppercase">
                Legal Awareness Platform
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {caseIdActive && (
              <button
                onClick={() => handleNavClick("problem")}
                className="text-xs font-sans font-semibold bg-[#2C2A26] border border-[#7E1828] text-[#FAF7F2] px-2.5 py-1"
              >
                {caseIdActive}
              </button>
            )}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#FAF7F2] border border-[#3A3833] bg-[#1F1E1C]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="mt-3 pt-3 border-t border-[#2C2A26] space-y-1 pb-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  id={`mobile-nav-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-left text-xs uppercase font-sans font-semibold tracking-wider ${
                    isActive
                      ? "bg-[#22201D] text-[#FAF7F2] border-l-2 border-[#7E1828]"
                      : "text-[#B5AEA1] hover:bg-[#1C1B19]"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={isActive ? "text-[#BFA15F]" : "text-[#7E1828]"}>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  <span>→</span>
                </button>
              );
            })}

            {onOpenBackgroundModal && (
              <button
                id="mobile-nav-background"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBackgroundModal();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 text-left text-xs uppercase font-sans font-semibold tracking-wider text-[#BFA15F] hover:bg-[#1C1B19] border-t border-[#2C2A26] mt-2 pt-2"
              >
                <span className="flex items-center gap-2.5">
                  <ImageIcon className="w-4 h-4 text-[#BFA15F]" />
                  <span>View Background Pic</span>
                </span>
                <span>↗</span>
              </button>
            )}
          </nav>
        )}
      </header>
    </>
  );
};
