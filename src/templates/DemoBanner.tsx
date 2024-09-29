import Link from 'next/link';

import { StickyBanner } from '@/features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    Get Your Shopify Store Started 🚀 Free Consultation -{' '}
    <Link href="/sign-up"> Book Now!</Link>
  </StickyBanner>
);
