import MaterialSlider from '@/components/MaterialSlider';
import SlicerCarousel from '@/components/SlicerCarousel';
import ExpoSliderPremium from '@/components/ExpoSliderPremium';
import TripleSlider from '../../components/TripleSlider';

const slidesData = [
  { image: '/images/Poster1.jpg', title: 'Confidence', text: 'Confidence is the best outfit. Wear it and own it!' },
  { image: '/images/Poster2.jpg', title: 'Glow', text: 'Glow differently. Shine unapologetically.' },
  { image: '/images/Poster3.jpg', title: 'Elegance', text: 'Elegance is an attitude.' },
  { image: '/images/Poster4.jpg', title: 'Fearless', text: 'Fearless. Limitless. Unstoppable.' },
  { image: '/images/Poster5.jpg', title: 'Vibe', text: 'Your vibe attracts your tribe.' },
  { image: '/images/Poster6.jpg', title: 'Style', text: 'Style is a way to say who you are without speaking.' },
  { image: '/images/Poster7.jpg', title: 'Be You', text: 'Be bold, be brilliant, be you.' },
];

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* <MaterialSlider /> */}
      {/* <SlicerCarousel slides={slidesData} /> */}
      {/* <ExpoSliderPremium slides={slidesData} /> */}
      <TripleSlider />
    </main>
  );
}
