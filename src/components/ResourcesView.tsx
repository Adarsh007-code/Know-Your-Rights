import React from "react";
import { ExternalLink, Phone, ShieldCheck, Scale, FileText, Globe } from "lucide-react";
import { EMERGENCY_CONTACTS } from "../data/legalIndex";

export const ResourcesView: React.FC = () => {
  const OFFICIAL_PORTALS = [
    {
      title: "National Cyber Crime Reporting Portal",
      portal: "cybercrime.gov.in",
      category: "CYBER FRAUD & CRIMES",
      description: "Central government portal to register complaints regarding financial cyber frauds, cyber harassment, hacking, and online extortion. Connected to Helpline 1930.",
      helpline: "1930",
    },
    {
      title: "e-Daakhil Consumer E-Filing System",
      portal: "edaakhil.nic.in",
      category: "CONSUMER GRIEVANCE",
      description: "Allows consumers to file and track consumer complaints online before District, State, and National Consumer Disputes Redressal Commissions without physical visits.",
      helpline: "1915",
    },
    {
      title: "National Legal Services Authority (NALSA)",
      portal: "nalsa.gov.in",
      category: "FREE LEGAL AID",
      description: "Provides free and competent legal services to the weaker sections of society, including women, children, scheduled castes/tribes, and persons in custody under Article 39A.",
      helpline: "15100",
    },
    {
      title: "eCourts Services Portal (Govt of India)",
      portal: "services.ecourts.gov.in",
      category: "CASE STATUS & ORDERS",
      description: "Official portal to track case status, certified judgments, court cause lists, and filings across High Courts and District Courts in India.",
      helpline: "National eCourts SMS: SMS ECOURTS <CNR> to 9766899899",
    },
    {
      title: "RTI Online (Department of Personnel & Training)",
      portal: "rtionline.gov.in",
      category: "PUBLIC TRANSPARENCY",
      description: "Submit Right to Information applications and first appeals online to all central government ministries, departments, and public sector undertakings.",
      helpline: "Statutory response within 30 days",
    },
    {
      title: "SAMADHAN Portal (Ministry of Labour)",
      portal: "samadhan.labour.gov.in",
      category: "LABOUR & WAGES",
      description: "Filing and tracking of industrial disputes, unpaid wages, and conciliation proceedings before Regional Labour Commissioners.",
      helpline: "Central Industrial Relations Machinery",
    }
  ];

  return (
    <section id="resources-page" className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-[#2C2A26]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FAF7F2] tracking-tight uppercase leading-[1.1]">
          OFFICIAL LEGAL PORTALS & HELPLINES
        </h1>
        <p className="mt-3 text-lg sm:text-xl font-serif italic text-[#B5AEA1] max-w-3xl leading-relaxed">
          Direct access to sovereign portals, statutory dispute redressal bodies, and verified emergency helplines.
        </p>
      </div>

      {/* Emergency Helplines Grid */}
      <div>
        <h2 className="text-xs font-sans uppercase tracking-wider text-[#BFA15F] mb-3 flex items-center gap-2 font-semibold">
          <Phone className="w-3.5 h-3.5 text-[#7E1828]" />
          Statutory Toll-Free Helplines (Pan-India)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EMERGENCY_CONTACTS.map((item) => (
            <div
              key={item.number}
              className="p-5 bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-2xl font-bold text-[#7E1828]">
                  {item.number}
                </span>
                <h3 className="text-xs font-sans font-bold text-[#181716] mt-1.5 uppercase tracking-wide">
                  {item.name}
                </h3>
              </div>
              <p className="text-xs font-sans text-[#5D5951] mt-2.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Official Redressal Portals */}
      <div className="pt-6">
        <h2 className="text-xs font-sans uppercase tracking-wider text-[#BFA15F] mb-4 flex items-center gap-2 font-semibold">
          <Globe className="w-3.5 h-3.5 text-[#9E823E]" />
          Official Online E-Filing & Grievance Systems
        </h2>

        <div className="space-y-4">
          {OFFICIAL_PORTALS.map((portal, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F5F2EB] text-[#1C1B19] border border-[#DDD6C8] shadow-md hover:border-[#7E1828] transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#DDD6C8] text-xs font-sans">
                <span className="text-[#7E1828] font-bold uppercase tracking-wider text-[11px]">
                  {portal.category}
                </span>
                <span className="text-[#888277] uppercase text-[10px] font-semibold tracking-wider">
                  Government of India Sovereign Portal
                </span>
              </div>

              <div className="mt-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#181716]">
                    {portal.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-sans text-[#2C2A26] leading-relaxed max-w-2xl">
                    {portal.description}
                  </p>
                </div>

                <a
                  href={`https://${portal.portal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3.5 py-2 bg-[#FAF7F2] hover:bg-[#661320] hover:text-[#FAF7F2] text-[#181716] border border-[#DDD6C8] hover:border-[#4A0E18] text-xs font-sans font-semibold flex items-center gap-2 transition-colors self-start shadow-xs"
                >
                  <span>{portal.portal}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7E1828] group-hover:text-[#FAF7F2]" />
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DDD6C8] text-xs font-sans text-[#5D5951] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7E1828]" />
                <span><strong className="font-semibold text-[#181716]">Official Protocol:</strong> {portal.helpline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
