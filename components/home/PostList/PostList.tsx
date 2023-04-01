import React from "react";
import Item from "./Item";
import { ItemProps } from "./types";
import { configs } from "./data";
import { Wrapper } from "./styles";

const renderItem = (config: ItemProps) => (
  <Item
    key={config.key}
    imgSrc={config.imgSrc}
    imgAlt={config.imgAlt}
    userName={config.userName}
    noOfLikes={config.noOfLikes}
    descr={config.descr}
    timePosted={config.timePosted}
  />
);

export const PostList = () => {
  return <Wrapper>{configs.map(renderItem)}</Wrapper>;
};
