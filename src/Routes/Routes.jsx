import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AppDetails from "../Pages/AppDetails";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      { path: "/app-details/:id", Component: AppDetails },
    ],
  },
]);
export default router;
