import { LawIndexItem, QuickTopic, CaseAnalysisData } from "../types";

export const POPULAR_LEGAL_TOPICS: QuickTopic[] = [
  {
    number: "01",
    title: "ONLINE FRAUD & UPI SCAMS",
    description: "Unauthorized deductions, phishing, lottery scams, or fake investment app deception.",
    category: "CYBER LAW",
    examplePrompt: "I clicked on a link received via SMS regarding electricity bill update and ₹45,000 was debited from my bank account via UPI without an OTP prompt.",
    commonStatute: "IT Act 2000 & BNS Sec 318"
  },
  {
    number: "02",
    title: "UNPAID SALARY & WAGE DEDUCTIONS",
    description: "Employer delaying compensation, withholding full and final settlement, or wrongful salary cuts.",
    category: "LABOUR & EMPLOYMENT",
    examplePrompt: "My employer terminated my contract without notice and has not released my salary for the last 2 months and refused to issue an experience letter.",
    commonStatute: "Payment of Wages Act & Code on Wages"
  },
  {
    number: "03",
    title: "LANDLORD & TENANT DISPUTES",
    description: "Refusal to refund security deposit, arbitrary rent hikes, or unlawful eviction threats.",
    category: "PROPERTY & TENANCY",
    examplePrompt: "I vacated my rented flat 45 days ago after completing the agreement period. The landlord is refusing to return my ₹60,000 security deposit citing normal wear and tear.",
    commonStatute: "Transfer of Property Act & State Rent Control"
  },
  {
    number: "04",
    title: "DEFECTIVE GOODS & E-COMMERCE",
    description: "Refusal of warranty, spurious products, non-delivery of items, or misleading advertisements.",
    category: "CONSUMER LAW",
    examplePrompt: "I ordered an electronic laptop online for ₹58,000. It arrived with a cracked screen and internal defect. The e-commerce platform rejected the return request claiming policy expiration.",
    commonStatute: "Consumer Protection Act 2019"
  },
  {
    number: "05",
    title: "ONLINE HARASSMENT & STALKING",
    description: "Non-consensual image sharing, persistent abusive messaging, morphing, or impersonation.",
    category: "CYBER & CRIMINAL",
    examplePrompt: "Someone created an imposter social media profile using my photographs and is sending obscene messages to my contacts and threatening me on messaging apps.",
    commonStatute: "IT Act Sec 66C/67 & BNS Sec 78"
  },
  {
    number: "06",
    title: "CHEQUE BOUNCE & UNPAID DUES",
    description: "Dishonour of negotiable instruments due to insufficient funds, stop payment, or account closed.",
    category: "BANKING & COMMERCIAL",
    examplePrompt: "A business associate issued a cheque of ₹1,50,000 against delivered goods. The bank returned it with the remark 'Funds Insufficient'. How do I proceed?",
    commonStatute: "Negotiable Instruments Act Sec 138"
  }
];

