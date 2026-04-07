export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: 'conversation' | 'pronunciation' | 'schedule' | 'materials';
  image: string;
  details: string;
  highlights: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}
