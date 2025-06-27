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
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            AlgoArena
          </div>
        </div>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <NotFoundPage /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;