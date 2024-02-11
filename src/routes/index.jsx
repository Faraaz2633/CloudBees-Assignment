import { Navigate, useRoutes } from "react-router-dom";

// layouts
import RootLayout from "../layouts/RootLayout";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          element: <Navigate to="/users" replace />,
          index: true,
        },
        {
          path: "users",
          element: <div>users</div>,
        },
        {
          path: "users/:id",
          element: <div>single user</div>,
        },
      ],
    },
  ]);
}
