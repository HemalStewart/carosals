import Image from "next/image";
import Link from 'next/link';
import { SimpleCarousel } from "../components/SimpleCarousel";
import { FadeCarousel } from '../components/FadeCarousel';
import { ThumbsCarousel } from '../components/ThumbsCarousel';
import { CubeCarousel } from '../components/CubeCarousel';
import { AutoplayCarousel } from '../components/AutoplayCarousel';
import { CardsCarousel } from '../components/CardsCarousel';
import { CoverflowCarousel } from '../components/CoverflowCarousel';
import { FlipCarousel } from '../components/FlipCarousel';

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-100 dark:bg-zinc-900">
      <main className="flex flex-col gap-12 row-start-2 w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-gray-50">
          Swiper JS Carousels
        </h1>
        
        <div className="flex justify-center mt-8">
          <Link href="/animation-carousel" passHref>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors">
              Go to Animated Carousel
            </button>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/circle-carousel" passHref>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors">
              Go to Circle Carousel
            </button>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/card-stack-carousel" passHref>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors">
              Go to Card Stack Carousel
            </button>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/animated-card-stack" passHref>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors">
              Go to Card Stack Website
            </button>
          </Link>
        </div>
        
        <SimpleCarousel />
        <FadeCarousel />
        <ThumbsCarousel />
        <CubeCarousel />
        <AutoplayCarousel />
        <CoverflowCarousel />
        <FlipCarousel />
        <CardsCarousel /> 
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Your existing footer content can go here */}
      </footer>
    </div>
  );
}