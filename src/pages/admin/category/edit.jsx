import { Link, Form } from "react-router-dom";
import { Button, Flex, Group, TextInput, Title } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";

export default function PageAdminCategoryEdit() {
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
          Edit Category
        </Title>

        <Button
          component={Link}
          to="/admin/category"
          variant="outline"
          leftSection={<IconArrowBack />}
        >
          Back
        </Button>
      </Flex>

      <Form
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
        }}
      >
        <TextInput
          withAsterisk
          size="md"
          label="Title"
          placeholder="Input category name"
          name="name"
          required
          defaultValue={"Novel"}
        />

        <Group position="left" mt="md">
          <Button fullWidth type="submit" size="md">
            Submit
          </Button>
        </Group>
      </Form>
    </>
  );
}
