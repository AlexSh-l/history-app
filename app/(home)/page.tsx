import Image from 'next/image';

import Navbar from '../_common/components/Navbar';
import MainBanner from './_components/MainBanner';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white">
        <Navbar></Navbar>
        <MainBanner></MainBanner>
      </main>
    </div>
  );
}
