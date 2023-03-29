import React from "react";
import { Container } from "@chakra-ui/react";

interface LayoutContainerProps {
  children: JSX.Element | JSX.Element[];
  height?: string | number;
}

export const LayoutContainer = ({ children, height }: LayoutContainerProps) => {
  return (
    <Container maxWidth="935px" height={height ?? ""}>
      {children}
    </Container>
  );
};
