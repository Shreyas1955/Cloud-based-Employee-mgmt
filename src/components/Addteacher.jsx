import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { addteacher } from "../redux/addteacher/action";


export const Addteacher  = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       name:"",
       address:"",
       gender:"",
       age:0,
       salary:0,

    })
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const handleSubmit = ()=>{
        dispatch(addteacher({ name:form.name,address:form.address,gender:form.gender, age:form.age,salary:form.salary}))
        navigate("/")
    }
    return (
        <div className="addteacher">
            <h1>Add Faculty Members</h1>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" placeholder="name" /><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="address" placeholder="address" /><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="gender" placeholder="gender"/><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="number" name="" id="age" placeholder="age"/><br></br>
            <input onChange={(e)=>{inputHandle(e)}} type="number" name="" id="salary" placeholder="salary"/><br></br>
            <button onClick={()=>{handleSubmit()}}>ADD TEACHER</button>
           
        </div>
    )
}