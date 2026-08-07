export type TSuggestedItemData = {
  id: number;
  slug: string;
  category: string;
  region: string;
  title: {
    be: string;
    ru: string;
    en: string;
    [key: string]: string;
  };
  excerpt: {
    be: string;
    ru: string;
    en: string;
    [key: string]: string;
  };
  content: {
    be: string;
    ru: string;
    en: string;
    [key: string]: string;
  };
};

export enum ESocialLinkTypes {
  VK = "VK",
  FACEBOOK = "FaceBook",
  INSTAGRAM = "Instagram",
  YOUTUBE = "YouTube",
  TELEGRAM = "Telegram",
  TIKTOK = "Tiktok",
  TWITTER = "Twitter",
}
