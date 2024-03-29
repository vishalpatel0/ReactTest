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
import { user } from "./store/Stoqre.jsx";
import { Provider } from "react-redux";

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
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={user}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
