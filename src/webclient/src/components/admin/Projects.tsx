import {
  Anchor,
  Button,
  CloseButton,
  Input,
  Menu,
  Pagination,
  Pill,
  Select,
  Table,
  Text,
} from "@mantine/core";
import { modals } from "@mantine/modals";
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

// NOTE: DEVELOPMENT ONLY
import { projects } from "@/lib/data/sample_projects";

export default function Projects() {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Delete this project",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this project? This action is
          irreversible.
        </Text>
      ),
      labels: { confirm: "Delete", cancel: "No, don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  const rows = projects.map((project) => (
    <Table.Tr key={project.id}>
      <Table.Td>{project.title}</Table.Td>
      <Table.Td>
        <Pill>{project.tag}</Pill>
      </Table.Td>
      <Table.Td>{project.description}</Table.Td>
      <Table.Td>
        <Pill.Group>
          {project.tools.map((tool) => (
            <Pill key={tool}>{tool}</Pill>
          ))}
        </Pill.Group>
      </Table.Td>
      <Table.Td>
        <Anchor fz="sm" href={project.repo_url}>
          <div className="flex gap-2">
            <IconExternalLink size={16} />
            {project.repo_url}
          </div>
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Anchor fz="sm" href={project.website_link}>
          <div className="flex gap-2">
            <IconExternalLink size={16} />
            {project.website_link}
          </div>
        </Anchor>
      </Table.Td>
      <Table.Td align="right">
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
            <Menu.Item
              color="red"
              leftSection={<IconTrash size={16} />}
              onClick={openDeleteModal}
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="grow flex flex-col p-8 gap-4 justify-between">
      <div className="flex items-center justify-between">
        <Text fz="h1" fw="bold">
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
      <Table
        style={{
          flexGrow: 1,
        }}
        verticalSpacing="md"
        highlightOnHover
      >
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
      <div className="flex justify-center">
        <Pagination total={10} />
      </div>
    </div>
  );
}
