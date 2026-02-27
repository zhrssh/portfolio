import type { ReactNode } from "react";
import { Divider, NavLink, Stack, Text } from "@mantine/core";
import { IconBriefcase2, IconLogout2 } from "@tabler/icons-react";

import classes from "@/css/common/navlink.module.css";

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
    c: "red.4",
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
      <aside className="flex flex-col w-2xs m-2 p-8 rounded-lg text-white-100 bg-jetblack-600">
        <div className="flex gap-4 items-center min-h-16">
          <img
            src="/mypicture.png"
            alt="my picture"
            className="w-18 h-18 rounded-full shadow-md shadow-jetblack-900"
          />
          <div className="flex flex-col justify-center">
            <Text c="jetblack.3" size="xs">
              Welcome back,
            </Text>
            <Text fz="h3" fw="bold">
              Zherish!
            </Text>
          </div>
        </div>
        <Divider my="md" />
        <div className="grow flex flex-col justify-between">
          <div className="flex flex-col gap-2">
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
                />
              ))}
            </Stack>
          </div>
          <Stack>
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
        </div>
      </aside>
      {/* Main page */}
      <div className="flex grow mt-2 mr-2 mb-2 p-4 bg-white-100 rounded-lg">
        {children}
      </div>
    </div>
  );
}
