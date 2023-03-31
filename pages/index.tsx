import { Navbar, LayoutContainer } from "@/components/general";
import { StoryList, PostList, SideBar } from "@/components/home";
import { Box } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import Head from "next/head";

const TwoColumnGrid = chakra("div", {
  baseStyle: {
    display: { md: "grid" },
  },
});

export default function Home() {
  return (
    /*
    The padding is to prevent
    the mobile bottom nav from blocking
    some of the content in PostList
    */
    <Box paddingBottom={{ base: "49px", md: 0 }} overflow="hidden">
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Instgram clone home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <LayoutContainer>
        <TwoColumnGrid>
          <Box width="100%">
            <StoryList />
            <PostList />
          </Box>
          <SideBar />
        </TwoColumnGrid>
      </LayoutContainer>
    </Box>
  );
}
