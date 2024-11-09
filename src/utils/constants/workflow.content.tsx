import { IconProps } from '@/components/type';
import {
  BrainCog,
  ChartCandlestick,
  MonitorCog,
  ShieldCheck,
} from 'lucide-react';

interface WorkFlow {
  title: string;
  description: string;
  Icon: React.FC<IconProps>;
}
export const workflow: WorkFlow[] = [
  {
    title: 'Assessment',
    description:
      "We begin by thoroughly understanding the client's goals and challenges to ensure we create a tailored solution that meets their needs.",
    Icon: ({ ...props }) => <ChartCandlestick {...props} />,
  },
  {
    title: 'Development',
    description:
      'Once we understand the requirements, we design, code, and iteratively develop the software, making adjustments based on feedback.',
    Icon: ({ ...props }) => <BrainCog {...props} />,
  },
  {
    title: 'Quality Assurance',
    description:
      'We prioritize quality by conducting rigorous testing to ensure the software is reliable, compatible, and meets all functional requirements.',
    Icon: ({ ...props }) => <ShieldCheck {...props} />,
  },
  {
    title: 'Maintenance',
    description:
      'After deployment, we provide ongoing support, maintenance, and updates to maintain a strong relationship and address any concerns.',
    Icon: ({ ...props }) => <MonitorCog {...props} />,
  },
];
