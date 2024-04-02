import { Link, useLoaderData } from "react-router-dom";
import { Button, Flex, Title, Image, Text, Badge, Paper } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import fetchAPI from "../../helpers/fetchAPI";

export async function loader({ params }) {
  const payloadBook = await fetchAPI(
    `https://real-bookstore-api.vercel.app/books/${params.id}`
  );
  const book = payloadBook.data;

  return {
    book,
  };
}

export default function PageBookDetail() {
  const { book } = useLoaderData();

  return (
    <>
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        mb="m
        d"
        mt={30}
      >
        <Title order={2} c="blue.5">
          Book Detail
        </Title>

        <Button
          component={Link}
          to="/"
          variant="outline"
          leftSection={<IconArrowBack />}
        >
          Back
        </Button>
      </Flex>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Flex align="center" gap="xl">
          <Image
            radius="md"
            miw={{ base: "100%", sm: 500 }}
            h={{ base: 300, sm: 600 }}
            src={book.img}
            alt="Book img"
          />

          <Flex direction="column" gap="xs">
            <Flex direction="column" gap="xs" style={{ width: 500 }}>
              <Badge color="blue">{book.genre.genre}</Badge>

              <Title order={1}>{book.title}</Title>

              <Text size="xl" fs="italic">
                Pages: {book.pages}
              </Text>

              <Title order={2} c="pink">
                Rp {Intl.NumberFormat("id-ID").format(book.price)}
              </Title>

              <Text size="md">{book.summary}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Paper>
    </>
  );
}
