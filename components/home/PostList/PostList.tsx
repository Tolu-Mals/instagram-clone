import React from "react";
import { chakra, Flex, Text } from "@chakra-ui/react";
import { ProfileWithStatus } from "@/components/general";

const Wrapper = chakra("section", {
  baseStyle: {
    /* 
    This is to account for the absolute positioning
    used on StoryList on mobile
    */
    paddingTop: "105.5px",
  },
});

const Card = chakra("article", {
  baseStyle: {},
});

const CardTop = chakra(Flex, {
  baseStyle: {
    justifyContent: "space-between",
    gap: "14px",
  },
});

const Item = () => {
  return (
    <Card>
      <CardTop>
        <ProfileWithStatus imgSrc="/assets/images/User1.png" size={42} />
        <Text>terrylucas</Text>
      </CardTop>
    </Card>
  );
};

export const PostList = () => {
  return (
    <Wrapper>
      <Item />
    </Wrapper>
  );
};
