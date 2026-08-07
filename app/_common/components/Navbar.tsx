import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const pageLinks = [
    {
      name: "Articles",
      link: "/articles",
    },
  ];

  return (
    <div className="z-1 fixed top-8 px-7 flex items-center justify-between w-full max-w-7xl text-xs text-white font-roboto-flex font-normal">
      <Link href="/">Home</Link>
      <div>
        {pageLinks.map((item, i) => (
          <Link href={item.link} key={`Page-Link_${i}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
