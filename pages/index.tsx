import Head from "next/head";
import css from "@styled-system/css";
import {
  Box,
  Title,
  Text,
  Link,
  Button,
  AppHeader,
  Input,
} from "../components";
type ButtonVariants =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "success"
  | "info";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next with Styled System</title>
      </Head>
      <AppHeader
        Logo={() => (
          <Text fontWeight='bold' fontSize='5' color='primary.dark'>
            system
          </Text>
        )}
        Links={(props: any) => (
          <>
            <Link href='#' {...props}>
              Home
            </Link>
            <Link href='#' {...props}>
              Dashboard
            </Link>
            <Link href='#' {...props}>
              About
            </Link>
            <Link href='#' {...props}>
              Contact
            </Link>
          </>
        )}
      />
      <Box px={[3, 0]} display='flex' justifyContent='center'>
        <Box maxWidth={["100%", "75%", "50%"]}>
          <Title>Next.js with Styled System</Title>
          <Text textAlign='justify'>
            Elit non proident mollit aliquip aliqua do anim ex duis ad est
            veniam. Voluptate laborum cupidatat anim ipsum consequat id eu
            nostrud officia enim voluptate. Nulla aliquip officia quis occaecat.
            Fugiat dolore enim excepteur ut dolor sunt consectetur tempor elit
            officia. Deserunt qui elit consequat magna officia ut. Commodo eu
            duis sunt cillum nulla occaecat incididunt pariatur adipisicing
            officia.
          </Text>
          <Box
            flexDirection='column'
            display='flex'
            mb={4}
            flexGrow={0}
            width='fit-content'
          >
            <Link href='/page1'>eiusmod dolore</Link>
            <Link href='/page1'>eiusmod dolore esse</Link>
            <Link href='/page1'>eiusmod dolore esse magna</Link>
          </Box>
          {["primary", "secondary", "danger", "warning", "success", "info"].map(
            (variant: ButtonVariants) => (
              <Box
                display='flex'
                flexDirection='row'
                alignItems='flex-end'
                flexWrap='wrap'
                mb={4}
                key={variant}
              >
                <Button color={variant} size='large' mr={2}>
                  {variant}
                </Button>
                <Button color={variant} mr={2}>
                  {variant}
                </Button>
                <Button color={variant} size='small' mr={2}>
                  {variant}
                </Button>
              </Box>
            )
          )}
          <Box display='flex' flexDirection='row' alignItems='flex-end' mb={4}>
            <Button color='primary' variant='outlined' size='large' mr={2}>
              outlined
            </Button>
            <Button color='success' variant='text' mr={2}>
              text
            </Button>
          </Box>
          <Box display='flex' flexDirection='column' mb={4}>
            <Input defaultValue='Sam Ogden' mb={3} />
            <Input />
          </Box>
          <Text textAlign='justify'>
            Elit non proident mollit aliquip aliqua do anim ex duis ad est
            veniam. Voluptate laborum cupidatat anim ipsum consequat id eu
            nostrud officia enim voluptate. Nulla aliquip officia quis occaecat.
            Fugiat dolore enim excepteur ut dolor sunt consectetur tempor elit
            officia. Deserunt qui elit consequat magna officia ut. Commodo eu
            duis sunt cillum nulla occaecat incididunt pariatur adipisicing
            officia.
          </Text>
        </Box>
      </Box>
    </>
  );
}
