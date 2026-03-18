import { Flex, Group, Image, NavLink, Stack, Text } from "@mantine/core";
import { IconBriefcase2, IconLogout2 } from "@tabler/icons-react";

import classes from "@/css/common/navlink.module.css";
import { useLocation } from "@tanstack/react-router";

const navsMain = [
  {
    href: "/admin/projects",
    label: <Text size="md">Projects</Text>,
    leftSection: <IconBriefcase2 stroke={2} />,
  },
];

const navsFooter = [
  {
    c: "red.4",
    href: "/",
    label: <Text size="md">Log Out</Text>,
    leftSection: <IconLogout2 stroke={2} />,
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    /* Main container of dashboard */
    <Flex
      direction="column"
      bg="jetblack.6"
      c="white"
      gap="xl"
      justify="center"
      align="center"
      wrap="nowrap"
      h="100%"
      p="lg"
    >
      <Group justify="center" gap="lg">
        <Image
          src="/mypicture.png"
          h={100}
          w="auto"
          alt="my picture"
          radius="100%"
        />
        <Stack gap={0}>
          <Text c="jetblack.3" size="xs">
            Welcome back,
          </Text>
          <Text fz="h3" fw="bold">
            Zherish!
          </Text>
        </Stack>
      </Group>
      <Flex
        direction="column"
        justify="space-between"
        align="start"
        h="100%"
        w="100%"
      >
        <Stack gap="xs" w="100%">
          <Text fz="xs">Menu</Text>
          <Stack>
            {navsMain.map((item, index) => (
              <NavLink
                classNames={{
                  root: classes.root,
                }}
                bdrs="md"
                key={index}
                href={item.href}
                label={item.label}
                leftSection={item.leftSection}
                autoContrast
                active={location.href === item.href}
              />
            ))}
          </Stack>
        </Stack>
        <Stack gap="xs" w="100%">
          {navsFooter.map((item, index) => (
            <NavLink
              c={item.c}
              classNames={{
                root: classes.root,
              }}
              bdrs="md"
              key={index}
              href={item.href}
              label={item.label}
              leftSection={item.leftSection}
              autoContrast
            />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}
