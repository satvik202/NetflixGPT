import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./components/Browse"
import Header from "./components/Header"
import Login from "./components/Login"

const Body = () =>{
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path : "/browse",
      element : <Browse/>
    }
  ])


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}


export default Body