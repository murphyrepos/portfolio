import { StaticImageData } from 'next/image';
import image1 from '../../../public/images/cure-for-u.png';
import image2 from '../../../public/images/maahdha-4.png';
import image3 from '../../../public/images/nala-prep.png';
import image4 from '../../../public/images/restaurant-app.png';
import image5 from '../../../public/images/strike-crypto.png';

export interface Detail {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  image: StaticImageData;
  isMobile?: boolean;
}
export const details: Detail[] = [
  {
    title: 'Cureforu',
    description:
      'A mobile platform designed to enable health workers to share and discuss rare medical cases globally. The app provides access to discussions on complex medical issues, educational material, information about upcoming medical events and conferences conducted by the platform and discussion forums for general knowledge sharing.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Android', 'IOS'],
    role: 'Developed cross platform mobile application with real-time notifications for the users targeting both Android and IOS',
    image: image1,
    isMobile: true,
  },
  {
    title: 'Maahdha',
    description:
      'Maahdha is a web platform designed to foster political awareness and public engagement. It provides users with access to the manifestos of various local political parties, up-to-date government news, and information about political leaders and government bodies. The platform also allows the public to participate in polls, share opinions, and track the popularity of political figures.',
    technologies: [
      'NestJS ',
      ' React ',
      'TypeScript ',
      'Postgres DB ',
      'AWS ',
      ' CI/CD',
    ],
    role: 'Developed public facing platform with admin dashboard for the puroduct manager to manage content, creating polls and displaying information to the users.',
    image: image2,
  },
  {
    title: 'Nala Prep',
    description:
      'Nala-Prep is a cutting-edge SAT preparation platform designed to help students achieve top SAT scores by providing over 10,000 high-quality SAT questions. The platform incorporates the best teaching strategies from Korea, China, and the U.S., ensuring students are equipped with the tools and knowledge needed to excel in the newly announced digital SAT format.',
    technologies: [
      'NestJS ',
      ' React ',
      'TypeScript ',
      'Postgres DB ',
      'AWS ',
      ' CI/CD',
    ],
    role: 'Developed and deployed online testing and mentoring system to onboard students and conducting mock test system. Also designed an Learning Management System to administrate the product, student dashbaord for students to track progress and scoring history.',
    image: image3,
  },
  {
    title: 'Savora',
    description:
      'A comprehensive system designed to enhance the dining experience by providing a fully contactless solution for customers and streamlining operations for restaurant staff. Customers can scan a QR code at their table to view the menu, place orders, and make payments, while the system facilitates order management and staff communication.',
    technologies: [
      'NestJS ',
      ' React ',
      'TypeScript ',
      'Postgres DB ',
      'AWS ',
      ' CI/CD',
    ],
    role: 'Developed and deployed end to end platform to be used in the realtime for providing contactless servicing and restaurant management.',
    image: image4,
  },
  {
    title: 'Strike',
    description:
      "Strike is a platform designed for users to seamlessly engage in cryptocurrency transactions. The platform allows users to buy, sell, and withdraw various cryptocurrencies, making it a one-stop solution for managing digital assets. It also offers secure crypto wallets, ensuring safe storage of users' crypto holdings.",
    technologies: [
      'NestJS ',
      ' React ',
      'TypeScript ',
      'Postgres DB ',
      'AWS ',
      ' CI/CD',
    ],
    role: 'Revamped the public facing website for the end user, improving look and feel of overall product and making user expreince seamless.',
    image: image5,
  },
];
