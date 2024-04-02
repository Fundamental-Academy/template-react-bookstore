import { Outlet, createBrowserRouter } from "react-router-dom";

// Layouts
import { ClientLayout } from "./modules/layouts/client-layout";
import { AuthLayout } from "./modules/layouts/auth-layout";
import { AdminLayout } from "./modules/layouts/admin-layout";

// Client Pages
import { HomePage, loader as HomeLoader } from "./pages/client/home";
import PageBookDetail, {
  loader as BookDetailLoader,
} from "./pages/client/book-detail";

// Auth Pages
import { PageLogin } from "./pages/auth/login";

// Admin Book Pages
import PageAdminBookList from "./pages/admin/book/list";
import PageAdminBookCreate from "./pages/admin/book/create";
import PageAdminBookEdit from "./pages/admin/book/edit";
import PageAdminBookDetail from "./pages/admin/book/detail";

// Not Found Page
import { PageNotFound } from "./pages/not-found";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: HomeLoader,
      },
      {
        path: "book/:id",
        element: <PageBookDetail />,
        loader: BookDetailLoader,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <PageLogin />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "book",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PageAdminBookList />,
          },
          {
            path: "create",
            element: <PageAdminBookCreate />,
          },
          {
            path: ":id/edit",
            element: <PageAdminBookEdit />,
          },
          {
            path: ":id/detail",
            element: <PageAdminBookDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
