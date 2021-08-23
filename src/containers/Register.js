import axios from "axios";
import React from "react";
import {useState, useReducer} from "react";
import {useDispatch} from 'react-redux';
import {userRegistration} from '../redux/actions/index';


function Register(){
    const [form, setform] = useState({
        username:"",
        password:"",
        email:""
    })

    const handleReset = () => {
      const v = document.getElementsByTagName("input");
      console.log(v);
     for(let i =0;i<v.length;i++){
       v[i].value="";
     }
    
    };
    
const handleClick =(event)=>{
event.preventDefault();
console.log(form);
registerUser(form);


}

const dispatch = useDispatch();

const registerUser =  async (data) => {
    const response = await axios.post("http://localhost:8089/api/v1.0.0/user/register",data)
      .catch((err) => {
        console.log("Err: ", err);
      });
      if(response!=undefined){
        alert(response.data.message);
        dispatch(userRegistration(response.data));
        handleReset();
      
      }
        
        else{
            alert('Not Registered')
        }
      
   
  };

const updateState = (event)=>{
        setform({...form,[event.target.name]:event.target.value});

    }

   
    return(
        <React.Fragment>
            <br></br><br></br>
            <form>
                <br></br>
Enter Username: <input type="text" name="username" onChange={updateState}></input><br></br><br></br>
Enter Password: <input type="password" name="password" onChange={updateState}></input><br></br><br></br>
Enter Email: <input type="email" name="email" onChange={updateState}></input><br></br><br></br>
<button onClick={handleClick}>Register</button>
            </form>
    
     </React.Fragment>
    )
}

export default Register;