export const VERIFIED_LAW_DATABASE: LawIndexItem[] = [
  {
    id: "law-art-21",
    category: "CONSTITUTIONAL LAW",
    actTitle: "Constitution of India, 1950",
    enactedYear: "1950",
    relevantProvision: "Article 21 — Protection of Life and Personal Liberty",
    title: "Fundamental Right to Life, Dignity and Privacy",
    shortExplanation: "No person shall be deprived of his life or personal liberty except according to procedure established by law. The Supreme Court has expanded this to encompass the Right to Privacy (Puttaswamy case), speedy trial, legal aid, clean environment, and freedom from custodial torture.",
    keyRights: [
      "Right to fair and lawful investigation",
      "Right against arbitrary arrest without compliance of procedural guidelines",
      "Right to privacy regarding personal communications and data",
      "Right to free legal aid if indigent (NALSA framework)"
    ],
    officialRecourse: "Writ Petition before High Court (Article 226) or Supreme Court (Article 32)",
    source: "Constitution of India; K.S. Puttaswamy v. Union of India (2017)",
    verificationStatus: "Constitutional Right"
  },
  {
    id: "law-cpa-2019",
    category: "CONSUMER PROTECTION",
    actTitle: "Consumer Protection Act, 2019",
    enactedYear: "2019",
    relevantProvision: "Sections 2(7), 35, 84 — Consumer Rights, Grievances and Product Liability",
    title: "Remedies Against Defective Goods, Deficient Services & Unfair Trade Practices",
    shortExplanation: "Provides a three-tier quasi-judicial mechanism (District, State, National Commissions) to seek replacement, refund, or damages for goods that are defective, or services that fall short of agreed standards. Introduced provisions for e-commerce liability and misleading endorsements.",
    keyRights: [
      "Right to be protected against marketing of goods hazardous to life",
      "Right to be informed about quality, quantity, potency, purity, and standard",
      "Right to seek redressal against unfair trade practice or restrictive practices",
      "Right to file electronic complaints via the e-Daakhil online portal"
    ],
    officialRecourse: "District Consumer Disputes Redressal Commission or National Consumer Helpline (1915)",
    source: "The Consumer Protection Act, 2019 (Act No. 35 of 2019)",
    verificationStatus: "Verified Statutory Provision"
  },
  {
    id: "law-it-66",
    category: "CYBER LAW",
    actTitle: "Information Technology Act, 2000 (as amended)",
    enactedYear: "2000",
    relevantProvision: "Sections 43, 66C, 66D — Cyber Fraud, Identity Theft & Unauthorized Access",
    title: "Offences Relating to Unauthorized Account Access, Phishing and Computer System Abuse",
    shortExplanation: "Penalizes cheating by personation using computer devices, identity theft (stealing passwords or digital signatures), and hacking. Mandates civil compensation under Section 43 for unauthorized alteration or theft of digital data.",
    keyRights: [
      "Right to report financial fraud within golden hour (first 2-4 hours) for bank fund freeze",
      "Right to file a complaint at any cyber cell regardless of jurisdictional boundary (Zero Cyber FIR)",
      "Right to anonymity when reporting child sexual abuse material or severe threats"
    ],
    officialRecourse: "National Cyber Crime Reporting Portal (cybercrime.gov.in) & Helpline 1930",
    source: "Information Technology Act, 2000 (Act No. 21 of 2000)",
    verificationStatus: "Verified Statutory Provision"
  },
  {
    id: "law-wages-code",
    category: "LABOUR & EMPLOYMENT",
    actTitle: "Code on Wages, 2019 / Payment of Wages Act, 1936",
    enactedYear: "2019",
    relevantProvision: "Provisions on Timely Payment and Unauthorized Deductions",
    title: "Statutory Entitlement to Earned Wages and Non-Withholding",
    shortExplanation: "An employer is legally obligated to disburse wages within prescribed timelines (generally before the 7th or 10th of each following month). Deductions cannot exceed 50% of the wage and must follow permissible statutory categories.",
    keyRights: [
      "Right to timely disbursement of wages into bank account",
      "Right against arbitrary withholding of full-and-final settlement upon resignation",
      "Right to approach the Labour Commissioner or conciliation officer",
      "Right to receive wage slips and tax deduction receipts (Form 16)"
    ],
    officialRecourse: "Office of the Deputy Labour Commissioner / Labour Court / Civil Suit for Recovery",
    source: "Code on Wages, 2019 / Payment of Wages Act, 1936",
    verificationStatus: "Verified Statutory Provision"
  },
  {
    id: "law-rera-2016",
    category: "REAL ESTATE & HOUSING",
    actTitle: "Real Estate (Regulation and Development) Act, 2016 (RERA)",
    enactedYear: "2016",
    relevantProvision: "Section 18 — Return of Amount and Compensation",
    title: "Buyer Protection for Delayed Possession and Structural Defects",
    shortExplanation: "If a promoter fails to give possession of an apartment in accordance with the terms of the agreement for sale, the homebuyer is entitled to claim refund of the entire amount with prescribed interest, or receive monthly interest for each month of delay until possession.",
    keyRights: [
      "Right to complete transparency regarding sanctioned project plans and approvals",
      "Right to exit the project and seek full refund with interest upon project default",
      "Right to have structural defects rectified free of cost within 5 years of possession",
      "Requirement for builder to keep 70% of buyer funds in a separate escrow account"
    ],
    officialRecourse: "State RERA Authority (e.g. MahaRERA, HRERA, UP-RERA) & Appellate Tribunal",
    source: "Real Estate (Regulation and Development) Act, 2016",
    verificationStatus: "Verified Statutory Provision"
  },
  {
    id: "law-ni-138",
    category: "BANKING & COMMERCIAL",
    actTitle: "Negotiable Instruments Act, 1881",
    enactedYear: "1881",
    relevantProvision: "Section 138 — Dishonour of Cheque for Insufficiency of Funds",
    title: "Statutory Recourse for Bounced Cheques Issued in Discharge of Debt",
    shortExplanation: "Criminalizes the dishonour of a cheque issued to discharge legally enforceable debt. Requires strict compliance with statutory timeframes: presenting within validity (3 months), issuing legal demand notice within 30 days of memo, and filing complaint within 30 days after 15-day notice period expires.",
    keyRights: [
      "Right to serve a formal 15-day Demand Notice on the drawer",
      "Right to recover up to twice the cheque amount as fine upon conviction",
      "Jurisdiction lies where the payee maintains the bank account where cheque was deposited"
    ],
    officialRecourse: "Court of Judicial Magistrate First Class / Metropolitan Magistrate",
    source: "Negotiable Instruments Act, 1881 (Act No. 26 of 1881)",
    verificationStatus: "Verified Statutory Provision"
  },
  {
    id: "law-rti-2005",
    category: "PUBLIC LAW & GOVERNANCE",
    actTitle: "Right to Information Act, 2005",
    enactedYear: "2005",
    relevantProvision: "Sections 6 & 7 — Request for Obtaining Information & Disposal of Request",
    title: "Citizen Access to Government Records and Public Authority Files",
    shortExplanation: "Empowers Indian citizens to inspect government works, documents, records, and obtain certified copies. Mandates response from Public Information Officers (PIO) within 30 days (or 48 hours if life and liberty of a person are involved).",
    keyRights: [
      "Right to obtain information without having to give any reason for the request",
      "Right to first appeal within 30 days if information is refused or denied",
      "Right to second appeal before Central or State Information Commission",
      "Penalties on officers for deliberate withholding or distortion of public records"
    ],
    officialRecourse: "Central Information Commission / State Information Commission (rtionline.gov.in)",
    source: "Right to Information Act, 2005",
    verificationStatus: "Verified Statutory Provision"
  },
  {
    id: "law-zero-fir",
    category: "CRIMINAL PROCEDURE",
    actTitle: "Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC",
    enactedYear: "2023",
    relevantProvision: "Section 173(1) BNSS / Section 154 CrPC Guidelines",
    title: "Doctrine of Zero FIR & Mandatory Registration of Cognizable Offences",
    shortExplanation: "A citizen can lodge a First Information Report (FIR) at any police station, irrespective of whether the crime occurred within its territorial jurisdiction. The station must register the complaint as a 'Zero FIR', initiate urgent action, and subsequently transfer it to the concerned station.",
    keyRights: [
      "Right to obtain a free certified copy of the FIR immediately upon registration",
      "Right of women to record statements in private before a female officer",
      "Right to send the complaint to the Superintendent of Police (SP) by post if station in-charge refuses",
      "Right against physical detention of women and minors at police station during night hours"
    ],
    officialRecourse: "Local Police Station, SP Office, or Magistrate under Sec 175(3) BNSS",
    source: "Ministry of Home Affairs Advisory on Zero FIR & Lalita Kumari v. Govt of UP (2014)",
    verificationStatus: "Procedural Guideline"
  }
];

