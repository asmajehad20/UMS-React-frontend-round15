import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import Register from "./components/register/Register";
import MainLayout from "./layout/MainLayout";
import Products from "./components/products/Products";
import DashboardLayout from './layout/DashboardLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      }
    ]
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
    ]
  }
]);

export default router;
