import React from "react";
import {
  chakra,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { Search2Icon } from "@chakra-ui/icons";
import { NavLinkConfig } from "./types";
import { LayoutContainer } from "@/components/common";

const Wrapper = chakra("div", {
  baseStyle: {
    borderBottom: "1px solid var(--chakra-colors-gray-400)",
    height: "53px",
  },
});

const Nav = chakra("nav", {
  baseStyle: {
    display: { base: "none", md: "flex" },
    gap: "22px",
  },
});

const MobileNav = chakra("nav", {
  baseStyle: {
    display: { base: "flex", md: "none" },
    gap: "22px",
  },
});

const brand = (
  <Link as={NextLink} href="/" display="block">
    <Image src="/assets/logo.png" alt="logo" width={103} height={29} priority />
  </Link>
);

const searchBar = (
  <InputGroup size="sm" maxWidth="215px" display={{ base: "none", md: "flex" }}>
    <InputLeftElement pointerEvents="none">
      <Search2Icon color="gray.300" />
    </InputLeftElement>
    <Input
      type="text"
      placeholder="Search"
      variant="outline"
      borderColor="gray.300"
      _focus={{ outline: "none", boxShadow: "none", borderColor: "gray.500" }}
      borderRadius="4px"
    />
  </InputGroup>
);

const navLinkConfigs: NavLinkConfig[] = [
  {
    key: 0,
    href: "/",
    imgSrc: "/assets/icons/Home.svg",
    imgAlt: "Home icon",
  },
  {
    key: 1,
    href: "/",
    imgSrc: "/assets/icons/Messenger.svg",
    imgAlt: "Messenger icon",
  },
  {
    key: 2,
    href: "/",
    imgSrc: "/assets/icons/NewPosts.svg",
    imgAlt: "New post icon",
  },
  {
    key: 3,
    href: "/",
    imgSrc: "/assets/icons/FindPeople.svg",
    imgAlt: "Explore icon",
  },
  {
    key: 4,
    href: "/",
    imgSrc: "/assets/icons/ActivityFeed.svg",
    imgAlt: "Activity feed icon",
  },
];

const renderNavLink = ({ key, href, imgSrc, imgAlt }: NavLinkConfig) => {
  return (
    <Link as={NextLink} href={href} key={key}>
      <Image src={imgSrc} alt={imgAlt} width={22} height={22} />
    </Link>
  );
};

const navLinks = navLinkConfigs.map(renderNavLink);
const navProfileLink = (
  <Link
    as={NextLink}
    href="/profile"
    sx={{
      img: {
        borderRadius: "50%",
      },
    }}
  >
    <Image
      src="/assets/images/User1.png"
      alt="Profile picture"
      width={24}
      height={24}
    />
  </Link>
);

const navLinkGroup = (
  <Nav>
    {navLinks}
    {navProfileLink}
  </Nav>
);

const mobileNavConfigs = [
  {
    key: 1,
    href: "/",
    imgSrc: "/assets/icons/NewPosts.svg",
    imgAlt: "New post icon",
  },
  {
    key: 2,
    href: "/",
    imgSrc: "/assets/icons/ActivityFeed.svg",
    imgAlt: "Activity feed icon",
  },
];

const mobileLinks = mobileNavConfigs.map(renderNavLink);
const mobileNavLinkGroup = <MobileNav>{mobileLinks}</MobileNav>;

export const Navbar = () => {
  return (
    <Wrapper>
      <LayoutContainer height="100%">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Shows on desktop and mobile */}
          {brand}

          {/* Shows on desktop only */}
          {searchBar}
          {navLinkGroup}

          {/* Shows on mobile only */}
          {mobileNavLinkGroup}
        </Box>
      </LayoutContainer>
    </Wrapper>
  );
};
