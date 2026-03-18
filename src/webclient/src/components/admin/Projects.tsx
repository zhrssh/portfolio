import {
  Anchor,
  Button,
  CloseButton,
  Flex,
  Group,
  Input,
  Menu,
  Pagination,
  Pill,
  Select,
  Table,
  Text,
  Title,
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
        <Anchor fz="xs" href={project.repo_url}>
          <Group gap="xs" wrap="nowrap">
            <IconExternalLink size={16} />
            {project.repo_url}
          </Group>
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Anchor fz="xs" href={project.website_link}>
          <Group gap="xs" wrap="nowrap">
            <IconExternalLink size={16} />
            {project.website_link}
          </Group>
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
    <Flex direction="column" gap="md" w="100%" p="lg" align="center">
      <Group justify="space-between" w="100%">
        <Title fz="h1" fw="bold">
          Projects
        </Title>
        <Button size="md" variant="filled" leftSection={<IconPlus size={18} />}>
          Add Project
        </Button>
      </Group>
      <Group grow justify="space-between" wrap="nowrap" gap="xs" w="100%">
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
          miw={{ sm: 200, md: 400 }}
        />
        <Group grow gap="xs" wrap="nowrap">
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
        </Group>
      </Group>
      <Table.ScrollContainer minWidth={200} w="100%">
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
      </Table.ScrollContainer>
      <Pagination total={10} />
    </Flex>
  );
}
