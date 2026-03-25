import { createFileRoute } from "@tanstack/react-router";
import {
  AppShell,
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Header from "@/components/Header";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppShell header={{ height: 40 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        {/** Photo by <a href="https://unsplash.com/@iamnidhin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nidhin Mohan</a> on <a href="https://unsplash.com/photos/macbook-turned-on-p_wC_T2HUPk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
         **/}
        <AppShell.Section
          c="white"
          h={"calc(100vh - 40px)"}
          bg="blue.1"
          p="xl"
          style={{
            backgroundImage: "url('bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Flex direction="column" p="md" justify="space-between" h="100%">
            <Box />
            <Stack mb={"5%"}>
              <Title order={1}>
                <div>Zherish Galvin</div>
                <div>Mayordo</div>
              </Title>
              <Text size="md">DevOps Engineer</Text>
              <Group>
                <Button component="a" href="#resume" variant="outline">
                  Resume
                </Button>
                <Button component="a" href="#projects" variant="outline">
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
        </AppShell.Section>
        <AppShell.Section h={"calc(100vh - 40px)"} bg="blue.2">
          <Container fluid>
            <Title order={2}>About Me</Title>
          </Container>
        </AppShell.Section>
        <AppShell.Section h={"calc(100vh - 40px)"} bg="blue.3">
          <Container fluid>
            <Title order={2}>Projects</Title>
          </Container>
        </AppShell.Section>
        <AppShell.Section h={"calc(100vh - 40px)"} bg="blue.4">
          <Container fluid>
            <Title order={2}>Contact Me</Title>
          </Container>
        </AppShell.Section>
      </AppShell.Main>
    </AppShell>
  );
}
