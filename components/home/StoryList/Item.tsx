import { chakra, Text, Flex, Box } from "@chakra-ui/react";
import Image from "next/image";

const Wrapper = chakra(Flex, {
  baseStyle: {
    width: "80px",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    img: {
      borderRadius: "50%",
      backgroundColor: "#fff",
      padding: "2.5px",
    },
  },
});

interface ItemProps {
  name: string;
  imgSrc: string;
}

const Item = ({ name, imgSrc }: ItemProps) => {
  return (
    <Wrapper>
      <Box
        sx={{
          padding: "2.5px",
          backgroundImage: "linear-gradient(#DE0046, #F7A34B)",
          borderRadius: "50%",
          background: "linear-gradient(#F7A34B, #DE0046)",
          marginBottom: "4px",
        }}
      >
        <Image
          src={imgSrc}
          alt="User's display picture"
          width={58.5}
          height={58.5}
        />
      </Box>
      <Text noOfLines={1} fontSize="14px" fontWeight={400}>
        {name}
      </Text>
    </Wrapper>
  );
};

export default Item;
