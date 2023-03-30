import React from "react";
import Item from "./Item";
import { chakra } from "@chakra-ui/react";
import { ItemProps } from "./types";

const Wrapper = chakra("section", {
  baseStyle: {},
});

const configs: ItemProps[] = [
  {
    key: 0,
    imgSrc: "/assets/images/User1.png",
    imgAlt: "Image of person",
    userName: "tolumals",
    noOfLikes: 1200,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime aut, aspernatur unde inventore nemo, nisi laboriosam facere voluptatem deleniti harum cupiditate non iure, tenetur officia corrupti sint deserunt. Velit nemo doloribus libero perspiciatis incidunt corrupti suscipit odit possimus ducimus?",
    timePosted: "2 hours",
  },
  {
    key: 1,
    imgSrc: "/assets/images/User2.png",
    imgAlt: "Image of person",
    userName: "terrylucas",
    noOfLikes: 500,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime aut, aspernatur unde inventore nemo, nisi laboriosam facere voluptatem deleniti harum cupiditate non iure, tenetur officia corrupti sint deserunt. Velit nemo doloribus libero perspiciatis incidunt corrupti suscipit odit possimus ducimus?",
    timePosted: "1 hour",
  },
  {
    key: 2,
    imgSrc: "/assets/images/User3.png",
    imgAlt: "Image of person",
    userName: "lauramatt",
    noOfLikes: 500,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime aut, aspernatur unde inventore nemo, nisi laboriosam facere voluptatem deleniti harum cupiditate non iure, tenetur officia corrupti sint deserunt. Velit nemo doloribus libero perspiciatis incidunt corrupti suscipit odit possimus ducimus?",
    timePosted: "3 hours",
  },
  {
    key: 3,
    imgSrc: "/assets/images/User4.png",
    imgAlt: "Image of person",
    userName: "harryprescott",
    noOfLikes: 500,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime aut, aspernatur unde inventore nemo, nisi laboriosam facere voluptatem deleniti harum cupiditate non iure, tenetur officia corrupti sint deserunt. Velit nemo doloribus libero perspiciatis incidunt corrupti suscipit odit possimus ducimus?",
    timePosted: "5 hours",
  },
  {
    key: 4,
    imgSrc: "/assets/images/User5.png",
    imgAlt: "Image of person",
    userName: "ednamanz",
    noOfLikes: 500,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime aut, aspernatur unde inventore nemo, nisi laboriosam facere voluptatem deleniti harum cupiditate non iure, tenetur officia corrupti sint deserunt. Velit nemo doloribus libero perspiciatis incidunt corrupti suscipit odit possimus ducimus?",
    timePosted: "2 days",
  },
  {
    key: 5,
    imgSrc: "/assets/images/User6.png",
    imgAlt: "Image of person",
    userName: "christinaste",
    noOfLikes: 500,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime aut, aspernatur unde inventore nemo, nisi laboriosam facere voluptatem deleniti harum cupiditate non iure, tenetur officia corrupti sint deserunt. Velit nemo doloribus libero perspiciatis incidunt corrupti suscipit odit possimus ducimus?",
    timePosted: "1 year",
  },
  {
    key: 6,
    imgSrc: "/assets/images/User7.png",
    imgAlt: "Image of person",
    userName: "johnschmit",
    noOfLikes: 500,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime aut, aspernatur unde inventore nemo, nisi laboriosam facere voluptatem deleniti harum cupiditate non iure, tenetur officia corrupti sint deserunt. Velit nemo doloribus libero perspiciatis incidunt corrupti suscipit odit possimus ducimus?",
    timePosted: "5 minutes",
  },
  {
    key: 7,
    imgSrc: "/assets/images/User8.png",
    imgAlt: "Image of person",
    userName: "amyporte",
    noOfLikes: 500,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime aut, aspernatur unde inventore nemo, nisi laboriosam facere voluptatem deleniti harum cupiditate non iure, tenetur officia corrupti sint deserunt. Velit nemo doloribus libero perspiciatis incidunt corrupti suscipit odit possimus ducimus?",
    timePosted: "6 days",
  },
  {
    key: 8,
    imgSrc: "/assets/images/User9.png",
    imgAlt: "Image of person",
    userName: "joeburton",
    noOfLikes: 500,
    descr:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime aut, aspernatur unde inventore nemo, nisi laboriosam facere voluptatem deleniti harum cupiditate non iure, tenetur officia corrupti sint deserunt. Velit nemo doloribus libero perspiciatis incidunt corrupti suscipit odit possimus ducimus?",
    timePosted: "2 hours",
  },
];

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
