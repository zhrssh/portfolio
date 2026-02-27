import { Button, Stack, Text } from "@mantine/core";

export default function Dashboard({ children, ...props }) {
  return (
    <div className="grow flex">
      <aside className="flex flex-col justify-between">
        <Stack>
          <Button>Projects</Button>
        </Stack>
        <Stack>
          <Text size="lg">Logout</Text>
        </Stack>
      </aside>
      <div {...props}>{children}</div>
    </div>
  );
}
