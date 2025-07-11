import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const API_URL = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
   {
      path: "/",
      element: <App></App>,
      loader: async () => {
         const res = await fetch(`${API_URL}/coffee`);
         const data = await res.json();
         return data;
      },
   },
   {
      path: "addCoffee",
      element: <AddCoffee></AddCoffee>,
   },
   {
      path: "updateCoffee/:id",
      element: <UpdateCoffee></UpdateCoffee>,
      loader: ({ params }) => fetch(`${API_URL}/coffee/${params.id}`),
   },
   {
      path: "/signUp",
      element: <SignUp></SignUp>,
   },
   {
      path: "/signin",
      element: <SignIn></SignIn>,
   },
   {
      path: "/users",
      element: <Users></Users>,
      loader: () => fetch(`${API_URL}/user`),
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
   </StrictMode>
);
