import { Flex, chakra } from "@chakra-ui/react";

export const Top = chakra(Flex, {
  baseStyle: {
    paddingY: "8px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: '16px',
    img: {
      borderRadius: "50%",
      marginRight: "1.3rem",
    },
  },
});

export const Wrapper = chakra("aside", {
  baseStyle: {
    paddingY: "8px",
    width: "100%",
  },
});

export const Suggestions = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
  },
});