import React, { useState } from "react";
import { ArrowRight, FileQuestion, Sparkles, MapPin, Tag, Calendar, AlertCircle } from "lucide-react";

interface ProblemInputProps {
  onAnalyze: (data: {
    problemText: string;
    location: string;
    category: string;
    dateOccurred: string;
  }) => void;
  isLoading: boolean;
  prefillPrompt?: string;
  prefillCategory?: string;
}

const INDIAN_STATES = [
  "National / All India",
  "Delhi NCR",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Uttar Pradesh",
  "West Bengal",
  "Telangana",
  "Gujarat",
  "Rajasthan",
  "Kerala",
  "Punjab & Haryana",
  "Madhya Pradesh",
  "Bihar",
  "Other State/UT",
];

const LEGAL_CATEGORIES = [
  "General / Not Sure",
  "Cyber Crime & UPI Scams",
  "Employment & Unpaid Wages",
  "Landlord, Tenant & Property",
  "Consumer Complaint & E-Commerce",
  "Cheque Bounce & Banking",
  "Harassment & Domestic Safety",
  "RTI & Public Administration",
];

export const ProblemInput: React.FC<ProblemInputProps> = ({
  onAnalyze,
  isLoading,
  prefillPrompt = "",
  prefillCategory = "",
}) => {
  const [problemText, setProblemText] = useState(prefillPrompt);
  const [location, setLocation] = useState("National / All India");
  const [category, setCategory] = useState(prefillCategory || "General / Not Sure");
  const [dateOccurred, setDateOccurred] = useState("");
  const [validationError, setValidationError] = useState("");

  // Update if prefill changes from external quick topics
  React.useEffect(() => {
    if (prefillPrompt) {
      setProblemText(prefillPrompt);
    }
    if (prefillCategory) {
      setCategory(prefillCategory);
    }
  }, [prefillPrompt, prefillCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!problemText.trim() || problemText.trim().length < 15) {
      setValidationError("Please describe your situation in at least 15 characters so we can identify relevant legal frameworks.");
      return;
    }
    setValidationError("");
    onAnalyze({
      problemText: problemText.trim(),
      location,
      category,
      dateOccurred,
    });
  };

  return (
    <section id="problem-input-section" className="relative">
      {/* Editorial Case Header Block - Matches Reference Screenshot Header */}
      <div className="pb-6 border-b border-[#2C2A26]">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-[#888277] uppercase tracking-wider mb-3">
          <span className="text-[#BFA15F] font-semibold">Legal Awareness Platform • Republic of India</span>
          <span className="text-[#A8A196]">Citizen Intake Service</span>
        </div>

        {/* Large Editorial Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FAF7F2] tracking-tight leading-[1.05] uppercase">
          KNOW<br />
          YOUR<br />
          <span className="text-[#DFD7C4]">RIGHTS.</span>
        </h1>

        <p className="mt-3 text-lg sm:text-xl text-[#B5AEA1] font-serif italic max-w-3xl leading-relaxed">
          Understanding what to do when you don&apos;t know where to start.
        </p>
      </div>

      {/* Input Sheet Container - Matches Reference Docket Card */}
      <div className="mt-8">
        <form onSubmit={handleSubmit} className="relative">
          {/* Paper Sheet Document Box */}
          <div className="bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-lg p-6 sm:p-10 relative overflow-hidden">
            {/* Docket Header Metadata */}
            <div className="border-b border-[#DDD6C8] pb-4 mb-6 flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold block mb-1">
                  Citizen Intake Docket • Preliminary Assessment
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#181716] tracking-tight mt-2">
                  Describe Your Situation
                </h2>
              </div>
              <span className="text-xs font-sans text-[#7E1828] font-semibold uppercase bg-[#FAF7F2] border border-[#DDD6C8] px-3 py-1">
                Form KYR-01
              </span>
            </div>

            <p className="text-[15px] sm:text-base font-sans text-[#2C2A26] leading-[1.75] mb-5">
              Explain what happened in normal, everyday language. You do not need to cite statutory enactments or legal terminology. We will identify the relevant legal areas, first priority actions, and evidentiary records to preserve.
            </p>

            {/* Textarea Styled with generous line-height and authentic docket feel */}
            <div className="relative">
              <textarea
                id="citizen-problem-statement"
                rows={5}
                value={problemText}
                onChange={(e) => {
                  setProblemText(e.target.value);
                  if (validationError) setValidationError("");
                }}
                placeholder="Example: My employer has withheld my salary for the last two months and refuses to provide my experience letter or PF account details. Or: I ordered electronics online, received an empty box, and the merchant customer service refused a refund..."
                className="w-full bg-[#FAF7F2] border border-[#DDD6C8] p-4 text-[15px] sm:text-base font-sans text-[#181716] placeholder:text-[#888277] focus:outline-none focus:border-[#7E1828] leading-[1.7] min-h-[140px] resize-y"
              />
            </div>

            {/* Bottom Metadata Fields: LOCATION | CATEGORY | DATE */}
            <div className="mt-6 pt-5 border-t border-[#DDD6C8] grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Location Selector */}
              <div>
                <label htmlFor="select-location" className="block text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7E1828]" />
                  Location / Jurisdiction
                </label>
                <select
                  id="select-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DDD6C8] text-sm font-sans text-[#1C1B19] py-2 px-2.5 focus:outline-none focus:border-[#7E1828]"
                >
                  {INDIAN_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Selector */}
              <div>
                <label htmlFor="select-category" className="block text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold mb-2 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#7E1828]" />
                  Dispute Category
                </label>
                <select
                  id="select-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DDD6C8] text-sm font-sans text-[#1C1B19] py-2 px-2.5 focus:outline-none focus:border-[#7E1828]"
                >
                  {LEGAL_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Input */}
              <div>
                <label htmlFor="input-date" className="block text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#7E1828]" />
                  Approx. Date Occurred
                </label>
                <input
                  id="input-date"
                  type="text"
                  value={dateOccurred}
                  onChange={(e) => setDateOccurred(e.target.value)}
                  placeholder="e.g. Last week, or Oct 2025"
                  className="w-full bg-[#FAF7F2] border border-[#DDD6C8] text-sm font-sans text-[#1C1B19] py-2 px-2.5 focus:outline-none focus:border-[#7E1828] placeholder:text-[#888277]"
                />
              </div>
            </div>

            {/* Validation Warning */}
            {validationError && (
              <div className="mt-5 p-3 bg-[#FDE8EA] border border-[#E5A4AE] text-xs font-sans text-[#7E1828] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="font-medium">{validationError}</span>
              </div>
            )}

            {/* Bottom Action Strip with Strong Rectangular Button */}
            <div className="mt-8 pt-6 border-t border-[#DDD6C8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-sans text-[#5D5951] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7E1828]" />
                <span>Parses statutory rights, preliminary recourse, and documentary evidence</span>
              </div>

              <button
                id="begin-analysis-button"
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#661320] hover:bg-[#7E1828] active:bg-[#4A0E18] text-[#F7F4EC] font-sans text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-3 border border-[#4A0E18] disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-[#FAF7F2] border-t-transparent" />
                    <span>Analyzing Statutes...</span>
                  </>
                ) : (
                  <>
                    <span>Begin Case Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
