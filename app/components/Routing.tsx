'use client';

import { useRouter, usePathname } from 'next/navigation';

import { pages } from '../lib/projects';

export default function Routing() {
  const router = useRouter();
  const pathname = usePathname(); // Automatically updates on route change

  const currentIndex = pages.indexOf(pathname);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
    router.push(pages[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % pages.length;
    router.push(pages[nextIndex]);
  };

  return (
    <div className="pt-[10vw] md:pt-[5vw]">
    <div className="text-sm text-gray-500">Page {String(currentIndex + 1).padStart(2, '0')}</div>
      <button onClick={handlePrev}>Prev</button> / 
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
