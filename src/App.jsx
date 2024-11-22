import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;