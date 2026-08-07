import Image from 'next/image';

import MainBanner from './_components/MainBanner';

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white">
        <MainBanner></MainBanner>
      </main>
    </div>
  );
}
