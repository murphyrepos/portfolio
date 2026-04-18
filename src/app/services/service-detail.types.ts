export const serviceDetailKeys = [
  'web-development',
  'mobile-development',
  'ui-ux-services',
  'custom-solutions',
] as const;

export type ServiceDetailKey = (typeof serviceDetailKeys)[number];

export interface ServiceDetailCard {
  title: string;
  points: string[];
}

export interface ServiceDetailContent {
  title: string;
  description: string;
  cards: ServiceDetailCard[];
  technologies: string[];
  favorites: string[];
}
