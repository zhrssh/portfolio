import { createFileRoute } from "@tanstack/react-router";

import Dashboard from "@/components/admin/Dashboard";
import Projects from "@/components/admin/Projects";

export const Route = createFileRoute("/admin/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen overflow-y-scroll bg-white-400">
      <Dashboard>
        <Projects />
      </Dashboard>
    </div>
  );
}
