import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import Projects from "@/components/Projects";

export const Route = createFileRoute("/admin/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Dashboard>
        <Projects />
      </Dashboard>
    </div>
  );
}
