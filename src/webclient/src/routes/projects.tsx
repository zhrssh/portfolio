import Header from "@/components/Header";
import { AppShell, Container, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
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
          <Title order={1}>Welcome to "/projects"!</Title>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
