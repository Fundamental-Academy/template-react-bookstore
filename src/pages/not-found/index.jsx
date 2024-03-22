import { Link } from "react-router-dom";
import { Title, Text, Button, Container, Group } from "@mantine/core";

import classes from "./style.module.css";

export function PageNotFound() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className={classes.label}>404</div>

      <Title className={classes.title}>You have found a secret place.</Title>

      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>

      <Group justify="center" mt="md">
        <Button component={Link} to="/" variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