export const EMERGENCY_CONTACTS = [
  { name: "Emergency Response Support System", number: "112", description: "Police, Fire, Ambulance pan-India" },
  { name: "National Cyber Crime Helpline", number: "1930", description: "Financial cyber fraud (Freeze banking transactions)" },
  { name: "National Consumer Helpline", number: "1915", description: "Grievances regarding companies & services" },
  { name: "National Legal Services Authority (NALSA)", number: "15100", description: "Free legal aid for eligible citizens" },
  { name: "Women Helpline (All India)", number: "181", description: "24x7 emergency response for women in distress" },
  { name: "Childline India", number: "1098", description: "Children in distress and protection" }
];

export const TODAY_LEGAL_NOTES = [
  {
    title: "The Golden Hour in Financial Cyber Fraud",
    note: "If unauthorized money is siphoned from your bank account or UPI, calling 1930 or lodging an acknowledgment on cybercrime.gov.in within the first two hours enables the Indian Cyber Crime Coordination Centre (I4C) to trigger an automated freeze on the beneficiary account before funds are laundered.",
    statute: "I4C Standard Operating Procedure & IT Act 2000"
  },
  {
    title: "Landlord Cannot Cut Essential Amenities",
    note: "Under tenancy jurisprudence across Indian states, a landlord cannot withhold essential supplies such as water, electricity, or lift access to enforce rent payment or compel eviction. Such actions constitute illegal harassment actionable before the Rent Controller.",
    statute: "Model Tenancy Act & State Rent Control Legislations"
  },
  {
    title: "Right to a Free Copy of FIR",
    note: "Under Indian criminal procedural law, every complainant has an absolute statutory right to receive a copy of the First Information Report (FIR) free of cost immediately upon its registration by the police officer.",
    statute: "BNSS Sec 173(2) / CrPC Sec 154(2)"
  }
];

