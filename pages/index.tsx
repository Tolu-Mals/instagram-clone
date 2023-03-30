import { Navbar, LayoutContainer } from "@/components/general";
import { StoryList, PostList, SideBar } from "@/components/home";
import { TwoColumnGrid } from "@/components/home/styles";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    /*
    The padding is to prevent
    the mobile bottom nav from blocking
    some of the content in PostList
    */
    <Box paddingBottom={{ base: "49px", md: 0 }}>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Instgram clone home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <LayoutContainer>
        <TwoColumnGrid>
          <Box>
            <StoryList />
            <PostList />
          </Box>
          <SideBar />
        </TwoColumnGrid>
      </LayoutContainer>
    </Box>
  );
}
