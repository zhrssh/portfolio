import {
  Anchor,
  Button,
  CloseButton,
  Input,
  Menu,
  Select,
  Table,
  Text,
} from "@mantine/core";
import {
  IconCategory,
  IconDotsVertical,
  IconEdit,
  IconExternalLink,
  IconEye,
  IconPlus,
  IconSearch,
  IconTool,
  IconTrash,
} from "@tabler/icons-react";

const projects = [
  {
    id: 1,
    title: "Todo App",
    tag: "hobby",
    description: "Todo list application",
    tools: ["React"],
    repo_url: "https://example.com",
    website_link: "https://example.com",
    images: "./data/sample1.jpg",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    tag: "utility",
    description: "Real-time weather tracking dashboard",
    tools: ["Vue", "OpenWeather API"],
    repo_url: "https://example.com",
    website_link: "https://example.com",
    images: "./data/sample2.jpg",
  },
  {
    id: 3,
    title: "Chat Platform",
    tag: "hobby",
    description: "Simple real-time messaging app",
    tools: ["Node.js", "Socket.io"],
    repo_url: "https://example.com",
    website_link: "https://example.com",
    images: "./data/sample3.jpg",
  },
];

export default function Projects() {
  const rows = projects.map((project) => (
    <Table.Tr key={project.id}>
      <Table.Td>{project.title}</Table.Td>
      <Table.Td>{project.tag}</Table.Td>
      <Table.Td>{project.description}</Table.Td>
      <Table.Td>
        {project.tools.map((tool) => (
          <p>{tool}</p>
        ))}
      </Table.Td>
      <Table.Td>
        <Anchor href={project.repo_url}>
          <div className="flex gap-2">
            <IconExternalLink size={16} />
            {project.repo_url}
          </div>
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Anchor href={project.website_link}>
          <div className="flex gap-2">
            <IconExternalLink size={16} />
            {project.website_link}
          </div>
        </Anchor>
      </Table.Td>
      <Table.Td className="flex justify-end">
        <Menu>
          <Menu.Target>
            <Button color="dark" variant="transparent">
              <IconDotsVertical stroke={2} />
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item leftSection={<IconEye size={16} />}>View</Menu.Item>
            <Menu.Item leftSection={<IconEdit size={16} />}>Edit</Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger</Menu.Label>
            <Menu.Item color="red" leftSection={<IconTrash size={16} />}>
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between p-4">
        <Text component="h1" size="xl" fw={700}>
          Projects
        </Text>
        <Button size="md" variant="filled" leftSection={<IconPlus size={18} />}>
          Add Project
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="min-w-md">
          <Input
            placeholder="Search"
            leftSection={<IconSearch size={16} />}
            rightSectionPointerEvents="all"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => console.log("Clear")}
                style={{ display: true ? undefined : "none" }}
              />
            }
          />
        </div>
        <div className="flex gap-4">
          <Select
            data={["hobby", "utility"]}
            leftSectionPointerEvents="none"
            leftSection={<IconCategory size={16} />}
            placeholder="Tag"
            maxDropdownHeight={240}
          />
          <Select
            data={["React", "Vue", "OpenWeather API", "Node.js", "Socket.io"]}
            leftSectionPointerEvents="none"
            leftSection={<IconTool size={16} />}
            placeholder="Tool"
            maxDropdownHeight={240}
          />
        </div>
      </div>
      <Table verticalSpacing="md" highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Tag</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Tools</Table.Th>
            <Table.Th>Repository URL</Table.Th>
            <Table.Th>Website</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}
