import { Link } from "react-router-dom";
import { Button, Flex, Title, Image, Text, Badge, Paper } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";

export default function PageBookDetail() {
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
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            alt="Book img"
          />

          <Flex direction="column" gap="xs">
            <Flex direction="column" gap="xs" style={{ width: 500 }}>
              <Badge color="blue">Philosophy</Badge>

              <Title order={1}>Sang Alkemis dan Pengembala Domba</Title>

              <Text size="xl" fs="italic">
                Pages: 100
              </Text>

              <Title order={2} c="pink">
                Rp 500.000
              </Title>

              <Text size="md">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Officiis
                similique, adipisci aspernatur minus quo architecto quas.
                Pariatur tempora earum rem doloribus dolor iure voluptatibus
                animi, perspiciatis alias ut suscipit id?
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Paper>
    </>
  );
}
