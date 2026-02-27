import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@mantine/core";

import classes from "./dashboard.module.css";

export const Route = createFileRoute("/admin/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello, "/admin/dashboard"!
      <div>
        <Button className={classes.button} variant="filled">
          Click me!
        </Button>
      </div>
    </div>
  );
}
