import { AppShell, Box, Container, Text } from "@mantine/core";
import { Outlet, redirect } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { useDisclosure } from "@mantine/hooks";

export function AdminLayout() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "xs", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />

      <AppShell.Main style={{ padding: 0 }}>
        <Box
          style={{
            alignItems: "center",
            backgroundImage:
              "linear-gradient(to bottom right, #0090CD, #3CC5FE)",
            display: "flex",
            height: "200px",
            justifyContent: "center",
            marginTop: 60,
            position: "relative",
            width: "100%",
          }}
          component="div"
        >
          <Text size={28} lh={"sm"} fw={700} c="white">
            Admin Fundamental Bookstore
          </Text>
        </Box>

        <Container size="lg">
          <Outlet />
        </Container>
      </AppShell.Main>

      <Footer />
    </AppShell>
  );
}
