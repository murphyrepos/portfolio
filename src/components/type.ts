interface StringArrayData {
  data: string[];
}
export interface ExtendedNavigator extends Navigator {
  customProperty?: string;
}

export interface DataContainer {
  data: StringArrayData;
}

export interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  role: string;
}

export interface ServiceDetailType {
  data: {
    title: string;
    description: string;
    buttonTitle: string;
  };
}

export interface CardType {
  cards: Array<{
    title: string;
    points: StringArrayData;
  }>;
}
