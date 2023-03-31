import React from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
import { Top, Wrapper, Suggestions } from "./styles";

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

const suggestionConfigs = [
  {
    key: 4,
    imgSrc: "/assets/images/User5.png",
    imgAlt: "Image of person",
    userName: "ednamanz",
    followedBy: "Followed by terylucas + 2 more",
  },
  {
    key: 5,
    imgSrc: "/assets/images/User6.png",
    imgAlt: "Image of person",
    userName: "christinaste",
    followedBy: "Followed by terylucas + 2 more",
  },
  {
    key: 6,
    imgSrc: "/assets/images/User7.png",
    imgAlt: "Image of person",
    userName: "johnschmit",
    followedBy: "Followed by terylucas + 2 more",
  },
  {
    key: 7,
    imgSrc: "/assets/images/User8.png",
    imgAlt: "Image of person",
    userName: "amyporte",
    followedBy: "Followed by terylucas + 2 more",
  },
  {
    key: 8,
    imgSrc: "/assets/images/User9.png",
    imgAlt: "Image of person",
    userName: "joeburton",
    followedBy: "Followed by terylucas + 2 more",
  },
];

interface SuggestionItem {
  key: number;
  imgSrc: string;
  imgAlt: string;
  userName: string;
  followedBy: string;
}

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

export const SideBar = () => {
  return (
    <Wrapper>
      {top}
      {suggestions}
    </Wrapper>
  );
};
