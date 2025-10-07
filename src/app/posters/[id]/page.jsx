'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { use } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const posters = [
  { id: 1, src: '/images/big-poster1.jpg', alt: 'Poster 1', title: 'Epic Adventure', color: '#e74c3c' },
  { id: 2, src: '/images/big-poster2.jpg', alt: 'Poster 2', title: 'Mystic Journey', color: '#3498db' },
  { id: 3, src: '/images/big-poster3.jpg', alt: 'Poster 3', title: 'Dark Future', color: '#9b59b6' },
  { id: 4, src: '/images/big-poster4.jpg', alt: 'Poster 4', title: 'Ocean Deep', color: '#1abc9c' },
  { id: 5, src: '/images/big-poster5.jpg', alt: 'Poster 5', title: 'Golden Hour', color: '#f39c12' },
  { id: 6, src: '/images/big-poster6.jpg', alt: 'Poster 6', title: 'Fire Storm', color: '#e67e22' },
  { id: 7, src: '/images/big-poster7.jpg', alt: 'Poster 7', title: 'Nature Call', color: '#2ecc71' },
  { id: 8, src: '/images/big-poster8.jpg', alt: 'Poster 8', title: 'Cosmic Dust', color: '#34495e' },
  { id: 9, src: '/images/big-poster9.jpg', alt: 'Poster 9', title: 'Neon Night', color: '#f1c40f' },
  { id: 10, src: '/images/big-poster10.jpg', alt: 'Poster 10', title: 'Winter Tale', color: '#ecf0f1' },
  { id: 11, src: '/images/big-poster11.jpg', alt: 'Poster 11', title: 'Desert Rose', color: '#e74c3c' },
  { id: 12, src: '/images/big-poster12.jpg', alt: 'Poster 12', title: 'City Lights', color: '#95a5a6' },
  { id: 13, src: '/images/big-poster13.jpg', alt: 'Poster 13', title: 'Forest Guard', color: '#27ae60' },
  { id: 14, src: '/images/big-poster14.jpg', alt: 'Poster 14', title: 'Space Quest', color: '#c0392b' },
  { id: 15, src: '/images/big-poster15.jpg', alt: 'Poster 15', title: 'Cosmic Dust', color: '#34495e' },
];

export default function PosterPage({ params }) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const isTransition = searchParams.get('transition') === 'true';
  const poster = posters.find((p) => p.id === parseInt(id));

  if (!poster) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Poster not found!
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white p-8">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${poster.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(30px)',
          transition: 'background-image 0.8s ease-in-out, filter 0.8s ease-in-out',
          transform: 'scale(1.05)',
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10" />
  
      <div className="relative z-20 flex flex-col items-center p-8 rounded-lg text-center max-w-lg">
        <motion.div
          className="w-340 h-170 relative rounded-lg overflow-hidden shadow-2xl border border-white/30 mb-8"
          layoutId={`shared-poster-${poster.id}`}
          // initial={false}
          // animate={{ rotateY: 0, scale: 1 }}
          // exit={{ rotateY: 90, scale: 1.5 }}
          transition={{ 
            duration: 0.8, 
            ease: 'easeInOut'
          }}
        >
          <Image src={poster.src} alt={poster.alt} fill className="object-cover" />
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold text-white mb-2"
          initial={isTransition ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: isTransition ? 0.4 : 0 }}
        >
          {poster.title}
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-300"
          initial={isTransition ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: isTransition ? 0.4 : 0 }}
        >
          Detailed information about the poster goes here.
        </motion.p>
      </div>
    </div>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from 'next/navigation';
// import { ArrowLeft, Heart, Share2, Download, ZoomIn, ZoomOut } from 'lucide-react';

// const PosterPage = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isLiked, setIsLiked] = useState(false);
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   // Get poster data from URL parameters
//   const posterId = searchParams.get('id') || '1';
//   const posterSrc = searchParams.get('src') || '/images/poster1.jpg';
//   const posterTitle = searchParams.get('title') || 'Poster';

//   useEffect(() => {
//     // Preload image
//     const img = new Image();
//     img.onload = () => setImageLoaded(true);
//     img.src = posterSrc;
//   }, [posterSrc]);

