import type { Metadata } from 'next';
import { PRODUCTION_URL } from '@/utils/helper';
import ReviewsHeroSection from './_ui/ReviewsHeroSection';
import ReviewsStatsSection from './_ui/ReviewsStatsSection';
import ReviewsGridSection from './_ui/ReviewsGridSection';
import ReviewsCtaSection from './_ui/ReviewsCtaSection';
import common from '@/locales/en/common.json';

const reviewsMeta = common.reviewsPage.meta;

export const metadata: Metadata = {
  title: reviewsMeta.title,
  description: reviewsMeta.description,
  alternates: {
    canonical: `${PRODUCTION_URL}/reviews`,
  },
  openGraph: {
    title: reviewsMeta.openGraphTitle,
    description: reviewsMeta.description,
    url: `${PRODUCTION_URL}/reviews`,
    siteName: 'Murphy Repos',
    type: 'website',
  },
};

const ReviewsPage = () => {
  return (
    <div>
      <ReviewsHeroSection />
      <ReviewsStatsSection />
      <ReviewsGridSection />
      <ReviewsCtaSection />
    </div>
  );
};

export default ReviewsPage;
