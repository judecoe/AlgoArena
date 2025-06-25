import { useState } from "react";

const Dashboard = ({
  sidebar,
  children,
  className = "",
  collapsible = false,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(!collapsible);

  return (
    <div className={`flex w-full min-h-screen ${className}`}>
      {}
      {sidebar && (
        <>
          {}
          {collapsible && (
            <button
              className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? "✕" : "☰"}
            </button>
          )}

          {}
          <div
            className={`
              bg-gray-100 dark:bg-gray-900 
              ${
                collapsible
                  ? "fixed md:static top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out"
                  : ""
              }
              ${
                collapsible && !sidebarOpen
                  ? "-translate-x-full md:translate-x-0"
                  : ""
              }
              w-64 flex-shrink-0 overflow-y-auto
            `}
          >
            <div className="p-4">{sidebar}</div>
          </div>

          {}
          {collapsible && sidebarOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </>
      )}

      {}
      <main className="flex-1 w-full overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
