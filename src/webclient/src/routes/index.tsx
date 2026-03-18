import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Group, Button, Container, Title } from "@mantine/core";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group justify="space-between" align="center" h="100%" px="md">
          <Title order={2}>My Portfolio</Title>
          <Group gap="md">
            <Button variant="subtle" component="a" href="/">
              Home
            </Button>
            <Button variant="subtle" component="a" href="/resume">
              Resume
            </Button>
            <Button variant="subtle" component="a" href="/projects">
              Projects
            </Button>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Container fluid>
          <Title order={1}>Welcome to My Portfolio</Title>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
