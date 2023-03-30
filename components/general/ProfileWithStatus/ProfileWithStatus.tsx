import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { ProfileWithStatusProps } from "./types";

export const ProfileWithStatus = ({ imgSrc, size }: ProfileWithStatusProps) => {
  return (
    <Box
      sx={{
        padding: "2.5px",
        backgroundImage: "linear-gradient(#DE0046, #F7A34B)",
        borderRadius: "50%",
        background: "linear-gradient(#F7A34B, #DE0046)",
        marginBottom: "4px",
        img: {
          borderRadius: "50%",
          backgroundColor: "#fff",
          padding: "2.5px",
        },
      }}
    >
      <Image
        src={imgSrc}
        alt="User's display picture"
        width={size}
        height={size}
      />
    </Box>
  );
};
