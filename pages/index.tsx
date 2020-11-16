import Head from "next/head";
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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = new Date();

export default function Home() {
  return (
    <>
      <Head>
        <title>Next with Styled System</title>
      </Head>
      <AppHeader
        Logo={() => (
          <Link href='/'>
            <Text fontWeight='bold' fontSize='5' color='primary.dark'>
              site diary
            </Text>
          </Link>
        )}
        Links={(props: any) => (
          <>
            <Link href='/change-job' {...props}>
              Change job
            </Link>
            <Link href='/logout' {...props}>
              Logout
            </Link>
          </>
        )}
      />
      <Box px={[3, 0]} display='flex' justifyContent='center'>
        <Box maxWidth={["100%", "75%", "50%"]}>
          <Box mb={3} mt={2}>
            <Title>
              {today.getDate()} {months[today.getMonth()]},{" "}
              {today.getFullYear()}
            </Title>
            <Text color='gray.600' fontSize={2}>
              Municipal, Liverpool
            </Text>
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
