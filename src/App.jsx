import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",element:<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:"*",element:<NotFound/>},
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
