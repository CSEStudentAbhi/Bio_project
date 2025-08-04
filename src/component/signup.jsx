import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sifLogo from '../Images/sigggg.jpg'
import './sigg.css'
import axios from 'axios'

function Signup() {
  const [email, setEamil] = useState()
  const [password, setPasssword] = useState()
  const [result, setResult] = useState()
  const [wrongemail, setWorngemail]=useState()
  var navigate = useNavigate()
  const [message,setMessage]=useState()
  const mainData = {
    Email: email,
    Password: password
  }
  // const askmeeting = async (e) => {
  //   alert("hi")
  //   // e.prventDefault()
  //   e.preventDefault()
  //   await axios.post('http://localhost:8081/login', mainData)
  //   .then(res=>{
  //     // console.log(res.data.User.Password)
  //     alert("Axios Connected")
  //     if(res.data.User.Email===mainData.Email){


  //         alert("Login in Sucessfully")

  //       }
  //       else{
  //         alert("Bad Credencials")
  //       }



  //   })
  //     // .then(res => {
  //     //   setResult(res.data.message)
  //     //   // alert(res.data.message)
  //     //   console.log(result)


  //     // }
  //     // )
  // }

  const askMeeting = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setResult("Enter Email and Password")
      
      setTimeout(() => {
        setResult("")
         
      }, 1500)
    }
    else {
      setMessage("")
      
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if (regEx.test(email)) {
        setWorngemail("")
        if (regexPassword.test(password)) {
          setMessage("")
          await axios.post('http://localhost:8081/login', mainData)
            .then(res => {
              setResult(res.data.message)
              // alert(message)
              setTimeout(() => {
                setResult("")
                 
              }, 300)
              setResult(res.data.message)
              if (res.data.User.Email === email) {
                console.log("navigating")
                const main_user = res.data.User
                console.log(main_user)
                setResult(res.data.message)
                
                setTimeout(() => {
                  setResult("")
                   
                  const maindatas = {
                    id: res.data.User._id,
                    givenName: res.data.User.Name,
                    
                    email: res.data.User.Email,
                    dateofBirth: res.data.User.Date_of_Birth,
  
                    Mob: res.data.User.Mobile_No
                  }
                  console.log(maindatas)
                  const id = maindatas;
                  alert("Login Sucessfully")
                  navigate("/cart", { state: { id: id } })
                }, 300)

              }
              else {
                setResult(res.data.message)
                
                setTimeout(() => {
                  setResult("")
                   
                  navigate("/register")
                }, 300)

              }
            })
        }
        else {
          setMessage("Invalid Password")
           
        }
      }

      else if (!regEx.test(email) && email !== "") {
        setWorngemail("Please Enter Valid Email")
        alert(wrongemail)
        setTimeout(() => {
          setWorngemail("")
        }, 300)
      }

    }
  }


  console.log(result)
  console.log(mainData)
  console.log(email, password)
  return (
    <div className='primary '>
      <div className='d-flex justify-content-center'>
        <img src={sifLogo} className='siglogo' width={"25%"} />
      </div>
      <div className='d-flex justify-content-center'>
        <h1>Login</h1>
      </div>
      <div className='d-flex justify-content-center iii'>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => { setEamil(e.target.value) }} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => { setPasssword(e.target.value) }} id="exampleInputPassword1" />
          </div>

          <input type="button" onClick={askMeeting} value={"Login"} className="btn btn-primary flexx" />
          <div className="mb-3 ">
            <label for="exampleInputPassword1" className="form-label fgct forgetp">forget Password?</label>
            <label for="exampleInputPassword1" className="form-label fgct koushik"><Link className='Link' to="/register">Create new Account</Link></label>

          </div>
        </form>
      </div>
    </ div>
  )
}

export default Signup
