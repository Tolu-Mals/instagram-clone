import React from "react";
import { Box, chakra } from "@chakra-ui/react";
import Item from "./Item";
const Slider = require("react-slick").default;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Story } from "./types";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.7,
  slidesToScroll: 3,
  useArrows: false,
};

const storyConfigs = [
  {
    key: 0,
    imgSrc: "/assets/images/User1.png",
    name: "Your Story",
  },
  {
    key: 1,
    imgSrc: "/assets/images/User2.png",
    name: "terrylucas",
  },
  {
    key: 2,
    imgSrc: "/assets/images/User3.png",
    name: "lauramatt",
  },
  {
    key: 3,
    imgSrc: "/assets/images/User4.png",
    name: "harryprescott",
  },
  {
    key: 4,
    imgSrc: "/assets/images/User5.png",
    name: "ednamanz",
  },
  {
    key: 5,
    imgSrc: "/assets/images/User6.png",
    name: "christinaste",
  },
  {
    key: 6,
    imgSrc: "/assets/images/User7.png",
    name: "johnschmit",
  },
  {
    key: 7,
    imgSrc: "/assets/images/User8.png",
    name: "amyporte",
  },
  {
    key: 8,
    imgSrc: "/assets/images/User9.png",
    name: "joeburton",
  },
];

const renderStory = (story: Story) => (
  <Item key={story.key} size={58.5} imgSrc={story.imgSrc} name={story.name} />
);

const Wrapper = chakra(Box, {
  baseStyle: {
    paddingY: "0.5rem",
    width: "100%",
    borderBottom: "1px solid var(--chakra-colors-gray-400)",
  },
});

export const StoryList = () => {
  return (
    <Wrapper overflowX="hidden">
      <Slider {...settings}>{storyConfigs.map(renderStory)}</Slider>
    </Wrapper>
  );
};
