import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function Home() {
  return (
    <div>
      <h1>Welcome to AlgoArena!</h1>
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <NotFoundPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
