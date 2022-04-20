export const ADDTEACHER_LOADING = "ADDTEACHER_LOADING";
export const ADDTEACHER_SUCCESS = "ADDTEACHER_SUCCESS";
export const ADDTEACHER_FAILURE = "ADDTEACHER_FAILURE";

export const addteacherLoading=()=>({
    type:ADDTEACHER_LOADING,
});

export const addteacherSuccess = (payload)=>({
    type:ADDTEACHER_SUCCESS,
    payload
});

export const addteacherFailure = ()=>({
    type:ADDTEACHER_FAILURE,
})

export const addteacher = ({name,address,gender,age,salary})=>(dispatch)=>{
    dispatch(addteacherLoading())
        fetch(`https://teachers-data.herokuapp.com/teachers`,{
          method:"post",
          body:JSON.stringify({
              "name":name,
              "address":address,
              "gender":gender,
              "age":age,
              "salary":salary
            }),
          headers:{
              "Content-Type":"application/json"
          }
        }).then(res=>res.json()).then((res)=>dispatch(addteacherSuccess()))
        .catch(error=>dispatch(addteacherFailure()))
}