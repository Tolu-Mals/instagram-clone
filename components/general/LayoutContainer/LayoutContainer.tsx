import React from "react";
import { Container } from "@chakra-ui/react";

interface LayoutContainerProps {
  children: JSX.Element | JSX.Element[];
  height?: string | number;
}

/**
 * It's used as a container to center and apply
 * a consistent maxWidth to the layout
 * @children Elements wrapped inside the container
 * @height Optionally specify the height of the container
 */

export const LayoutContainer = ({
  children,
  height = "",
}: LayoutContainerProps) => {
  return (
    <Container maxWidth="935px" height={height} padding={{ base: "0" }}>
      {children}
    </Container>
  );
};
