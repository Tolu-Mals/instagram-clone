import React from "react";
import { ProfileWithStatus } from "@/components/general";
import { MoreIcon, CommentIcon, LikeIcon, ShareIcon, SaveIcon } from "./icons";
import { Flex, Text, Image, IconButton, Box, Card } from "@chakra-ui/react";
import { Top, Actions, NoOfLikes, UserName, TimePosted } from "./styles";
import { ItemProps } from "./types";

const Item = ({
  key,
  imgSrc,
  userName,
  noOfLikes,
  descr,
  timePosted,
}: ItemProps) => {
  const top = (
    <Top>
      <Flex gap="14px" alignItems="center">
        <ProfileWithStatus imgSrc="/assets/images/User1.png" size={42} />
        <Text fontWeight={600}>terrylucas</Text>
      </Flex>

      <IconButton
        aria-label="See more options"
        icon={<MoreIcon boxSize="24px" />}
        bg="transparent"
      />
    </Top>
  );

  const actions = (
    <Actions>
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
    </Actions>
  );

  const details = (
    <Box px="16px">
      <NoOfLikes>1,069 likes</NoOfLikes>
      <Text mb="14px">
        <UserName>terrylucas</UserName>
        <Text noOfLines={2} display="inline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </Text>
        <Text color="gray.500" display="inline" as="span">
          more
        </Text>
      </Text>
      <TimePosted>1 hour ago</TimePosted>
    </Box>
  );
  return (
    <Card>
      {top}
      <Image
        src="/assets/images/User1.png"
        alt="Picture of user"
        width="100%"
      />
      {actions}
      {details}
    </Card>
  );
};

export default Item;
