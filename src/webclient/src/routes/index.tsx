import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Box, Container, Flex, Title } from "@mantine/core";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

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
        <Hero />
        <About />
        <AppShell.Section h={"calc(100vh - 40px)"} bg="blue.3">
          <Container size="lg" h="100%">
            <Flex direction="column" py="xl" justify="space-between" h="100%">
              <Box />
              <Title order={2}>Services</Title>
              <Box />
            </Flex>
          </Container>
        </AppShell.Section>
        <AppShell.Section h={"calc(100vh - 40px)"} bg="blue.3">
          <Container size="lg" h="100%">
            <Flex direction="column" py="xl" justify="space-between" h="100%">
              <Box />
              <Title order={2}>Projects</Title>
              <Box />
            </Flex>
          </Container>
        </AppShell.Section>
        <AppShell.Section h={"calc(100vh - 40px)"} bg="blue.4">
          <Container size="lg" h="100%">
            <Flex direction="column" py="xl" justify="space-between" h="100%">
              <Box />
              <Title order={2}>Contact Me</Title>
              <Box />
            </Flex>
          </Container>
        </AppShell.Section>
      </AppShell.Main>
    </AppShell>
  );
}
