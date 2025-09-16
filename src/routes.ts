import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages";
import ProjectDetail from "./pages/projects/[id]";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "projects/:id", Component: ProjectDetail },
    ],
  },
]);

export default routes;
