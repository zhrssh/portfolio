import {
  Anchor,
  Button,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Navigate } from "@tanstack/react-router";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen overflow-y-hidden items-center justify-center gap-4">
      <Paper
        withBorder
        shadow="md"
        radius="md"
        className="flex flex-col p-8 min-w-[500px] gap-4"
      >
        <div className="flex flex-col items-center">
          <Title fz="h1" fw="bold">
            Welcome Back!
          </Title>
          <Text>Sign in to the admin dashboard.</Text>
        </div>

        <div className="grow">
          <TextInput
            label="Email"
            placeholder="user@email.com"
            required
            mt="sm"
            radius="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="xs"
            radius="md"
          />
          <div className="flex gap-4">
            <Button
              component="a"
              href="/"
              fullWidth
              mt="xl"
              radius="md"
              variant="light"
            >
              Go Back
            </Button>
            <Button
              component="a"
              href="/admin/projects"
              fullWidth
              mt="xl"
              radius="md"
            >
              Sign in
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
