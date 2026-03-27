import { Group, Button, Text } from "@mantine/core";
import { IconDeviceMobile, IconMail } from "@tabler/icons-react";

export default function Header() {
  return (
    <Group justify="space-between" align="center" h="100%" px="md">
      <Group gap="lg">
        <Button variant="transparent" component="a" href="/">
          Home
        </Button>
        <Button variant="transparent" component="a" href="#about">
          About
        </Button>
        <Button variant="transparent" component="a" href="#resume">
          Services
        </Button>
        <Button variant="transparent" component="a" href="#projects">
          Projects
        </Button>
        <Button
          variant="transparent"
          component="a"
          href="https://github.com/zhrssh/portfolio"
          target="_blank"
        >
          Source
        </Button>
      </Group>
      <Group gap="xl">
        <Group gap="xs">
          <IconDeviceMobile size={18} />
          <Text size="sm" component="a" href="tel:+639957288817">
            (+63) 995 728 8817
          </Text>
        </Group>
        <Group gap="xs">
          <IconMail size={18} />
          <Text
            size="sm"
            component="a"
            href="mailto:zherishatbusiness@gmail.com"
          >
            zherishatbusiness@gmail.com
          </Text>
        </Group>
      </Group>
    </Group>
  );
}
