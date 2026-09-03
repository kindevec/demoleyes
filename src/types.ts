export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  services: string[];
  tag: string;
  leadPartner: string;
  leadPartnerRole: string;
  typicalCases: string[];
  keyBenefits: string[];
  turnaroundTime: string;
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
  publications?: string[];
  notableWins?: string[];
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
  strategyApplied: string;
  image: string;
}

export interface Testimonial {
  id: string;
  clientType: string;
  industry: string;
  quote: string;
  authorTitle: string;
  statusVerified: boolean;
  confidentialId: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  category: 'Honorarios' | 'Confidencialidad' | 'Urgencias' | 'Internacional' | 'Procesal';
  question: string;
  answer: string;
}

export interface FeeModel {
  id: string;
  name: string;
  badge: string;
  description: string;
  idealFor: string;
  billingFrequency: string;
  features: string[];
  estimatedRange: string;
}
