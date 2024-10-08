export interface CardProps {
  title: string;
  description: string;
  technologies: string[];
}

export type FavouritesType = {
  data: string[];
};

export type TechnologiesType = {
  techcologies: string[];
};

export type ServiceDetailType = {
  data: {
    title?: string;
    description?: string;
    buttonTitle?: string;
  }[];
};

export type CardType = {
  cards: {
    title: string;
    points: string[];
  }[];
};
