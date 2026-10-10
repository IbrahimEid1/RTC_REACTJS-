import { useState } from "react";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import { v4 as uuidv4 } from 'uuid'


function App() {
const [userInfo , setUserinfo ]= useState([
  {id:uuidv4() , name:"Ibrahim", age:22, Job:"UI & UX Designer"},
  {id:uuidv4() ,  name:"Ahmed", age:30, Job:"Front-End Dev"},{id:3, name:"Mahmoud", age:35, Job:"Back-End Dev"}
] )
const decrementAge=(uId)=>{
  // let userIndex = userInfo.findIndex((usr)=> usr.id === uId) 
  // // == 0 
  // console.log(userIndex);
  // userInfo[userIndex] = {...userInfo[userIndex] , Age:userInfo[userIndex].Age + 1 }
  // // userInfo[0] = {...userInfo[userIndex]}, Age:userInfo
  // setUserinfo([...userInfo])
  // console.log(userInfo);
  setUserinfo(userInfo.map((usr)=>usr.id === uId ? {...usr , Age:usr.Age - 1 } : usr ))
}
const handelIncrement =(userId)=>{
  console.log(userId);
  
  setUserinfo(userInfo.map((usr)=>usr.id === userId ? {...usr , Age:usr.Age +1 } : usr ))

}
console.log("Hello ");

const handelDelete =()=> {
  setUserinfo(userInfo.filter((usr)=>usr.Age <=25))  
  console.log(userInfo);
  
}
const handelusers =  (users)=>{
setUserinfo([...userInfo , users])  
}       
  return (
    <nav>
    <AddUser handelusers={handelusers}/>
       { 
        userInfo.map((usr)=>(<Users {...usr} key={usr.id} handelIncrement={handelIncrement} decrementAge={decrementAge} handelDelete={handelDelete} />))
       }
    </nav>
  )
}                                              

export default App


