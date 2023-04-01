import { Text } from "@chakra-ui/react";
import { ProfileWithStatus } from "@/components/general";
import { StoryWrapper } from "./styles";
import { StoryProps } from "./types";

const Item = ({ name, imgSrc, size }: StoryProps) => {
  return (
    <StoryWrapper>
      <ProfileWithStatus imgSrc={imgSrc} size={size} />
      <Text noOfLines={1} fontSize="14px" fontWeight={400}>
        {name}
      </Text>
    </StoryWrapper>
  );
};

export default Item;
