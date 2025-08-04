import React, { useState } from 'react'
import './sigg.css'
import imglogo from '../Images/siglogoo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {
  var navigate = useNavigate()
  const [email, setEamil] = useState()
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [gender, setGender] = useState()
  const [dob, setDob] = useState()
  const [password, setPasssword] = useState()
  const [message, setMessage] = useState()
  const [pass, setPass]=useState()
  const MainData = {
    Name: name,
    Email: email,
    Phone: phone,
    Date_of_Birth: dob,
    Gender: gender,
    Password: password,
  }
  console.log(MainData)
  const submit = async (e) => {

    if (!email || !name || !phone || !gender || !dob || !password) {

      setMessage("Fill All Fields")
      alert(message)


    }
    else {
      const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if (regexPassword.test(password)) {
        await axios.post("http://localhost:8081/register", MainData)
          .then(res => {
            setMessage(res.data.message)
            setTimeout(() => {
              setMessage("")
            });
            navigate("/signup")
            alert("Register Sucessfully")

          }, 3000)
        console.log(MainData)
      }
      else{
        alert("Password Must contain Number Alpha Symbols")
        setPass("Password Must contain Number Alpha Symbols")
      }
    }
  }
  return (
    <div>

      <div className='primary_01 '>
        <div>
        <div class="modal-dialog modal-sm">{pass}</div>
        </div>
        <div>
          {
            message
          }
        </div>
        <div className='d-flex justify-content-center'>
          <img src={imglogo} className='siglogo' width={"25%"} />
        </div>
        <div className='d-flex justify-content-center'>
          <h1>Register</h1>
        </div>
        <div className='  iii'>
          <form >
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address: </label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={email}
                onChange={(e) => { setEamil(e.target.value) }}
              />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Name: </label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={name}
                onChange={(e) => (setName(e.target.value))}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Phone: </label>
              <input type={Number} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={phone}
                onChange={(e) => { setPhone(e.target.value) }}
              />

            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Date of Birth: </label>
              <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={dob}
                onChange={(e) => { setDob(e.target.value) }}
              />
            </div>

            <div className='md-3'>
              <label for="exampleInputEmail1" className="form-label">Gender: </label>


              <select className='btn btn-light'
                value={gender}
                onChange={(e) => { setGender(e.target.value) }}
              >
                <option className='options' >Gender</option>
                <option className='options' >Male</option>
                <option className='options' >Female</option>
                <option className='options' >other</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"
                value={password}
                onChange={(e) => { setPasssword(e.target.value) }}
              />

            </div>

            <input type="button" onClick={submit} value={'Submit'} className="btn btn-primary flexx_01" />

          </form>
        </div>
      </ div>
    </div>
  )
}

export default Register