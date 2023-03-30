import { chakra, Flex, Text } from "@chakra-ui/react";

export const Card = chakra("article", {
  baseStyle: {},
});

export const Top = chakra(Flex, {
  baseStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingY: "12px",
    paddingLeft: "16px",
    paddingRight: "8px",
  },
});

export const Actions = chakra(Flex, {
  baseStyle: {
    justifyContent: "space-between",
    paddingY: "8px",
    paddingX: '8px',
  },
});

export const NoOfLikes = chakra(Text, {
  baseStyle: {
    fontWeight: 600,
    marginBottom: '14px',
  }
})

export const UserName = chakra(Text, {
  baseStyle: {
    fontWeight: 600,
    marginRight: '8px',
    display: 'inline'
  }
});

export const TimePosted = chakra(Text, {
  baseStyle: {
    textTransform: 'uppercase',
    color: 'gray.500',
    fontSize: '10px',
  }
});