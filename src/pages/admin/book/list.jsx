import { Link } from "react-router-dom";
import { Button, Flex, Table, Title, Badge, ActionIcon } from "@mantine/core";
import { IconPlus, IconPencil, IconEye, IconTrash } from "@tabler/icons-react";

export default function PageAdminBookList() {
  const BOOK_DATA = [
    {
      id: 1,
      title: "Sang Alkemis",
      author: "Paulo",
      summary:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.",
      pages: 200,
      price: 400000,
      genre: "Philosophy",
    },
    {
      id: 2,
      title: "Sang Penguasa",
      author: "The Light",
      summary:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      pages: 200,
      price: 400000,
      genre: "Self Development",
    },
    {
      id: 3,
      title: "Seni Merayu Tuhan",
      author: "Yogs The Kull",
      summary:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      pages: 200,
      price: 400000,
      genre: "Novel",
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
          Book List
        </Title>

        <Button component={Link} to="create" leftSection={<IconPlus />}>
          Add
        </Button>
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Summary</Table.Th>
            <Table.Th>Pages</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Genre</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {BOOK_DATA.map((book, i) => (
            <Table.Tr key={i}>
              <Table.Td>{book.title}</Table.Td>
              <Table.Td>{book.author}</Table.Td>
              <Table.Td style={{ width: 300 }}>{book.summary}</Table.Td>
              <Table.Td>{book.pages}</Table.Td>
              <Table.Td>Rp. {book.price}</Table.Td>
              <Table.Td>
                <Badge>{book.genre}</Badge>
              </Table.Td>
              <Table.Td style={{ width: 150 }}>
                <Flex gap="sm">
                  <ActionIcon
                    component={Link}
                    variant="filled"
                    color="green"
                    to={`${book.id}/detail`}
                  >
                    <IconEye size={20} />
                  </ActionIcon>

                  <ActionIcon
                    component={Link}
                    variant="filled"
                    color="blue"
                    to={`${book.id}/edit`}
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
