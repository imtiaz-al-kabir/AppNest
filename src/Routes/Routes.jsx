import { createBrowserRouter } from "react-router";
import ErrorPageApps from "../Components/ErrorPageApps";
import RootLayout from "../Layouts/RootLayout";
import AppDetails from "../Pages/AppDetails";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // Default for this layout
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apps",
        element: <Apps />,
        errorElement: <ErrorPageApps />, // Custom error for this route
      },
      {
        path: "installation",
        element: <Installation />,
        errorElement: <ErrorPage />, // Same as default, or you can change
      },
      {
        path: "app-details/:id",
        element: <AppDetails />,
        errorElement: <ErrorPageApps />, // Custom error for AppDetails
      },
      {
        path: "*",
        element: <ErrorPage />, // Fallback 404
      },
    ],
  },
]);
export default router;
