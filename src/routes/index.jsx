import { Navigate, useRoutes } from "react-router-dom";

// layouts
import RootLayout from "../layouts/RootLayout";

// components
import Users from "../components/users";
import SingleUser from "../components/singleUser";

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
          element: <Users />,
        },
        {
          path: "users/:id",
          element: <SingleUser />,
        },
      ],
    },
  ]);
}
