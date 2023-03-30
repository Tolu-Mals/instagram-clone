import { Navbar, LayoutContainer } from "@/components/general";
import { StoryList, PostList } from "@/components/home";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Instgram clone home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <LayoutContainer>
        <Box>
          <StoryList />
          <PostList />
        </Box>
      </LayoutContainer>
    </>
  );
}
