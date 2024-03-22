import { Form, Link } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Button,
} from "@mantine/core";

import classes from "./style.module.css";

export function PageLogin() {
  return (
    <>
      <Title ta="center" className={classes.title}>
        Bookstore Login
      </Title>

      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor component={Link} to="/auth/register">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Form>
          <TextInput label="Username" placeholder="Input username" required />

          <PasswordInput
            label="Password"
            placeholder="Input password"
            required
            mt="md"
          />

          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Form>
      </Paper>

      <Text c="dimmed" size="md" ta="center" mt={30}>
        <Anchor component={Link} to="/">
          Back to Home
        </Anchor>
      </Text>
    </>
  );
}
