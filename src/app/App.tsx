import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { VideoShowcase } from './components/VideoShowcase';
import { ProductHighlights } from './components/ProductHighlights';
import { BrandStory } from './components/BrandStory';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { PreOrderModal } from './components/PreOrderModal';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { StoreLocatorModal } from './components/StoreLocatorModal';
import { FAQModal } from './components/FAQModal';

export default function App() {
  const [preOrderOpen, setPreOrderOpen] = useState(false);
  const [preOrderFlavorIdx, setPreOrderFlavorIdx] = useState(3); // Default to Cactus Jack (index 3)

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [detailsFlavorIdx, setDetailsFlavorIdx] = useState(0);

  const [storeLocatorOpen, setStoreLocatorOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [faqTab, setFaqTab] = useState<'faq' | 'support' | 'legal'>('faq');

  const handleOpenPreOrder = (flavorIdx: number = 3) => {
    setPreOrderFlavorIdx(flavorIdx);
    setPreOrderOpen(true);
  };

  const handleOpenDetails = (flavorIdx: number) => {
    setDetailsFlavorIdx(flavorIdx);
    setDetailsOpen(true);
  };

  const handleOpenStoreLocator = () => {
    setStoreLocatorOpen(true);
  };

  const handleOpenFaq = (tab: 'faq' | 'support' | 'legal' = 'faq') => {
    setFaqTab(tab);
    setFaqOpen(true);
  };

  return (
    <div className="relative bg-black text-white min-h-screen selection:bg-orange-500 selection:text-white">
      {/* Hero Section with Navigation and Sneaker Switcher */}
      <Hero
        onOpenPreOrder={handleOpenPreOrder}
        onOpenStoreLocator={handleOpenStoreLocator}
        onOpenFaq={() => handleOpenFaq('faq')}
      />

      {/* Experience The Power Showcase */}
      <VideoShowcase onOpenPreOrder={() => handleOpenPreOrder(preOrderFlavorIdx)} />

      {/* Product Highlights & 5 Colorway Switcher */}
      <ProductHighlights
        onOpenPreOrder={handleOpenPreOrder}
        onOpenDetails={handleOpenDetails}
      />

      {/* Brand & Creative Direction Story */}
      <BrandStory />

      {/* Pre-order Call To Action & Functional Newsletter */}
      <CallToAction
        onOpenPreOrder={() => handleOpenPreOrder(preOrderFlavorIdx)}
        onOpenStoreLocator={handleOpenStoreLocator}
      />

      {/* Fully Functional Footer */}
      <Footer
        onOpenStoreLocator={handleOpenStoreLocator}
        onOpenFaq={handleOpenFaq}
      />

      {/* Pre-Order Modal */}
      <PreOrderModal
        isOpen={preOrderOpen}
        onClose={() => setPreOrderOpen(false)}
        initialFlavorIndex={preOrderFlavorIdx}
      />

      {/* Product Details Modal */}
      <ProductDetailsModal
        isOpen={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        flavorIndex={detailsFlavorIdx}
        onOpenPreOrder={handleOpenPreOrder}
      />

      {/* Store Locator Modal */}
      <StoreLocatorModal
        isOpen={storeLocatorOpen}
        onClose={() => setStoreLocatorOpen(false)}
      />

      {/* FAQ, Contact & Legal Modal */}
      <FAQModal
        isOpen={faqOpen}
        onClose={() => setFaqOpen(false)}
        defaultTab={faqTab}
      />
    </div>
  );
}
