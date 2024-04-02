import { Link } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export function BookCard({ title, summary, imageSrc, price, link }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ width: "320px" }}
    >
      <Card.Section>
        <Image src={imageSrc} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">
          Rp {Intl.NumberFormat("id-ID").format(price)}{" "}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {summary}
      </Text>

      <Button
        component={Link}
        to={link}
        color="blue"
        fullWidth
        mt="md"
        radius="md"
      >
        Detail
      </Button>
    </Card>
  );
}
