'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log(
      '%cWhat you looking at? 👀 HMM?',
      'background: #ce2e6c; color: #ffffff; padding: 2px 5px; font-weight: bold;'
    );
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-violet-50 font-bold">
      <div className="text-violet-700">
        Hi,
        <p>I am Jeremiah : )</p>
        <p className="max-w-sm mt-4 text-xs pl-4 border-l-4 border-l-purple-200">
          For what shall it profit a man,
          <br />
          if he shall gain the whole world, <br />
          and lose his own soul?
          <br /> Or what shall a man give in exchange for his soul?
        </p>
      </div>
    </main>
  );
}
