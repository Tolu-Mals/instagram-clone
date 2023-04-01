import { chakra, Box } from "@chakra-ui/react";

export const Wrapper = chakra(Box, {
  baseStyle: {
    paddingY: "0.8rem",
    borderBottom: "1px solid var(--chakra-colors-gray-400)",
    backgroundColor: "#fff",
    width: "100%",
  },
});

export const StoryWrapper = chakra("a", {
  baseStyle: {
    display: "flex",
    width: "80px",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
  },
});