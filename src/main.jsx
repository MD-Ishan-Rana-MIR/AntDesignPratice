import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@ant-design/v5-patch-for-react-19";

import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}></RouterProvider>
);
