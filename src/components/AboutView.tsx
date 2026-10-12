import React from "react";
import { Scale, ShieldAlert, Award, FileCheck2 } from "lucide-react";

interface AboutViewProps {
  onOpenBackgroundModal?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = () => {
  return (
    <section id="about-page" className="space-y-8">
      {/* Header - Matches Screenshot Exactly */}
      <div className="pb-6 border-b border-[#2C2A26]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FAF7F2] tracking-tight uppercase leading-[1.1]">
          ABOUT KNOW YOUR RIGHTS
        </h1>
        <p className="mt-3 text-lg sm:text-xl font-serif italic text-[#B5AEA1] max-w-3xl leading-relaxed">
          An intelligent digital legal desk bridging the chasm between complex Indian statutory enactments and everyday citizens.
        </p>
      </div>

      {/* Main Philosophy Sheet - Matches Screenshot Docket Box */}
      <div className="bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-lg p-6 sm:p-10">
        <div className="border-b border-[#DDD6C8] pb-4 mb-6">
          <span className="text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold block mb-1">
            Doctrine of Legal Literacy • Republic of India
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#181716] tracking-tight mt-2">
            Democratizing Legal Comprehension
          </h2>
        </div>

        <div className="space-y-5 text-[15px] sm:text-base font-sans text-[#2C2A26] leading-[1.75]">
          <p>
            When a citizen encounters an abrupt dispute—an unpaid salary, an online banking theft, an aggressive landlord, or a defective product—the immediate barrier is rarely lack of statutory protection. The Indian legal framework possesses robust remedies (Consumer Protection Act, Code on Wages, IT Act, RERA, and constitutional writs). The barrier is <strong className="font-semibold text-[#181716]">information asymmetry</strong>: knowing what to do in the first forty-eight hours, what evidence to safeguard, and which forum possesses jurisdiction.
          </p>

          <p>
            <strong className="font-semibold text-[#181716]">Know Your Rights</strong> functions as a structured digital intake desk. It translates colloquial factual narratives into actionable legal sequences: preserving electronic metadata, establishing timelines, citing verified Indian statutory provisions, and directing citizens toward lawful constitutional forums.
          </p>
        </div>

        <div className="border-t border-[#DDD6C8] my-8" />

        {/* Core Principles Grid */}
        <div>
          <span className="text-xs font-sans uppercase tracking-wider text-[#7E1828] font-bold block mb-4">
            Governing Pillars • Ethical Standards
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 bg-[#FAF7F2] border border-[#DDD6C8]">
              <Scale className="w-5 h-5 text-[#7E1828] mb-3" />
              <h3 className="text-sm font-serif font-bold text-[#181716] tracking-wide">
                No Fabricated Law
              </h3>
              <p className="text-xs font-sans text-[#4A463F] mt-2 leading-relaxed">
                Every referenced section, act, and guideline is rooted strictly in verified sovereign enactments and official gazettes of India.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#DDD6C8]">
              <FileCheck2 className="w-5 h-5 text-[#9E823E] mb-3" />
              <h3 className="text-sm font-serif font-bold text-[#181716] tracking-wide">
                Evidentiary Rigor
              </h3>
              <p className="text-xs font-sans text-[#4A463F] mt-2 leading-relaxed">
                Emphasizing electronic discovery (Section 65B Evidence Act / BSA) so citizens preserve critical logs before tampering or expiration.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#DDD6C8]">
              <Award className="w-5 h-5 text-[#7E1828] mb-3" />
              <h3 className="text-sm font-serif font-bold text-[#181716] tracking-wide">
                Article 39A Commitment
              </h3>
              <p className="text-xs font-sans text-[#4A463F] mt-2 leading-relaxed">
                Promoting equal justice and free legal aid by connecting indigent and eligible citizens with NALSA and DLSA authorities nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="bg-[#1C1819] border border-[#58111D] p-6 text-xs sm:text-sm font-sans text-[#D598A3] leading-[1.7]">
        <div className="flex items-center gap-2 text-[#FAF7F2] font-sans uppercase tracking-wider font-bold text-xs mb-2">
          <ShieldAlert className="w-4 h-4 text-[#7E1828]" />
          <span>Statutory Disclaimer & Jurisdictional Boundaries</span>
        </div>
        <p>
          Know Your Rights is an independent legal awareness and public educational platform. It does not provide legal representation, legal advice, or attorney services. Interacting with this platform does not establish an advocate-client relationship. In contentious matters involving litigation, court summons, formal criminal accusations, or substantial financial claims, users must seek counsel from an advocate enrolled with the Bar Council of India.
        </p>
      </div>
    </section>
  );
};
