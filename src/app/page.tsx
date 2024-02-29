'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import memoryPic from './memory.webp';

export default function Home() {
  const [isDead, setIsDead] = useState<boolean>(false);

  useEffect(() => {
    console.log(
      '%cWhat you looking at? 👀 HMM?',
      'background: #ce2e6c; color: #ffffff; padding: 2px 5px; font-weight: bold;'
    );
  }, []);

  const debouncedInput = useDebouncedCallback(() => {
    setIsDead(true);
  }, 4000);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hi,
        <p>
          I am Jeremiah : )
          <br />I build things I guess.
          <br />
          <br />
          and you are?
        </p>
        {isDead ? (
          <p className="mt-5 line-through italic text-purple-500">
            You are dead 💀
            <br />I am in your walls!
          </p>
        ) : (
          <input
            type="text"
            placeholder="trust me, type your name"
            className="bg-transparent border-b border-slate-400 mt-2 focus:outline-none px-2 py-1 placeholder:opacity-0 focus:placeholder:opacity-100"
            onChange={debouncedInput}
          />
        )}
      </div>
    </main>
  );
}
