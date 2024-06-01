import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./components/Browse"
import Header from "./components/Header"
import Login from "./components/Login"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { auth } from "./utils/firebase"
import { addUser, removeUser } from "./utils/userSlice"
import { onAuthStateChanged } from "firebase/auth"



const Body = () =>{
  const dispatch = useDispatch()
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

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email, photoURL} = user;
        dispatch(addUser({uid : uid, displayName : displayName, email : email, photoURL : photoURL}))
      } else {
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}


export default Body