import {useState, useReducer} from "react";
import axios from "axios";

function Login(){
    const [form, setform] = useState({
        username:"",
        password:""
    })

    const updateState = (event)=>{
        setform({...form,[event.target.name]:event.target.value});

    }

    const handleClick =(event)=>{
        event.preventDefault();
        console.log(form);
        loginUser(form);
    }
        

    const loginUser =  async (data) => {
        const response = await axios.post("http://localhost:8089/api/v1.0.0/user/login",data)
          .catch((err) => {
            console.log("Err: ", err);
          });
          if(response!=undefined){
            alert(response.data.message);
      
          
          }
            
            else{
                alert('Incorrect username or password');
            }
          
       
      };

  

    return(
     <>
        <br></br><br></br>
        <form>
            <br></br>
Enter Username: <input type="text" name="username" onChange={updateState}></input><br></br><br></br>
Enter Password: <input type="password" name="password" onChange={updateState}></input><br></br><br></br>
<button onClick={handleClick}>Login</button>              <a href='#'>Forgot password?</a><br></br>

OR<br></br><br></br>

<button onClick>Request OTP</button> <br></br><br></br>
        </form>

 </>
    )
}

export default Login;