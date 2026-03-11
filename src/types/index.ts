export interface Stat {
  value: string;
  label: string;
  source: string;
}

export interface ProgramItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Ticket {
  type: string;
  icon: string;
  price: string;
  features: string[];
  url: string;
  highlight: boolean;
}

export interface FaqItem {
  q: string;
  r: string;
}

export interface CountUpProps {
  target: string;
  suffix?: string;
}
