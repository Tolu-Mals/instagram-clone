import React from "react";
import { chakra, Flex } from "@chakra-ui/react";
import Item from "./Item";

const Wrapper = chakra(Flex, {
  baseStyle: {},
});

export const StoryList = () => {
  return (
    <Wrapper>
      <Item />
    </Wrapper>
  );
};
