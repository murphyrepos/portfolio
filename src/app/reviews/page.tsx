import type { Metadata } from 'next';
import ReviewsHeroSection from './_ui/ReviewsHeroSection';
import ReviewsStatsSection from './_ui/ReviewsStatsSection';
import ReviewsGridSection from './_ui/ReviewsGridSection';
import ReviewsCtaSection from './_ui/ReviewsCtaSection';
import { getServerTranslation } from '@/i18n/server';
import { createPageMetadata, type PageMeta } from '@/utils/seo';

const reviewsMeta = getServerTranslation<PageMeta>('reviewsPage.meta');

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
