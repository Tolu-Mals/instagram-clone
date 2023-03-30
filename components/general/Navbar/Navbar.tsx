import React from "react";
import {
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
import { LayoutContainer } from "@/components/general";
import {
  desktopNavLinkConfigs,
  mobileNavConfigs,
  bottomNavConfigs,
} from "./data";
import { Nav, MobileNav, Wrapper, BottomNav } from "./styles";

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

const renderNavLink = ({
  key,
  href,
  imgSrc,
  imgAlt,
  size = 22,
}: NavLinkConfig) => {
  return (
    <Link as={NextLink} href={href} key={key}>
      <Image src={imgSrc} alt={imgAlt} width={size} height={size} />
    </Link>
  );
};

const navLinks = desktopNavLinkConfigs.map(renderNavLink);
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

const desktopNavLinkGroup = (
  <Nav>
    {navLinks}
    {navProfileLink}
  </Nav>
);

const mobileNavLinks = mobileNavConfigs.map(renderNavLink);
const mobileNavLinkGroup = <MobileNav>{mobileNavLinks}</MobileNav>;

const bottomNavLinks = bottomNavConfigs.map(renderNavLink);
const bottomNav = (
  <BottomNav>
    {bottomNavLinks}
    {navProfileLink}
  </BottomNav>
);

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
            paddingX: { base: "16px", lg: "0" },
          }}
        >
          {/* Shows on desktop and mobile */}
          {brand}

          {/* Shows on desktop only */}
          {searchBar}
          {desktopNavLinkGroup}

          {/* Shows on mobile only */}
          {mobileNavLinkGroup}
          {bottomNav}
        </Box>
      </LayoutContainer>
    </Wrapper>
  );
};
