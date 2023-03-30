import React from "react";
import Item from "./Item";
import { chakra } from "@chakra-ui/react";

const Wrapper = chakra("section", {
  baseStyle: {},
});

export const PostList = () => {
  return (
    <Wrapper>
      <Item />
    </Wrapper>
  );
};
