import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Services from "./Pages/Services.jsx";
import AboutUs from "./Pages/AboutUs";
import Features from "./Pages/Features";
import Contact from "./Pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout"; // ✅ import Layout

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Navbar always rendered
    children: [
      { index: true, element: <App /> }, // "/" route
      { path: "services", element: <Services /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "projects", element: <Features /> },
      { path: "contact-us", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
