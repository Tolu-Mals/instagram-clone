import { Navbar, LayoutContainer } from "@/components/general";
import { StoryList, PostList, SideBar } from "@/components/home";
import { Box } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import Head from "next/head";

const TwoColumnGrid = chakra("div", {
  baseStyle: {
    width: "100%",
    display: { md: "flex" },
    marginTop: { md: "27.5" },
    gap: "30px",
  },
});

const Main = chakra("main", {
  baseStyle: {
    border: { md: "1px solid var(--chakra-colors-gray-400)" },
    maxWidth: { md: "614px" },
    height: "100vh",
    overflowY: "scroll",
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
          <Main>
            <StoryList />
            <PostList />
          </Main>
          <SideBar />
        </TwoColumnGrid>
      </LayoutContainer>
    </Box>
  );
}
