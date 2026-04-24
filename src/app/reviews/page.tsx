import type { Metadata } from 'next';
import ReviewsHeroSection from './_ui/ReviewsHeroSection';
import ReviewsStatsSection from './_ui/ReviewsStatsSection';
import ReviewsGridSection from './_ui/ReviewsGridSection';
import ReviewsCtaSection from './_ui/ReviewsCtaSection';
import common from '@/locales/en/common.json';
import { createPageMetadata } from '@/utils/seo';

const reviewsMeta = common.reviewsPage.meta;

export const metadata: Metadata = createPageMetadata('/reviews', reviewsMeta);

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
