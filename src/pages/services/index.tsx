import { useRouter } from 'next/navigation';

const Service = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.replace('/');
  }
  return null;
};

export default Service;
