export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Scale' | 'ShieldCheck' | 'Briefcase' | 'FileCheck' | 'Landmark' | 'Building2';
  services: string[];
  tag: string;
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  specialty: string;
  education: string[];
  barNumber: string;
  experience: string;
  image: string;
  bio: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  impact: string;
  result: string;
  summary: string;
  year: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  clientType: string;
  industry: string;
  quote: string;
  authorTitle: string;
  statusVerified: boolean;
  confidentialId: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface DiagnosisData {
  caseNature: 'empresa' | 'persona' | 'conflicto';
  urgency: 'inmediata' | 'planificacion' | 'audiencia';
  recommendedSpecialist: string;
  slaResponseTime: string;
  caseRefCode: string;
  estimatedComplexity: string;
}