//   const handleBack = () => {
//     router.back();
//   };

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: posterTitle,
//         text: `Check out this amazing poster: ${posterTitle}`,
//         url: window.location.href
//       });
//     } else {
//       // Fallback - copy to clipboard
//       navigator.clipboard.writeText(window.location.href);
//       // You could show a toast notification here
//     }
//   };

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = posterSrc;
//     link.download = `${posterTitle.toLowerCase().replace(/\s+/g, '-')}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const toggleZoom = () => {
//     setIsZoomed(!isZoomed);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <button
//               onClick={handleBack}
//               className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 rounded-lg hover:bg-gray-100"
//             >
//               <ArrowLeft className="w-5 h-5" />
//               <span className="font-medium">Back</span>
//             </button>
            
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={toggleZoom}
//                 className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 rounded-lg hover:bg-gray-100"
//               >
//                 {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
//               </button>
//               <button
//                 onClick={handleLike}
//                 className={`p-2 transition-colors duration-200 rounded-lg hover:bg-gray-100 ${
//                   isLiked ? 'text-red-500' : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
//               </button>
//               <button
//                 onClick={handleShare}
//                 className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 rounded-lg hover:bg-gray-100"
//               >
//                 <Share2 className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={handleDownload}
//                 className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 rounded-lg hover:bg-gray-100"
//               >
//                 <Download className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="pt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
//             {/* Poster Image */}
//             <div className="lg:col-span-2">
//               <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
//                 {!imageLoaded && (
//                   <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
//                   </div>
//                 )}
//                 <div 
//                   className={`relative overflow-hidden cursor-zoom-${isZoomed ? 'out' : 'in'}`}
//                   onClick={toggleZoom}
//                 >
//                   <img
//                     src={posterSrc}
//                     alt={posterTitle}
//                     className={`w-full h-auto transition-all duration-500 ${
//                       isZoomed ? 'scale-150' : 'scale-100'
//                     } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
//                     onLoad={() => setImageLoaded(true)}
//                   />
//                 </div>
//                 {imageLoaded && (
//                   <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
//                     Click to {isZoomed ? 'zoom out' : 'zoom in'}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Poster Details */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
//                 <div className="space-y-6">
                  
//                   {/* Title */}
//                   <div>
//                     <h1 className="text-3xl font-bold text-gray-900 mb-2">{posterTitle}</h1>
//                     <p className="text-sm text-gray-500">Poster #{posterId}</p>
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     <span className="px-3 py-1.5 bg-cyan-400 text-white rounded-full text-xs font-medium">
//                       Premium Quality
//                     </span>
//                     <span className="px-3 py-1.5 bg-orange-400 text-white rounded-full text-xs font-medium">
//                       New Design
//                     </span>
//                     <span className="px-3 py-1.5 bg-purple-400 text-white rounded-full text-xs font-medium">
//                       Limited Edition
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       This stunning poster features exceptional design and premium quality printing. 
//                       Perfect for decorating your space with style and personality. Each poster is 
//                       carefully crafted to ensure vibrant colors and lasting durability.
//                     </p>
//                   </div>

//                   {/* Specifications */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Format:</span>
//                         <span className="font-medium">Digital Print</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Quality:</span>
//                         <span className="font-medium">High Resolution</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Dimensions:</span>
//                         <span className="font-medium">24" × 36"</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Paper:</span>
//                         <span className="font-medium">Premium Matte</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="space-y-3 pt-4 border-t">
//                     <button className="w-full px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
//                       Add to Collection
//                     </button>
//                     <div className="grid grid-cols-2 gap-3">
//                       <button 
//                         onClick={handleLike}
//                         className={`px-4 py-2 border-2 rounded-full font-medium transition-all duration-300 ${
//                           isLiked 
//                             ? 'border-red-500 text-red-500 bg-red-50' 
//                             : 'border-gray-300 text-gray-700 hover:border-gray-400'
//                         }`}
//                       >
//                         <Heart className={`w-4 h-4 inline mr-2 ${isLiked ? 'fill-current' : ''}`} />
//                         {isLiked ? 'Liked' : 'Like'}
//                       </button>
//                       <button 
//                         onClick={handleShare}
//                         className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors duration-300"
//                       >
//                         <Share2 className="w-4 h-4 inline mr-2" />
//                         Share
//                       </button>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PosterPage;