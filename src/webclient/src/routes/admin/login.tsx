import { createFileRoute } from "@tanstack/react-router";
import Login from "@/components/admin/Login";

export const Route = createFileRoute("/admin/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grow flex items-center justify-center bg-white-400">
      <Login />
    </div>
  );
}
