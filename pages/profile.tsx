import { Navbar } from "@/components/general";
import { Box, Center } from "@chakra-ui/react";
import Head from "next/head";

export default function Profile() {
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
        <meta name="viewport" content="kwidth=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Center bg="gray.300" color="gray.600" height="100vh">
        Profile
      </Center>
    </Box>
  );
}
