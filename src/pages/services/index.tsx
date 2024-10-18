import { GetServerSideProps } from 'next';
import { useRouter } from 'next/navigation';

const Service = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.replace('/');
  }
  return null;
};

export default Service;

export const getServerSideProps: GetServerSideProps = async () => {
  return new Promise((resolve) => {
    try {
      resolve({
        redirect: {
          destination: '/services/web-development',
          permanent: true,
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      resolve({
        notFound: true,
      });
    }
  });
};
