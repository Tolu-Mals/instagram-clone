import { NavLinkConfig } from "./types";

export const desktopNavLinkConfigs: NavLinkConfig[] = [
  {
    key: 0,
    href: "/",
    imgSrc: "/assets/icons/Home.svg",
    imgAlt: "Home icon",
  },
  {
    key: 1,
    href: "/messages",
    imgSrc: "/assets/icons/Messenger.svg",
    imgAlt: "Messenger icon",
  },
  {
    key: 2,
    href: "/create-post",
    imgSrc: "/assets/icons/NewPosts.svg",
    imgAlt: "New post icon",
  },
  {
    key: 3,
    href: "/explore",
    imgSrc: "/assets/icons/FindPeople.svg",
    imgAlt: "Explore icon",
  },
  {
    key: 4,
    href: "/activity",
    imgSrc: "/assets/icons/ActivityFeed.svg",
    imgAlt: "Activity feed icon",
  },
];

export const mobileNavConfigs = [
  {
    key: 1,
    href: "/create-post",
    imgSrc: "/assets/icons/NewPosts.svg",
    imgAlt: "New post icon",
  },
  {
    key: 2,
    href: "/activity",
    imgSrc: "/assets/icons/ActivityFeed.svg",
    imgAlt: "Activity feed icon",
  },
];

export const bottomNavConfigs = [
  {
    key: 1,
    href: "/",
    imgSrc: "/assets/icons/Home.svg",
    imgAlt: "Home icon",
    size: 24,
  },
  {
    key: 2,
    href: "/search",
    imgSrc: "/assets/icons/Search.svg",
    imgAlt: "Search icon",
    size: 24,
  },
  {
    key: 3,
    href: "/reels",
    imgSrc: "/assets/icons/Reels.svg",
    imgAlt: "Reels icon",
    size: 24,
  },
  {
    key: 4,
    href: "/messages",
    imgSrc: "/assets/icons/Messenger.svg",
    imgAlt: "Messenger icon",
    size: 24,
  },
];