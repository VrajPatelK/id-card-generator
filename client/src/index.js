import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SigninPage from "./pages/SigninPage";
import RootLayout from "./components/Root";
import ProfilePage from "./pages/ProfilePage";
import CreateUserPage from "./pages/CreateUserPage";
import UsersPage from "./pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <SigninPage />,
      },
      {
        path: "/profile/:id",
        element: <ProfilePage />,
      },
      {
        path: "/create-user",
        element: <CreateUserPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
