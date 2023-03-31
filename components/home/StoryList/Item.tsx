import { chakra, Text, Flex } from "@chakra-ui/react";
import { ProfileWithStatusProps } from "@/components/general/ProfileWithStatus/types";
import { ProfileWithStatus } from "@/components/general";

const Wrapper = chakra("a", {
  baseStyle: {
    display: "flex",
    width: "80px",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
  },
});

interface ItemProps extends ProfileWithStatusProps {
  name: string;
}

const Item = ({ name, imgSrc, size }: ItemProps) => {
  return (
    <Wrapper>
      <ProfileWithStatus imgSrc={imgSrc} size={size} />
      <Text noOfLines={1} fontSize="14px" fontWeight={400}>
        {name}
      </Text>
    </Wrapper>
  );
};

export default Item;
