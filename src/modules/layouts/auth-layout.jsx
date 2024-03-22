import { Outlet } from "react-router-dom";
import { Container } from "@mantine/core";

export function AuthLayout() {
  return (
    <Container
      size={420}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Outlet />
    </Container>
  );
}
