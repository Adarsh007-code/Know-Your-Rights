export interface FirstStep {
  stepNumber: string;
  title: string;
  description: string;
  actionItem?: string;
  urgent?: boolean;
}

export interface EvidenceItem {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  required?: boolean;
}

export interface RelevantLaw {
  actName: string;
  provision: string;
  shortExplanation: string;
  officialRecourse: string;
  status: "Statutory Reference" | "Verification Recommended";
  keyRights: string[];
}

export interface AuthorityHelp {
  name: string;
  type: string;
  contact?: string;
  portal?: string;
  jurisdiction?: string;
}

export interface CaseAnalysisData {
  caseId: string;
  timestamp: string;
  problemText: string;
  location: string;
  category: string;
  dateOccurred: string;
  situationSummary: string;
  possibleLegalAreas: string[];
  firstSteps: FirstStep[];
  evidenceToPreserve: EvidenceItem[];
  relevantLaws: RelevantLaw[];
  warnings: string[];
  whenToSeekProfessionalHelp: string;
  authoritiesToApproach: AuthorityHelp[];
  source: "AI_ANALYSIS" | "STATUTORY_INDEX";
}

export interface LawIndexItem {
  id: string;
  category: string;
  actTitle: string;
  enactedYear: string;
  relevantProvision: string;
  title: string;
  shortExplanation: string;
  keyRights: string[];
  officialRecourse: string;
  source: string;
  verificationStatus: "Verified Statutory Provision" | "Constitutional Right" | "Procedural Guideline";
}

export interface QuickTopic {
  number: string;
  title: string;
  description: string;
  category: string;
  examplePrompt: string;
  commonStatute: string;
}
