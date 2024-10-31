import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard";
import RootLayout from "../layouts/rootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/mail",
        element: <Dashboard />,
      },
      {
        path: "/documents",
        element: <Dashboard />,
      },
      {
        path: "/analytics",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
