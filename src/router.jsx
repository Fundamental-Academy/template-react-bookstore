import { Outlet, createBrowserRouter } from "react-router-dom";

// Layouts
import { ClientLayout } from "./modules/layouts/client-layout";
import { AuthLayout } from "./modules/layouts/auth-layout";
import { AdminLayout } from "./modules/layouts/admin-layout";

// Client Pages
import { HomePage } from "./pages/client/home";
import PageBookDetail from "./pages/client/book-detail";

// Auth Pages
import { PageLogin } from "./pages/auth/login";
import { PageRegister } from "./pages/auth/register";

// Admin Book Pages
import PageAdminBookList from "./pages/admin/book/list";
import PageAdminBookCreate from "./pages/admin/book/create";
import PageAdminBookEdit from "./pages/admin/book/edit";
import PageAdminBookDetail from "./pages/admin/book/detail";

// Admin Category Pages
import PageAdminCategoryList from "./pages/admin/category/list";
import PageAdminCategoryCreate from "./pages/admin/category/create";
import PageAdminCategoryEdit from "./pages/admin/category/edit";

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
      },
      {
        path: "book/:id",
        element: <PageBookDetail />,
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
      {
        path: "register",
        element: <PageRegister />,
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
      {
        path: "category",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PageAdminCategoryList />,
          },
          {
            path: "create",
            element: <PageAdminCategoryCreate />,
          },
          {
            path: ":id/edit",
            element: <PageAdminCategoryEdit />,
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
