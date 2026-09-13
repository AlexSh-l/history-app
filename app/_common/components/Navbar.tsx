import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const pageLinks = [
    {
      name: "Articles",
      link: "/articles",
    },
  ];

  return (
    <div className="z-1 fixed top-0 px-7 py-8 flex items-center justify-center w-full bg-black/40">
      <div className="px-7 flex items-center justify-between w-full max-w-7xl text-xs text-white font-roboto-flex font-normal">
        <Link href="/">Home</Link>
        <div>
          {pageLinks.map((item, i) => (
            <Link href={item.link} key={`Page-Link_${i}`}>
              {item.name}
            </Link>
          ))}
        </div>
        <LanguageSwitcher></LanguageSwitcher>
      </div>
    </div>
  );
}
