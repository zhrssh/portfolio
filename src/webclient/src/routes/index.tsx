import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Group, Button, Container, Title } from "@mantine/core";
import Header from "@/components/Header";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppShell header={{ height: 40 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Container fluid>
          <Title order={1}>Welcome to My Portfolio</Title>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
