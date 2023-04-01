import React from "react";
import Item from "./Item";
const Slider = require("react-slick").default;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Story } from "./types";
import { configs } from "./data";
import { Wrapper } from "./styles";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 2560,
      settings: {
        slidesToShow: 5.5,
        useArrows: false,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4.7,
        slidesToScroll: 4,
        useArrows: false,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3.7,
        slidesToScroll: 3,
        useArrows: false,
      },
    },
  ],
};

const renderStory = (story: Story) => (
  <Item key={story.key} size={58.5} imgSrc={story.imgSrc} name={story.name} />
);

export const StoryList = () => {
  return (
    <Wrapper>
      <Slider {...settings}>{configs.map(renderStory)}</Slider>
    </Wrapper>
  );
};
