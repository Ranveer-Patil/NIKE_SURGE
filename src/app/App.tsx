import { Hero } from './components/Hero';
import { ProductHighlights } from './components/ProductHighlights';
import { BrandStory } from './components/BrandStory';
import { VideoShowcase } from './components/VideoShowcase';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <Hero />
      <VideoShowcase />
      <ProductHighlights />
      <BrandStory />
      <CallToAction />
      <Footer />
    </div>
  );
}