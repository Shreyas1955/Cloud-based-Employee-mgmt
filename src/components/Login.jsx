import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { login } from "../redux/login/action";
import img1 from "../components/logo.png";


export const Login = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       email:"",
       password:""
    })
    const {isAuthenticated} = useSelector(state=>state.login)
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const handleSubmit = ()=>{
        dispatch(login({email:form.email, password:form.password}))
    }

    if(isAuthenticated) return <Navigate to={'/'}/>
    return (
        <>
         <div className="logodiv">
        <div className="log">
            <img src={img1}></img>
        </div>
        <div className="heading">
        <h1> Lokmanya Tilak College Of Engineering</h1>
        </div>
          </div>
        <div className="login">
            <h1>Admin Login</h1>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="email" placeholder="Enter Email Address"/><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="password" placeholder="Enter Password"/><br></br>
            <button onClick={()=>{handleSubmit()}}>LOGIN</button>
           
        </div></>
    )
}