import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Template from "./template/Template.jsx";
import Home from "./Page/Home.jsx";
import About from "./Page/About.jsx";
import Services from "./Page/Services.jsx";
import Contact from "./Page/Contact.jsx";
import User from "./Page/User.jsx";
import Page1 from "./component/context/page1.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <h1>404 Error</h1>,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Template />}>
      <Route path="" element={<Home />} />
      <Route path="p1" element={<Page1 />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
