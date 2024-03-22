import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={routes} />
    </MantineProvider>
  );
}

export default App;
