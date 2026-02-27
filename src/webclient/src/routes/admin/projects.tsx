import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

export const Route = createFileRoute("/admin/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Dashboard className="grow mt-4 mr-4 mb-4 border">
        Hello, "/admin/projects"!
      </Dashboard>
    </div>
  );
}
