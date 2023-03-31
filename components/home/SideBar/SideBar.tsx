import React from "react";
import { chakra, Flex, VStack, Text, Box, Button } from "@chakra-ui/react";
import Image from "next/image";

const Top = chakra(Flex, {
  baseStyle: {
    paddingY: "8px",
    justifyContent: "space-between",
    alignItems: "center",
    img: {
      borderRadius: "50%",
      marginRight: "1.3rem",
    },
  },
});

const Wrapper = chakra("aside", {
  baseStyle: {
    paddingY: "8px",
    width: "100%",
  },
});

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

export const SideBar = () => {
  return <Wrapper>{top}</Wrapper>;
};
