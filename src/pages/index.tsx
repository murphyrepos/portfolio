import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Services from '@/components/services';
import WorkFlow from '@/components/work-flow';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import { PRODUCTION_URL } from '@/utils/helper';

export default function Home() {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: 'Murphy Repos - Your Trusted Tech Partner',
          description:
            'Discover innovative web and mobile development solutions at Murphy Repos. We specialize in MERN and React Native for seamless digital experiences.',
          canonical: PRODUCTION_URL,
          openGraph: {
            url: PRODUCTION_URL,
            type: 'article',
            title: 'Murphy Repos - Your Trusted Tech Partner',
            description:
              'Discover innovative web and mobile development solutions at Murphy Repos. We specialize in MERN and React Native for seamless digital experiences.',
            // images: [
            //   {
            //     url:
            //       result?.images?.[0] ??
            //       '/assets/default_image_polls.png' ??
            //       result.user.profile.picture ??
            //       '',
            //     alt: result.user.profile.username,
            //     width: 1200,
            //     height: 630,
            //   },
            // ],
            siteName: 'Murphy Repos',
          },
          // twitter={{
          //   // handle: result.user.profile.username,
          //   site: result.user.profile.username,
          //   cardType: 'summary_large_image',
          // }}
          additionalMetaTags: [
            {
              name: 'keywords',
              content:
                'web development, mobile development, MERN, React Native, cloud solutions, UI/UX, custom software',
            },
          ],
        })}
      </Head>
      <div>
        <HeroSection />
        <Services />
        <WorkFlow />
        <Footer />
      </div>
    </>
  );
}
