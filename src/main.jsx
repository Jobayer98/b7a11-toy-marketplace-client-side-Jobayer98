import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import Root from "./layout/Root";
import HomePage from "./pages/Home";
import AllToysPage from "./pages/AllToys";
import MyToysPage from "./pages/MyToys";
import AddToysPage from "./pages/AddToys";
import BlogsPage from "./pages/Blogs";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "all-toys",
        element: <AllToysPage />,
      },
      {
        path: "my-toys",
        element: <MyToysPage />,
      },
      {
        path: "add-toys",
        element: <AddToysPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
