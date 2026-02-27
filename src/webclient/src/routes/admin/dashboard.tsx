import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

export const Route = createFileRoute("/admin/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Dashboard className="grow">Hello, "/admin/dashboard"!</Dashboard>
    </div>
  );
}
