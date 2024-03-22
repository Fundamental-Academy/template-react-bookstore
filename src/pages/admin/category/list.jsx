import { Link } from "react-router-dom";
import { Button, Flex, Table, Title, ActionIcon } from "@mantine/core";
import { IconPlus, IconPencil, IconTrash } from "@tabler/icons-react";

export default function PageAdminCategoryList() {
  const CATEGORY_DATA = [
    {
      id: 1,
      title: "Self Development",
    },
    {
      id: 2,
      title: "Novel",
    },
    {
      id: 3,
      title: "Piloshopy",
    },
  ];

  return (
    <>
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        mb="md"
        mt={30}
      >
        <Title order={2} c="blue.5">
          Category List
        </Title>

        <Button component={Link} to="create" leftSection={<IconPlus />}>
          Add
        </Button>
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {CATEGORY_DATA.map((category, i) => (
            <Table.Tr key={i}>
              <Table.Td>{category.title}</Table.Td>
              <Table.Td style={{ width: 150 }}>
                <Flex gap="sm">
                  <ActionIcon
                    component={Link}
                    variant="filled"
                    color="blue"
                    to={`${category.id}/edit`}
                  >
                    <IconPencil size={20} />
                  </ActionIcon>

                  <ActionIcon variant="filled" color="red">
                    <IconTrash size={20} />
                  </ActionIcon>
                </Flex>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
