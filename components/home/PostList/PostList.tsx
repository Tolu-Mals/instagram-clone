import React from "react";
import Item from "./Item";
import { chakra } from "@chakra-ui/react";
import { ItemProps } from "./types";

const Wrapper = chakra("section", {
  baseStyle: {},
});

const configs: ItemProps[] = [
  // {
  //   key: 0,
  // }
];

export const PostList = () => {
  return <Wrapper>{/* <Item /> */}</Wrapper>;
};
