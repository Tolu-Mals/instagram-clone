import React from "react";
import {
  chakra,
  Flex,
  Text,
  Image,
  createIcon,
  IconButton,
} from "@chakra-ui/react";
import { ProfileWithStatus } from "@/components/general";

const Wrapper = chakra("section", {
  baseStyle: {},
});

const Card = chakra("article", {
  baseStyle: {},
});

const CardTop = chakra(Flex, {
  baseStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingY: "12px",
    paddingX: "16px",
  },
});

const MoreIcon = createIcon({
  displayName: "More Icon",
  viewBox: "0 0 22 22",
  d: "M11 12.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75ZM5.958 12.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75ZM16.042 12.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75Z",
});

const Item = () => {
  return (
    <Card>
      <CardTop>
        <Flex gap="14px" alignItems="center">
          <ProfileWithStatus imgSrc="/assets/images/User1.png" size={42} />
          <Text fontWeight={600}>terrylucas</Text>
        </Flex>

        <IconButton
          aria-label="See more options"
          icon={<MoreIcon boxSize="24px" />}
          bg="transparent"
        />
      </CardTop>

      <Image
        src="/assets/images/User1.png"
        alt="Picture of user"
        width="100%"
      />
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
