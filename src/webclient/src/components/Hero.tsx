import {
  AppShell,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function Hero() {
  {
    /** Photo by <a href="https://unsplash.com/@iamnidhin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nidhin Mohan</a> on <a href="https://unsplash.com/photos/macbook-turned-on-p_wC_T2HUPk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
     **/
  }
  return (
    <AppShell.Section
      c="white"
      h={"calc(100vh - 40px)"}
      p="xl"
      style={{
        backgroundImage: "url('bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <Container size="lg" h="100%">
        <Flex direction="column" py="xl" justify="space-between" h="100%">
          <Box />
          <Stack mb={"5%"}>
            <Title order={1}>
              <div>Zherish Galvin</div>
              <div>Mayordo</div>
            </Title>
            <Text size="md">DevOps Engineer</Text>
            <Group>
              <Button component="a" href="#resume" variant="outline" miw={100}>
                CV
              </Button>
              <Button
                component="a"
                href="#projects"
                variant="outline"
                miw={100}
              >
                Projects
              </Button>
            </Group>
          </Stack>
          <Group>
            <IconBrandGithubFilled stroke={2} />
            <IconBrandLinkedinFilled stroke={2} />
            <IconBrandWhatsapp stroke={2} />
          </Group>
        </Flex>
      </Container>
    </AppShell.Section>
  );
}
