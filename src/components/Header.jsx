import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { useEffect } from "react"
import { LOGO } from "../utils/constants"

const Header = ()=>{
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const handleSignOut = () => {
        signOut(auth).then(() => {})
        .catch((error) => {
            console.log(error.message)
          });
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid, displayName, email, photoURL} = user;
            dispatch(addUser({uid : uid, displayName : displayName, email : email, photoURL : photoURL}))
            navigate("/browse");
          } else {
            dispatch(removeUser())
            navigate("/");
          }
        });
        return ()=> unsubscribe();
      }, [])


    return (
        <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img 
        className="w-44 px-2 py-4"
        src={LOGO} alt="logo"></img>
        {user && <div className="mt-5 mr-10 flex">
            <img className="rounded-lg w-12 h-12" src={user?.photoURL}></img>
            <button className="text-white font-bold" onClick={handleSignOut}>(Sign Out)</button>
        </div>}
        </div>
    )
}

export default Header