import React from "react";
import {
  chakra,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { Search2Icon } from "@chakra-ui/icons";
import { NavLinkConfig } from "./types";

const NavWrapper = chakra("nav", {
  baseStyle: {
    display: "flex",
  },
});

const brand = (
  <Link as={NextLink} href="/">
    <Image src="/assets/logo.png" alt="logo" width={103} height={29} />
  </Link>
);

const searchBar = (
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <Search2Icon color="gray.300" />
    </InputLeftElement>
    <Input
      type="tel"
      placeholder="Phone number"
      variant="outline"
      borderColor="gray.400"
    />
  </InputGroup>
);

const renderNavLink = ({ href, imgSrc, imgAlt }: NavLinkConfig) => {
  return (
    <Link as={NextLink} href="/">
      <Image src="" alt="Home icon" width={22} height={22} />
    </Link>
  );
};

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
    imgSrc: "/assets/icons/Home.svg",
    imgAlt: "Home icon",
  },
  {
    key: 2,
    href: "/",
    imgSrc: "/assets/icons/Home.svg",
    imgAlt: "Home icon",
  },
  {
    key: 3,
    href: "/",
    imgSrc: "/assets/icons/Home.svg",
    imgAlt: "Home icon",
  },
  {
    key: 4,
    href: "/",
    imgSrc: "/assets/icons/Home.svg",
    imgAlt: "Home icon",
  },
  {
    key: 5,
    href: "/",
    imgSrc: "/assets/icons/Home.svg",
    imgAlt: "Home icon",
  },
];

const navLinkGroup = <Flex></Flex>;

const Navbar = () => {
  return (
    <NavWrapper>
      {brand}
      {searchBar}
      {navLinkGroup}
    </NavWrapper>
  );
};

export default Navbar;
