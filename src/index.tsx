import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATHS } from "./paths";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import App from "./App";
import Likes from "./pages/Likes";

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <App />,
  },
  {
    path: PATHS.likes,
    element: <Likes />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
