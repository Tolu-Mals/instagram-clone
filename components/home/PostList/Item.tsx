import React from "react";
import { ProfileWithStatus } from "@/components/general";
import { MoreIcon, CommentIcon, LikeIcon, ShareIcon, SaveIcon } from "./icons";
import { Flex, Text, Image, IconButton, Box } from "@chakra-ui/react";
import { Top, Actions, NoOfLikes, UserName, TimePosted, Card } from "./styles";
import { ItemProps } from "./types";

const truncateText = (text: string): string => {
  return text.substring(0, 50) + "...";
};

const Item = ({
  imgSrc,
  imgAlt,
  userName,
  noOfLikes,
  descr,
  timePosted,
}: ItemProps) => {
  const top = (
    <Top>
      <Flex gap="14px" alignItems="center">
        <ProfileWithStatus imgSrc={imgSrc} size={42} />
        <Text fontWeight={600}>{userName}</Text>
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
      <NoOfLikes>{noOfLikes} likes</NoOfLikes>
      <UserName>{userName}</UserName>
      <Text noOfLines={2} display="inline">
        {truncateText(descr)}
      </Text>
      <Text color="gray.500" display="inline" as="span">
        more
      </Text>
      <TimePosted mt="1rem">{timePosted + " ago"}</TimePosted>
    </Box>
  );

  return (
    <Card>
      {top}
      <Image src={imgSrc} alt={imgAlt} width="100%" />
      {actions}
      {details}
    </Card>
  );
};

export default Item;
