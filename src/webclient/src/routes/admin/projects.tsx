import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/admin/Navbar";
import Projects from "@/components/admin/Projects";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const Route = createFileRoute("/admin/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Projects />
      </AppShell.Main>
    </AppShell>
  );
}
