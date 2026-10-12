import React, { useState } from "react";
import { BackgroundLayer } from "./components/BackgroundLayer";
import { BackgroundModal } from "./components/BackgroundModal";
import { VerticalNavigation, NavTab } from "./components/VerticalNavigation";
import { LegalNote } from "./components/LegalNote";
import { ProblemInput } from "./components/ProblemInput";
import { CaseAnalysis } from "./components/CaseAnalysis";
import { QuickTopics } from "./components/QuickTopics";
import { LawSearch } from "./components/LawSearch";
import { ResourcesView } from "./components/ResourcesView";
import { AboutView } from "./components/AboutView";
import { Footer } from "./components/Footer";
import { CaseAnalysisData, QuickTopic } from "./types";
import { generateLocalCaseAnalysis } from "./data/legalIndex";

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>("home");
  const [currentCase, setCurrentCase] = useState<CaseAnalysisData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [prefillPrompt, setPrefillPrompt] = useState("");
  const [prefillCategory, setPrefillCategory] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [showBackgroundModal, setShowBackgroundModal] = useState(false);
  const [dimLevel, setDimLevel] = useState<"dark" | "medium" | "subtle" | "clear">("dark");


  // Main Analysis Handler
  const handleAnalyze = async (data: {
    problemText: string;
    location: string;
    category: string;
    dateOccurred: string;
  }) => {
    setIsAnalyzing(true);
    setStatusMessage("Classifying facts & cross-referencing Indian statutes...");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const caseData: CaseAnalysisData = await response.json();
      setCurrentCase(caseData);
      setActiveTab("problem");
    } catch (err: any) {
      console.warn("API request failed or running in preview without server endpoint; utilizing local legal database:", err?.message);
      // Fallback seamlessly to our robust verified Indian legal engine
      const localCase = generateLocalCaseAnalysis(
        data.problemText,
        data.location,
        data.category,
        data.dateOccurred
      );
      setCurrentCase(localCase);
      setActiveTab("problem");
    } finally {
      setIsAnalyzing(false);
      setStatusMessage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // When user clicks a card in "PEOPLE ASK ABOUT"
  const handleSelectQuickTopic = (topic: QuickTopic) => {
    setPrefillPrompt(topic.examplePrompt);
    setPrefillCategory(topic.category);
    // Scroll to input section or trigger analysis
    const inputSection = document.getElementById("citizen-problem-statement");
    if (inputSection) {
      inputSection.scrollIntoView({ behavior: "smooth", block: "center" });
      inputSection.focus();
    } else {
      setActiveTab("home");
      setTimeout(() => {
        const el = document.getElementById("citizen-problem-statement");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.focus();
        }
      }, 100);
    }
  };

  const handleResetCase = () => {
    setCurrentCase(null);
    setPrefillPrompt("");
    setActiveTab("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#141312] text-[#EFE9DB] font-sans relative selection:bg-[#661320] selection:text-[#FAF7F2]">
      {/* 1. Fixed authentic legal background layer (court desk, law books, ivory overlay) */}
      <BackgroundLayer dimLevel={dimLevel} />

      {/* 2. Asymmetric Desktop Layout: LEFT Nav Rail + CENTER Main Content + RIGHT Context Sidebar */}
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        {/* LEFT: Narrow vertical navigation rail (sticky desktop, top header mobile) */}
        <VerticalNavigation
          activeTab={activeTab}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          caseIdActive={currentCase?.caseId}
          onOpenBackgroundModal={() => setShowBackgroundModal(true)}
        />

        {/* CENTER: Main Content Area */}
        <main
          id="main-content-scroll-area"
          className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 lg:py-10 max-w-5xl mx-auto w-full"
        >
          {/* Analysis Loading Status Banner */}
          {isAnalyzing && (
            <div className="mb-6 p-4 bg-[#661320] text-[#FAF7F2] border border-[#7E1828] font-mono text-xs uppercase flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <span className="animate-spin inline-block w-4 h-4 border-2 border-[#FAF7F2] border-t-transparent" />
                <span>{statusMessage || "ANALYZING LEGAL MATRIX..."}</span>
              </div>
              <span className="text-[10px] text-[#BFA15F]">FORM KYR-ACTIVE</span>
            </div>
          )}

          {/* TAB ROUTING */}
          {activeTab === "home" && (
            <div className="space-y-12">
              {/* Problem Input Docket Form */}
              <ProblemInput
                onAnalyze={handleAnalyze}
                isLoading={isAnalyzing}
                prefillPrompt={prefillPrompt}
                prefillCategory={prefillCategory}
              />

              {/* Active Case Preview Banner if a case was already analyzed */}
              {currentCase && (
                <div className="p-5 bg-[#1F1E1B] border border-[#3E3B35] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#9E823E] tracking-widest block">
                      PREVIOUSLY ANALYZED CASE FILE
                    </span>
                    <h3 className="text-base font-serif font-bold text-[#FAF7F2] mt-0.5">
                      {currentCase.caseId} — {currentCase.category}
                    </h3>
                    <p className="text-xs text-[#888277] line-clamp-1 mt-1 font-sans">
                      {currentCase.situationSummary}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setActiveTab("problem")}
                      className="px-3 py-1.5 bg-[#661320] hover:bg-[#7E1828] text-[#FAF7F2] font-mono text-xs uppercase tracking-wider"
                    >
                      VIEW ACTIVE CASE →
                    </button>
                    <button
                      onClick={handleResetCase}
                      className="px-2.5 py-1.5 bg-[#2C2A26] hover:bg-[#3A3731] text-[#A8A196] font-mono text-xs uppercase"
                    >
                      DISMISS
                    </button>
                  </div>
                </div>
              )}

              {/* PEOPLE ASK ABOUT - Editorial Newspaper Grid */}
              <QuickTopics onSelectTopic={handleSelectQuickTopic} />
            </div>
          )}

          {activeTab === "problem" && (
            <div>
              {currentCase ? (
                <CaseAnalysis data={currentCase} onReset={handleResetCase} />
              ) : (
                <div className="space-y-8">
                  <div className="p-4 bg-[#1C1A18] border border-[#3A3731] text-xs font-mono text-[#9E823E] uppercase flex items-center justify-between">
                    <span>CASE DOCKET EMPTY</span>
                    <span>NO ACTIVE CASE FILED</span>
                  </div>
                  <ProblemInput
                    onAnalyze={handleAnalyze}
                    isLoading={isAnalyzing}
                    prefillPrompt={prefillPrompt}
                    prefillCategory={prefillCategory}
                  />
                  <QuickTopics onSelectTopic={handleSelectQuickTopic} />
                </div>
              )}
            </div>
          )}

          {activeTab === "search" && <LawSearch />}

          {activeTab === "resources" && <ResourcesView />}

          {activeTab === "about" && (
            <AboutView onOpenBackgroundModal={() => setShowBackgroundModal(true)} />
          )}

          {/* Editorial Colophon Footer */}
          <Footer
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenBackgroundModal={() => setShowBackgroundModal(true)}
          />
        </main>

        {/* RIGHT: Contextual Information Panel (Desktop only) */}
        <LegalNote />
      </div>

      {/* Project Background Photo Inspection Modal */}
      <BackgroundModal
        isOpen={showBackgroundModal}
        onClose={() => setShowBackgroundModal(false)}
        dimLevel={dimLevel}
        onChangeDimLevel={setDimLevel}
      />
    </div>
  );
}
