import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AppDetails from "../Pages/AppDetails";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement:<ErrorPage/>,

    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      {
        path: "/app-details/:id",
        Component: AppDetails,
      },
      // { path: "*", Component: ErrorPage },
      // { path: "/app-details/:id", Component: ErrorPageApps },
    ],
  },
]);
export default router;
