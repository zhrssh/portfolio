import {
  Button,
  Container,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

export default function Login() {
  return (
    <Container
      size="xs"
      pos="fixed"
      top="50%"
      left="50%"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <Paper withBorder shadow="md" radius="md" miw={500} p="xl">
        <Stack gap={0} justify="center" align="center">
          <Title fz="h1" fw="bold">
            Welcome Back!
          </Title>
          <Text>Sign in to the admin dashboard.</Text>
        </Stack>

        <Stack gap="md" pt="lg">
          <Stack gap="xs">
            <TextInput
              label="Email"
              placeholder="user@email.com"
              required
              radius="md"
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              radius="md"
            />
          </Stack>
          <Group gap="xs" wrap="nowrap">
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
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
