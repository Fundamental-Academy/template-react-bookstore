import { Link } from "react-router-dom";
import { Button, Flex, Title, Image, Text, Badge, Group } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";

export default function PageAdminBookDetail() {
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
          Book Detail
        </Title>

        <Button
          component={Link}
          to="/book"
          variant="outline"
          leftSection={<IconArrowBack />}
        >
          Back
        </Button>
      </Flex>

      <Flex align="center" gap="xl">
        <Image
          radius="md"
          miw={{ base: "100%", sm: 500 }}
          h={{ base: 300, sm: 600 }}
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          alt="Book img"
        />

        <Flex direction="column" gap="xs">
          <Flex direction="column" gap="xs" style={{ width: 500 }}>
            <Badge color="blue">Philosophy</Badge>

            <Title order={1}>Sang Alkemis</Title>

            <Text size="xl" fs="italic">
              Pages: 100
            </Text>

            <Title order={2} c="blue">
              Rp 500.000
            </Title>

            <Text size="md">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industrys standard dummy.
            </Text>
          </Flex>

          <Group position="left" mt="sm">
            <Button
              component={Link}
              to="/admin/book/1/edit"
              color="gray"
              variant="outline"
            >
              Edit Book
            </Button>
          </Group>
        </Flex>
      </Flex>
    </>
  );
}
