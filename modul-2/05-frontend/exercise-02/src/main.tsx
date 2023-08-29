import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./errorPage.tsx";
import Counter from "./page/counter.tsx";
import Stopwatch from "./page/stopwatch.tsx";
import Filter from "./page/filter.tsx";
import Fetch from "./page/fetch.tsx";
import Endpoint from "./page/endpoint/endpoint.tsx";
import Message from "./page/endpoint/message.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/stopwatch",
    element: <Stopwatch />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/fetch",
    element: <Fetch />,
  },
  {
    path: "/endpoint",
    element: <Endpoint />,
    children: [
      {
        path: "message",
        element: <Message />,
      },
    ],
  },
  {
    path: "/message",
    element: <Message />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
