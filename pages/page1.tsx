import Head from "next/head";
import { Box, Title, Text, Link } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next with Styled System</title>
      </Head>
      <Box>
        <Title>Page 1</Title>
        <Text>
          Elit non proident mollit aliquip aliqua do anim ex duis ad est veniam.
          Voluptate laborum cupidatat anim ipsum consequat id eu nostrud officia
          enim voluptate. Nulla aliquip officia quis occaecat. Fugiat dolore
          enim excepteur ut dolor sunt consectetur tempor elit officia. Deserunt
          qui elit consequat magna officia ut. Commodo eu duis sunt cillum nulla
          occaecat <Link href='/'>eiusmod dolore esse magna</Link>
          incididunt pariatur adipisicing officia.
        </Text>
      </Box>
    </>
  );
}
