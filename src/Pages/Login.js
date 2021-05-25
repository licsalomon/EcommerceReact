import React,{useState, useContext} from "react"
import ReactDOM from "react-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import ButtonStyle from "../Components/Styles/ButtonStyle"
import firebase from "../Config/Firebase"
import {useHistory} from "react-router-dom"
// import { useFormik } from "formik";
import Alert from 'react-bootstrap/Alert'
import {Container} from 'react-bootstrap'
import TpFinalContext from "../Context/tpFinalContext"

        function Login() {const context = useContext(TpFinalContext)
                const [form,setForm] = useState({email:'',password:''})
                const [loading,setLoading] = useState(false)
                const history = useHistory()
                
                const handleSubmit = (event)=>{
                    event.preventDefault()
                    setLoading(true)
                    console.log(form)
                    firebase.auth.signInWithEmailAndPassword(form.email,form.password)
                    .then(data=>{
                        setLoading(false)
                        console.log("Uid",data.user.uid)
                        
                        firebase.db.collection("usuarios")
                        
                        .where("userId","==",data.user.uid)
                        .get()
                        .then(querySnapshot=>{
                            context.loginUser(querySnapshot.docs[0]?.data())
                            
                        })
                        //setLogin
                        console.log("Login Ok",data)
                        
                        history.push("/")
                    })
                    .catch(error=>{
                        setLoading(false)
                        console.log("Error",error)
                        console.log("Error",error.code)
                        //alert(error.code)
                    })
                }
                const handleChange = (event)=>{
                    const name = event.target.name
                    const value = event.target.value
                    console.log(name,value)
                    setForm({...form,[name]:value})
                }
                
                return(
    <Container>
        <div>
            <h1> Login </h1> 
            <form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail"> 
            <Form.Label >Email address</Form.Label>
      <Form.Control
        id="email"
        name="email"
        type="email"
        value={form.email} onChange={handleChange}
      />
     
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label  htmlFor="password">Password</Form.Label>
       <Form.Control
          id="psd"
          name="password"
          type="password"
          value={form.password} onChange={handleChange}
        />
       
         </Form.Group>
         <div> <br></br>
      <Button variant="primary" type="submit">Submit</Button>
      </div>
    </form>
       
        
    </div>
    
    </Container>  
   )

}


export default Login;