import React from "react";
import { Flex, Text, Button, Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import { Top, Wrapper, Suggestions } from "./styles";
import { suggestionConfigs, linkConfigs } from "./data";
import { LinkType, SuggestionItem } from "./types";
import NextLink from "next/link";

const top = (
  <Top>
    <Flex alignItems="center">
      <Image
        src="/assets/images/User1.png"
        width={56}
        height={56}
        alt="Image of user"
      />
      <Flex gap="4px" flexDirection="column">
        <Text fontWeight={600} fontSize="14px">
          tolumals
        </Text>
        <Text fontSize="14px" color="gray.500">
          Tolu Mals
        </Text>
      </Flex>
    </Flex>

    <Button variant="bare">Switch</Button>
  </Top>
);

const renderSuggestionItem = ({
  key,
  imgSrc,
  imgAlt,
  userName,
  followedBy,
}: SuggestionItem) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      key={key}
      marginBottom="14px"
    >
      <Flex
        alignItems="center"
        sx={{ img: { borderRadius: "50%", marginRight: "14px" } }}
      >
        <Image src={imgSrc} alt={imgAlt} width={32} height={32} />
        <Box>
          <Text fontSize="14px">{userName}</Text>
          <Text fontSize="14px" color="gray.500">
            {followedBy}
          </Text>
        </Box>
      </Flex>
      <Button variant="bare">Follow</Button>
    </Flex>
  );
};

const suggestions = (
  <Suggestions>
    <Flex justifyContent="space-between" alignItems="center" mb="14px">
      <Text fontSize="14px" color="gray.500" fontWeight={600}>
        Suggestions For You
      </Text>
      <Button variant="bare" color="black">
        See All
      </Button>
    </Flex>
    {suggestionConfigs.map(renderSuggestionItem)}
  </Suggestions>
);

const renderFooterLink = ({ key, href, text }: LinkType) => {
  return (
    <Link as={NextLink} href={href} key={key} color="gray.300" fontSize="14px">
      {text}
    </Link>
  );
};
const footerLinks = (
  <Flex flexWrap="wrap" gap="8px">
    {linkConfigs.map(renderFooterLink)}
  </Flex>
);

export const SideBar = () => {
  return (
    <Wrapper>
      {top}
      {suggestions}
      {footerLinks}
    </Wrapper>
  );
};
