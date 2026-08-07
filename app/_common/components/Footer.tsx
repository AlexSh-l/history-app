import Link from 'next/link';

import FacebookIcon from '../icons/footer/FacebookIcon';
import InstagramIcon from '../icons/footer/InstagramIcon';
import TelegramIcon from '../icons/footer/TelegramIcon';
import TiktokIcon from '../icons/footer/TiktokIcon';
import TwitterIcon from '../icons/footer/TwitterIcon';
import VKIcon from '../icons/footer/VKIcon';
import YouTubeIcon from '../icons/footer/YouTubeIcon';
import { ESocialLinkTypes } from '../types/dataTypes';
import LanguageSwitcher from './LanguageSwitcher';

VKIcon;
enum ELinkTypes {
  LOGO,
  REGULAR,
  AD,
}

export default function Footer() {
  const links = [
    {
      type: ELinkTypes.LOGO,
      name: "History",
      link: "/",
    },
    {
      type: ELinkTypes.REGULAR,
      name: "О проекте",
      link: "/",
    },
    {
      type: ELinkTypes.REGULAR,
      name: "Обратная связь",
      link: "/",
    },
    {
      type: ELinkTypes.AD,
      name: "Реклама:",
      content: [
        {
          email: "ads@historyhub.news",
          link: "mailto:ads@historyhub.news",
        },
      ],
    },
  ];

  const socials = [
    {
      type: ESocialLinkTypes.VK,
      link: "/",
      component: VKIcon,
    },
    {
      type: ESocialLinkTypes.FACEBOOK,
      link: "/",
      component: FacebookIcon,
    },
    {
      type: ESocialLinkTypes.INSTAGRAM,
      link: "/",
      component: InstagramIcon,
    },
    {
      type: ESocialLinkTypes.YOUTUBE,
      link: "/",
      component: YouTubeIcon,
    },
    {
      type: ESocialLinkTypes.TELEGRAM,
      link: "/",
      component: TelegramIcon,
    },
    {
      type: ESocialLinkTypes.TIKTOK,
      link: "/",
      component: TiktokIcon,
    },
    {
      type: ESocialLinkTypes.TWITTER,
      link: "/",
      component: TwitterIcon,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 bg-[#F01B0D] pt-8 pb-6 px-9 text-white">
      <div className="w-full max-w-7xl flex flex-row items-center justify-between">
        {links.map((item, i) => (
          <Link href={item.link ?? "/"} key={`Footer-Link_${i}`}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="w-full max-w-7xl flex flex-row items-center justify-between">
        {socials.map((social, j) => (
          <a href={social.link} key={`Footer-Social-Link_${j}`}>
            {social.type as string}
          </a>
        ))}
      </div>
    </div>
  );
}
