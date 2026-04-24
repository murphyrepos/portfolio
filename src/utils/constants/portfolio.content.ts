import { StaticImageData } from 'next/image';
import image1 from '../../../public/images/cure-for-u.png';
import image2 from '../../../public/images/maahdha-4.png';
import image3 from '../../../public/images/nala-prep.png';
import image4 from '../../../public/images/restaurant-app.png';
import image5 from '../../../public/images/strike-crypto.png';

export type ProjectKey =
  | 'cureforu'
  | 'maahdhaa'
  | 'nalaPrep'
  | 'savora'
  | 'strike';

export interface Detail {
  key: ProjectKey;
  title: string;
  description?: string;
  technologies?: string[];
  role: string;
  image: StaticImageData;
  tones: {
    surface: string;
    frame: string;
  };
  imageScale?: number;
  isMobile?: boolean;
}
export const details: Detail[] = [
  {
    key: 'cureforu',
    title: 'Cureforu',
    role: 'Developed cross platform mobile application with real-time notifications for the users targeting both Android and IOS',
    image: image1,
    tones: {
      surface: 'bg-[#e8eff8]',
      frame: 'bg-white/95',
    },
    imageScale: 0.95,
    isMobile: true,
  },
  {
    key: 'maahdhaa',
    title: 'Maahdhaa',
    role: 'Developed public facing platform with admin dashboard for the product manager to manage content, creating polls and displaying information to the users.',
    image: image2,
    tones: {
      surface: 'bg-[#f8e9ee]',
      frame: 'bg-white/95',
    },
  },
  {
    key: 'nalaPrep',
    title: 'Nala Prep',
    role: 'Developed and deployed online testing and mentoring system to onboard students and conducting mock test system. Also designed an Learning Management System to administrate the product, student dashbaord for students to track progress and scoring history.',
    image: image3,
    tones: {
      surface: 'bg-[#eee9fb]',
      frame: 'bg-white/95',
    },
  },
  {
    key: 'savora',
    title: 'Savora',
    role: 'Developed and deployed end to end platform to be used in the realtime for providing contactless servicing and restaurant management.',
    image: image4,
    tones: {
      surface: 'bg-[#e8f6ef]',
      frame: 'bg-white/95',
    },
  },
  {
    key: 'strike',
    title: 'Strike',
    role: 'Revamped the public facing website for the end user, improving look and feel of overall product and making user experience seamless.',
    image: image5,
    tones: {
      surface: 'bg-[#fff1e4]',
      frame: 'bg-white/95',
    },
  },
];
