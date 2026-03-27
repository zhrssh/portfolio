import {
  AppShell,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function About() {
  return (
    <AppShell.Section h={"calc(100vh - 40px)"} bg="blue.2">
      <Container size="lg" h="100%">
        <Flex direction="column" py="xl" justify="space-between" h="100%">
          <Box />
          <Group wrap="nowrap" justify="center" align="center">
            <Image
              radius="md"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
              mah={300}
              w="auto"
            />
            <Stack ml="4rem" mr="auto">
              <Title order={2}>About Me</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>
              <Button variant="filled">Download CV</Button>
            </Stack>
          </Group>
          <Box />
        </Flex>
      </Container>
    </AppShell.Section>
  );
}
