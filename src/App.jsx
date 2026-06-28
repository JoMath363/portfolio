import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Project from "./pages/Project";
import Home from "./pages/Home";


function App() {
  const AppRouter = createBrowserRouter([
    {
      path: '',
      element: <Home/>
    },
    {
      path: '/project/:repo',
      element: <Project/>
    }
  ]);

  return (
    <RouterProvider router={AppRouter}/>
  )
}

export default App
