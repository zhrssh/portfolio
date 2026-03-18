import { createFileRoute } from "@tanstack/react-router";
import Login from "@/components/admin/Login";
import { AppShell } from "@mantine/core";

export const Route = createFileRoute("/admin/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppShell padding="md" bg="gray.4">
      <AppShell.Main>
        <Login />
      </AppShell.Main>
    </AppShell>
  );
}