// Fallback generator when AI is offline or API key is not yet configured
export function generateLocalCaseAnalysis(
  problemText: string,
  location: string = "India",
  category: string = "General",
  dateOccurred: string = ""
): CaseAnalysisData {
  const text = problemText.toLowerCase();
  const caseId = `KYR-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  // 1. Cyber fraud / UPI
  if (text.includes("upi") || text.includes("bank") || text.includes("scam") || text.includes("fraud") || text.includes("otp") || text.includes("phishing") || text.includes("debited") || text.includes("account")) {
    return {
      caseId,
      timestamp: now,
      problemText,
      location: location || "India",
      category: "CYBER & FINANCIAL FRAUD",
      dateOccurred: dateOccurred || "Recent",
      situationSummary: "Potential financial cyber fraud involving unauthorized electronic fund movement, deception, or compromised digital banking credentials.",
      possibleLegalAreas: ["CYBER CRIME", "BANKING LAW", "CONSUMER PROTECTION", "CRIMINAL FRAUD"],
      firstSteps: [
        {
          stepNumber: "01",
          title: "NOTIFY BANK & DIAL 1930 IMMEDIATELY",
          description: "Call the National Cyber Crime Helpline at 1930 to trigger a lien on the recipient bank account, and instruct your bank to freeze UPI IDs/cards associated with the compromised account.",
          urgent: true
        },
        {
          stepNumber: "02",
          title: "PRESERVE TRANSACTION AUDIT TRAIL",
          description: "Save UPI transaction reference numbers (UTR), bank SMS alerts, account statement showing debit entries, call logs, and WhatsApp/SMS chat history with the sender.",
          actionItem: "Download stamped bank mini-statement immediately"
        },
        {
          stepNumber: "03",
          title: "LODGE CYBER CRIME COMPLAINT",
          description: "File an official e-complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) and download the formal acknowledgment slip.",
          actionItem: "File under 'Financial Fraud' category"
        },
        {
          stepNumber: "04",
          title: "SERVE NOTICE ON BANK FOR REVERSAL",
          description: "Under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18, if zero liability applies (reported within 3 working days of third-party breach), the customer is not liable for unauthorized electronic transactions.",
          actionItem: "Submit written claim to Branch Manager"
        }
      ],
      evidenceToPreserve: [
        { id: "e1", label: "Bank Account Statement showing debit & UTR number", checked: false, required: true },
        { id: "e2", label: "Screenshots of UPI app payment summary screen", checked: false, required: true },
        { id: "e3", label: "SMS logs received from Bank / Payment Gateway", checked: false, required: true },
        { id: "e4", label: "Phone number, WhatsApp chats, or links sent by fraudster", checked: false },
        { id: "e5", label: "1930 helpline acknowledgment token / reference number", checked: false, required: true },
        { id: "e6", label: "Written email communication with the bank branch manager", checked: false }
      ],
      relevantLaws: [
        {
          actName: "Information Technology Act, 2000",
          provision: "Sections 43 & 66D",
          shortExplanation: "Punishes cheating by personation by using computer resources or communication devices with imprisonment up to 3 years and fine.",
          officialRecourse: "Cyber Crime Cell / cybercrime.gov.in",
          status: "Statutory Reference",
          keyRights: ["Right to demand account freeze", "Right to obtain cyber complaint acknowledgment"]
        },
        {
          actName: "Reserve Bank of India (RBI) Directions",
          provision: "RBI Circular on Customer Protection (Zero Liability)",
          shortExplanation: "Limits customer liability to zero if unauthorized electronic banking transaction is notified to bank within three working days.",
          officialRecourse: "Banking Ombudsman (cms.rbi.org.in)",
          status: "Statutory Reference",
          keyRights: ["Zero liability upon prompt notification", "Right to resolution within 90 days"]
        }
      ],
      warnings: [
        "Never share any new OTPs, PINs, or install remote access software (AnyDesk, TeamViewer) if someone claiming to be a bank agent contacts you.",
        "Ensure communication with your bank is documented in writing or via registered email."
      ],
      whenToSeekProfessionalHelp: "If the bank denies liability after 30 days or the amount is substantial, consult an advocate specializing in banking and cyber disputes to approach the Banking Ombudsman or High Court.",
      authoritiesToApproach: [
        { name: "National Cyber Crime Helpline", type: "Toll Free Helpline", contact: "1930", portal: "cybercrime.gov.in" },
        { name: "RBI Banking Ombudsman", type: "Statutory Ombudsman", portal: "cms.rbi.org.in" },
        { name: "Local Police Station / Cyber Cell", type: "Law Enforcement", contact: "112" }
      ],
      source: "STATUTORY_INDEX"
    };
  }

  // 2. Salary / Employment
  if (text.includes("salary") || text.includes("employer") || text.includes("wages") || text.includes("boss") || text.includes("relieving") || text.includes("resignation") || text.includes("terminate") || text.includes("pf") || text.includes("provident fund")) {
    return {
      caseId,
      timestamp: now,
      problemText,
      location: location || "India",
      category: "LABOUR & EMPLOYMENT",
      dateOccurred: dateOccurred || "Recent",
      situationSummary: "Withholding of earned wages, non-settlement of full and final dues, or failure to issue service documentation by an employer.",
      possibleLegalAreas: ["LABOUR LAW", "CONTRACT LAW", "CIVIL RECOVERY", "CONSTITUTIONAL WRIT"],
      firstSteps: [
        {
          stepNumber: "01",
          title: "PRESERVE EMPLOYMENT RECORDS & CONTRACT",
          description: "Safeguard your appointment letter, signed contract, pay slips, attendance logs, resignation acceptance email, and all official email correspondence regarding pending payments.",
          urgent: true
        },
        {
          stepNumber: "02",
          title: "ISSUE A FORMAL WRITTEN DEMAND NOTICE",
          description: "Send a polite but legally clear written demand via registered post and email to the company HR/management detailing exact pending salary amounts, dates, and a 15-day deadline for settlement.",
          actionItem: "Send to registered office and HR email"
        },
        {
          stepNumber: "03",
          title: "APPROACH THE LABOUR CONCILIATION OFFICER",
          description: "File a grievance before the District Labour Commissioner under the Payment of Wages Act / Code on Wages for non-payment of legitimate wages.",
          actionItem: "Submit copy of contract and pay slips"
        },
        {
          stepNumber: "04",
          title: "CHECK EPF AND TAX DEDUCTIONS",
          description: "Verify your EPFO passbook to check whether the employer deducted PF from your salary but failed to deposit it with EPFO (which is a criminal breach of trust under BNS/IPC).",
          actionItem: "Download EPFO passbook from unifiedportal-mem.epfindia.gov.in"
        }
      ],
      evidenceToPreserve: [
        { id: "e1", label: "Employment Letter & Service Agreement", checked: false, required: true },
        { id: "e2", label: "Salary slips for preceding 3–6 months", checked: false, required: true },
        { id: "e3", label: "Bank statements showing prior salary credits & current stoppage", checked: false, required: true },
        { id: "e4", label: "Resignation / Notice letter and delivery proof", checked: false },
        { id: "e5", label: "Email exchanges regarding full and final (F&F) settlement", checked: false },
        { id: "e6", label: "EPF Passbook showing non-deposit of deductions", checked: false }
      ],
      relevantLaws: [
        {
          actName: "Payment of Wages Act, 1936 & Code on Wages, 2019",
          provision: "Sections on Timely Payment and Recovery of Arrears",
          shortExplanation: "Mandates that employers must pay wages without unauthorized deductions within the statutory wage period. Penalizes default with fines and compensation.",
          officialRecourse: "Authority under Payment of Wages / Labour Court",
          status: "Statutory Reference",
          keyRights: ["Right to receive wages within 7–10 days of wage period", "Right to statutory interest on delayed settlement"]
        },
        {
          actName: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
          provision: "Section 14 — Penalties for Default in Deposit",
          shortExplanation: "Failure of employer to deposit deducted PF amounts within 15 days of month-end constitutes a cognizable offense and criminal breach of trust.",
          officialRecourse: "EPFO Grievance Portal (epfigms.gov.in)",
          status: "Statutory Reference",
          keyRights: ["Right to have matching employer contribution deposited", "Right to lodge EPFO grievance"]
        }
      ],
      warnings: [
        "Do not delete your work emails or communication trail before keeping offline backup copies.",
        "Ensure you adhere to company return-of-property protocols (laptops, badges) and obtain written acknowledgment of return."
      ],
      whenToSeekProfessionalHelp: "If the company management remains non-responsive after the formal notice, engage an advocate to send an Advocate's Legal Demand Notice or file a summary suit for recovery.",
      authoritiesToApproach: [
        { name: "District Labour Commissioner Office", type: "Labour Welfare Authority", contact: "Local District Office" },
        { name: "EPFiGMS (EPFO Grievance)", type: "Central Portal", portal: "epfigms.gov.in" },
        { name: "SAMADHAN Portal (Ministry of Labour)", type: "Dispute Resolution", portal: "samadhan.labour.gov.in" }
      ],
      source: "STATUTORY_INDEX"
    };
  }

  // 3. Landlord / Tenant
  if (text.includes("rent") || text.includes("landlord") || text.includes("tenant") || text.includes("deposit") || text.includes("flat") || text.includes("eviction") || text.includes("lease")) {
    return {
      caseId,
      timestamp: now,
      problemText,
      location: location || "India",
      category: "PROPERTY & TENANCY",
      dateOccurred: dateOccurred || "Recent",
      situationSummary: "Dispute regarding residential tenancy, non-refund of security deposit, unlawful eviction notice, or withholding of essential amenities.",
      possibleLegalAreas: ["PROPERTY LAW", "CONTRACT ACT", "RENT CONTROL LEGISLATION", "CIVIL LAW"],
      firstSteps: [
        {
          stepNumber: "01",
          title: "AUDIT LEASE AGREEMENT & INVENTORY RECORD",
          description: "Review your registered or notarized rent agreement, specifically clauses concerning security deposit refund timelines, deduction caps, and notice periods.",
          urgent: true
        },
        {
          stepNumber: "02",
          title: "RECORD DWELLING CONDITION WITH TIME-STAMPED MEDIA",
          description: "Capture comprehensive photos and videos of the premises at handover to establish that no damage beyond standard wear-and-tear occurred.",
          actionItem: "Export handover video with metadata"
        },
        {
          stepNumber: "03",
          title: "ISSUE FORMAL SECURITY DEPOSIT DEMAND LETTER",
          description: "Send a structured written communication detailing rent payments made, the handover date, key submission proof, and demanding the deposit balance within 15 days.",
          actionItem: "Send via registered email and Speed Post"
        },
        {
          stepNumber: "04",
          title: "PETITION RENT AUTHORITY / CONSUMER FORUM",
          description: "In states with enacted Rent Control / Tenancy Acts, submit an application before the Rent Authority, or consider a Consumer Commission petition if tenancy was facilitated through broker deficiency.",
          actionItem: "Approach Rent Authority or Legal Services Authority"
        }
      ],
      evidenceToPreserve: [
        { id: "e1", label: "Signed Rent / Lease Agreement", checked: false, required: true },
        { id: "e2", label: "Bank transfer slips / UPI receipts for rent and security deposit", checked: false, required: true },
        { id: "e3", label: "Notice of vacancy / move-out communication (email or WhatsApp)", checked: false, required: true },
        { id: "e4", label: "Photos and video of flat condition at time of vacating", checked: false },
        { id: "e5", label: "Written acknowledgment of key handover", checked: false },
        { id: "e6", label: "Electricity / Water utility bills paid up to date of vacation", checked: false }
      ],
      relevantLaws: [
        {
          actName: "Transfer of Property Act, 1882",
          provision: "Sections 106 & 108 — Rights & Liabilities of Lessor and Lessee",
          shortExplanation: "Governs determination of leases and obligations of landlords to return deposits and respect lessee's peaceful enjoyment without arbitrary disturbance.",
          officialRecourse: "Civil Court / Rent Authority",
          status: "Statutory Reference",
          keyRights: ["Right to peaceful possession during valid term", "Right to reasonable notice before eviction"]
        },
        {
          actName: "Model Tenancy Act / State Rent Control Acts",
          provision: "Security Deposit Cap & Refund Provisions",
          shortExplanation: "Restricts security deposits (e.g., maximum two months' rent for residential premises) and requires refund within one month of vacating.",
          officialRecourse: "Rent Court / Rent Tribunal",
          status: "Statutory Reference",
          keyRights: ["Right against arbitrary deposit deductions without itemized bills", "Protection against disconnection of electricity/water"]
        }
      ],
      warnings: [
        "Never vacate premises without taking photographs and videos, or without written confirmation of key receipt.",
        "Landlords cannot lawfully evict tenants forcibly without following the due process of court decree."
      ],
      whenToSeekProfessionalHelp: "If the landlord threatens physical confrontation or withholds significant funds without legal basis, consult an advocate to issue a legal notice and file a recovery suit.",
      authoritiesToApproach: [
        { name: "Rent Authority / Rent Court", type: "Quasi-Judicial Authority", jurisdiction: "Local Tehsil / Municipal District" },
        { name: "District Legal Services Authority (DLSA)", type: "Mediation & Legal Aid", contact: "15100" },
        { name: "Local Police Station (For unlawful force)", type: "Law Enforcement", contact: "112" }
      ],
      source: "STATUTORY_INDEX"
    };
  }

  // 4. Consumer / E-commerce default
  return {
    caseId,
    timestamp: now,
    problemText,
    location: location || "India",
    category: "CONSUMER & CIVIL RIGHTS",
    dateOccurred: dateOccurred || "Recent",
    situationSummary: "Grievance involving potential deficiency in service, non-fulfillment of contractual commitments, or consumer dispute.",
    possibleLegalAreas: ["CONSUMER PROTECTION", "LAW OF CONTRACTS", "CIVIL REMEDIES", "REGULATORY COMPLIANCE"],
    firstSteps: [
      {
        stepNumber: "01",
        title: "PRESERVE DOCUMENTARY EVIDENCE",
        description: "Collate purchase orders, invoices, payment confirmations, warranty cards, screenshots of advertisements, and customer care complaint tickets.",
        urgent: true
      },
      {
        stepNumber: "02",
        title: "ESCALATE TO NODAL GRIEVANCE OFFICER",
        description: "Submit a written escalation to the designated Grievance Officer or Appellate Authority of the company, setting out the defect and seeking resolution within 14 days.",
        actionItem: "Request formal Grievance Docket Number"
      },
      {
        stepNumber: "03",
        title: "REGISTER GRIEVANCE WITH NATIONAL CONSUMER HELPLINE",
        description: "File a complaint on the National Consumer Helpline (consumerhelpline.gov.in or dial 1915). A large percentage of commercial disputes resolve at this stage.",
        actionItem: "Dial 1915 or use NCH Mobile App"
      },
      {
        stepNumber: "04",
        title: "CONSIDER FILING ON E-DAAKHIL",
        description: "If unaddressed, initiate a formal consumer complaint online through the e-Daakhil portal (edaakhil.nic.in) before the District Consumer Forum without needing to engage an advocate.",
        actionItem: "Visit edaakhil.nic.in"
      }
    ],
    evidenceToPreserve: [
      { id: "e1", label: "Tax Invoice or Proof of Purchase / Service Order", checked: false, required: true },
      { id: "e2", label: "Bank / Card statement showing payment deduction", checked: false, required: true },
      { id: "e3", label: "Photographs or video proof of the defect / non-delivery", checked: false, required: true },
      { id: "e4", label: "Customer service emails and chat transcripts with ticket IDs", checked: false },
      { id: "e5", label: "Product warranty card or terms of service agreement", checked: false },
      { id: "e6", label: "Written refusal or unreasonable response from company", checked: false }
    ],
    relevantLaws: [
      {
        actName: "Consumer Protection Act, 2019",
        provision: "Section 2(11) & Section 35 — Deficiency in Service & Complaint Filing",
        shortExplanation: "Defines deficiency as any fault, imperfection, shortcoming or inadequacy in quality, nature and manner of performance. Entitles consumers to claim refund, replacement, and compensation.",
        officialRecourse: "District Consumer Commission / e-Daakhil",
        status: "Statutory Reference",
        keyRights: ["Right to be heard in consumer disputes", "Right to compensation for product liability and deficiency", "Right to file complaint from place of residence"]
      },
      {
        actName: "Indian Contract Act, 1872",
        provision: "Section 73 — Compensation for Loss or Damage Caused by Breach",
        shortExplanation: "Provides that a party who suffers from breach of contract is entitled to receive compensation from the defaulting party for direct losses naturally arising.",
        officialRecourse: "Civil Court / Mediation",
        status: "Statutory Reference",
        keyRights: ["Right to contractual performance", "Right to damages for breach"]
      }
    ],
    warnings: [
      "Keep careful track of statutory limitation periods (e.g. 2 years from date of cause of action for consumer complaints).",
      "Do not send original documents to customer service; provide only certified photocopies or digital PDFs."
    ],
    whenToSeekProfessionalHelp: "If the claim value is high or the opposite party denies all contractual liability, consider seeking advice from an advocate or taking assistance from the District Legal Services Authority.",
    authoritiesToApproach: [
      { name: "National Consumer Helpline", type: "Ministry of Consumer Affairs", contact: "1915", portal: "consumerhelpline.gov.in" },
      { name: "e-Daakhil Portal", type: "Consumer Commission E-Filing", portal: "edaakhil.nic.in" },
      { name: "National Legal Services Authority", type: "Free Legal Assistance", contact: "15100", portal: "nalsa.gov.in" }
    ],
    source: "STATUTORY_INDEX"
  };
}
