import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import Root from "./layout/Root";
import HomePage from "./pages/Home/Home";
import AllToysPage from "./pages/AllToys";
import MyToysPage from "./pages/MyToys";
import AddToyPage from "./pages/AddToy";
import BlogsPage from "./pages/Blogs";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import AboutPage from "./pages/About";
import AuthProvider from "./context/authProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Details from "./components/AllToy/ToyDetails/Details";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "all-toys",
        element: <AllToysPage />,
        loader: () =>
          fetch(
            "https://b7a11-toy-marketplace-server-side-jobayer98.vercel.app/total-toy"
          ),
      },
      {
        path: "toys/:toyId",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-jobayer98.vercel.app/toys/${params.toyId}`
          ),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoute>
            <MyToysPage />
          </PrivateRoute>
        ),
      },
      {
        path: "add-toy",
        element: (
          <PrivateRoute>
            <AddToyPage />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
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
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
