import { useState } from "react";
import { Link, Form } from "react-router-dom";
import {
  Button,
  Flex,
  Group,
  NumberInput,
  Select,
  TextInput,
  Textarea,
  Title,
  Image,
  FileInput,
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";

export default function PageAdminBookCreate() {
  const [bookImage, setBookImage] = useState(null);

  function previewBookImage(file) {
    const imageUrl = URL.createObjectURL(file);
    setBookImage(imageUrl);
  }

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
          Add Book
        </Title>

        <Button
          component={Link}
          to="/admin/book"
          variant="outline"
          leftSection={<IconArrowBack />}
        >
          Back
        </Button>
      </Flex>

      <Flex direction={{ base: "column", sm: "row" }} gap={30}>
        <Image
          radius="md"
          miw={{ base: "100%", sm: 500 }}
          mah={{ base: 300, sm: 600 }}
          src={bookImage}
          onLoad={() => URL.revokeObjectURL(bookImage)}
          fallbackSrc="https://placehold.co/600x600?text=Image Preview"
        />

        <Form
          method="post"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
        >
          <FileInput
            withAsterisk
            size="md"
            label="Book Image"
            placeholder="Select book image"
            name="image"
            value={bookImage}
            onChange={(file) => previewBookImage(file)}
            required
          />

          <TextInput
            withAsterisk
            size="md"
            label="Title"
            placeholder="Input book title"
            name="title"
            required
          />

          <TextInput
            withAsterisk
            size="md"
            label="Author"
            placeholder="Input book author"
            name="author"
            required
          />

          <Textarea
            withAsterisk
            size="md"
            placeholder="Input book summary"
            label="Summary"
            name="summary"
            rows={4}
            required
          />

          <NumberInput
            withAsterisk
            size="md"
            label="Pages"
            placeholder="Input book total pages"
            name="pages"
            required
          />

          <NumberInput
            withAsterisk
            size="md"
            label="Price"
            placeholder="Input book price"
            name="price"
            required
          />

          <Select
            label="Genre"
            placeholder="Please choose one"
            withAsterisk
            size="md"
            name="genreId"
            required
          />

          <Group position="left" mt="md">
            <Button fullWidth type="submit" size="md">
              Submit
            </Button>
          </Group>
        </Form>
      </Flex>
    </>
  );
}
