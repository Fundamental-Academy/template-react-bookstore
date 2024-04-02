import { Link, NavLink } from "react-router-dom";
import {
  AppShell,
  Container,
  Group,
  Burger,
  Text,
  Button,
  Box,
} from "@mantine/core";

import classes from "./style.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/admin/book", label: "Book" },
];

export function Header({ opened, toggle }) {
  return (
    <AppShell.Header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          FunBooks
        </Text>

        <Group gap={5} visibleFrom="xs">
          {links.map((item, i) => (
            <NavLink
              className={({ isActive }) => {
                return isActive ? classes.active : classes.link;
              }}
              key={i}
              to={item.link}
            >
              {item.label}
            </NavLink>
          ))}
        </Group>

        <AppShell.Navbar hiddenFrom="xs">
          <Box
            style={{
              width: "100%",
              padding: "10px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            component="div"
          >
            {links.map((item, i) => (
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                onClick={toggle}
                key={i}
                to={item.link}
              >
                {item.label}
              </NavLink>
            ))}

            <Group>
              <Button component={Link} to="/auth">
                Log in
              </Button>
            </Group>
          </Box>
        </AppShell.Navbar>

        <Group visibleFrom="xs">
          <Button component={Link} to="/auth">
            Log in
          </Button>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </AppShell.Header>
  );
}
