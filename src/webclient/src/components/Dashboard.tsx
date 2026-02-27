import type { ReactNode } from "react";
import { NavLink, Stack, Text } from "@mantine/core";
import { IconBriefcase2, IconLogout2 } from "@tabler/icons-react";

interface Props {
  children?: ReactNode;
}

const navsMain = [
  {
    href: "/admin/projects",
    label: <Text size="md">Projects</Text>,
    leftSection: <IconBriefcase2 stroke={2} />,
  },
];

const navsFooter = [
  {
    href: "/",
    label: <Text size="md">Log Out</Text>,
    leftSection: <IconLogout2 stroke={2} />,
  },
];

export default function Dashboard({ children }: Props) {
  return (
    /* Main container of dashboard */
    <div className="grow flex">
      {/* Sidebar */}
      <aside className="flex flex-col w-2xs m-4 p-4 gap-8 border">
        <Text component="h1" size="xl">
          LOGO
        </Text>
        <div className="grow flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <Text component="h2" size="lg">
              Menu
            </Text>
            <Stack>
              {navsMain.map((item, index) => (
                <NavLink
                  key={index}
                  href={item.href}
                  label={item.label}
                  leftSection={item.leftSection}
                />
              ))}
            </Stack>
          </div>
          <Stack>
            {navsFooter.map((item, index) => (
              <NavLink
                key={index}
                href={item.href}
                label={item.label}
                leftSection={item.leftSection}
              />
            ))}
          </Stack>
        </div>
      </aside>
      {/* Main page */}
      <div className="grow mt-4 mr-4 mb-4 border">{children}</div>
    </div>
  );
}
