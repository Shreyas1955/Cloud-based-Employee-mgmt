import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import img1 from "../components/logo.png"


export const Home = ()=>{
   const [db,setdb]=useState([]);
   const [page,setpage]=useState(1);
   const navigate=useNavigate()
   useEffect(()=>{
    axios.get(`https://teachers-data.herokuapp.com/teachers`).then((res)=>{
        setdb(res.data)
      }) 
   },[])

   const handlesorthtl = ()=>{
       axios.get("https://teachers-data.herokuapp.com/teachers").then((res)=>{
           setdb(res.data.sort((a,b)=>{
               return b.age-a.age;
           }))
       })
   }
   
   const handlesortlth = ()=>{
    axios.get("https://teachers-data.herokuapp.com/teachers").then((res)=>{
        setdb(res.data.sort((a,b)=>{
            return a.age-b.age;
        }))
    })
}
const handleall = ()=>{
    axios.get(`https://teachers-data.herokuapp.com/teachers`).then((res)=>{
        setdb(res.data)
      }) 
}
const handlefiltermen = ()=>{
    axios.get('https://teachers-data.herokuapp.com/teachers').then((res)=>{setdb(res.data.filter((e)=>{if (e.gender==="Male") {return true} else{return false}}))})
}
const handlefilterwomen = ()=>{
    axios.get('https://teachers-data.herokuapp.com/teachers').then((res)=>{setdb(res.data.filter((e)=>{if (e.gender==="Female") {return true} else{return false}}))})
}

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
          <div className="navbar"></div>

        <div class="home">
            
        
          <button onClick={()=>{navigate("/teachers")}}>ADD TEACHERS</button>
          <button onClick={()=>{navigate("/register")}}>ADD ADMINS</button><br></br>
          <h3>SORT BY AGE</h3>
          <button onClick={handlesorthtl}>High To Low</button>
          <button onClick={handlesortlth}>Low To High</button>
          <h3>Filter by gender</h3>
          <button onClick={handlefiltermen}>MEN</button>
          <button onClick={handlefilterwomen}>WOMEN</button>
          <button onClick={handleall}>ALL</button>

          <div className="tablediv">
          <table>
              <thead>
                  <tr>
                     <th>Name</th>
                     <th>Address</th>
                     <th>Age</th>
                     <th>Gender</th>
                     <th>Salary</th>
                 </tr>
              </thead>
             <tbody>
                 {db.map((e)=><tr key={e.id}>
                   <td>{e.name}</td>
                   <td>{e.address}</td>
                   <td>{e.age}</td>
                   <td>{e.gender}</td> 
                   <td>{e.salary}</td>
                 </tr>)}
             </tbody>
          </table>
         
          </div>
        </div></>
    )
}