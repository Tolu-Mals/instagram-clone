import React from "react";
import { ProfileWithStatus } from "@/components/general";
import { MoreIcon, CommentIcon, LikeIcon, ShareIcon, SaveIcon } from "./icons";
import { chakra, Flex, Text, Image, IconButton } from "@chakra-ui/react";

const Card = chakra("article", {
  baseStyle: {},
});

const CardTop = chakra(Flex, {
  baseStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingY: "12px",
    paddingLeft: "16px",
    paddingRight: "8px",
  },
});

const CardActions = chakra(Flex, {
  baseStyle: {
    justifyContent: "space-between",
    paddingY: "8px",
  },
});

const top = (
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
);

const actions = (
  <CardActions>
    <Flex alignItems="center">
      <IconButton
        aria-label="Like a post"
        icon={<LikeIcon boxSize="24px" />}
        bg="transparent"
      />

      <IconButton
        aria-label="Comment on post"
        icon={<CommentIcon boxSize="24px" />}
        bg="transparent"
      />

      <IconButton
        aria-label="Share a post"
        icon={<ShareIcon boxSize="24px" />}
        bg="transparent"
      />
    </Flex>

    <IconButton
      aria-label="Save a post"
      icon={<SaveIcon boxSize="24px" />}
      bg="transparent"
    />
  </CardActions>
);

const Item = () => {
  return (
    <Card>
      {top}
      <Image
        src="/assets/images/User1.png"
        alt="Picture of user"
        width="100%"
      />
      {actions}
    </Card>
  );
};

export default Item;
