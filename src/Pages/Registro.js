import React,{useState} from "react"
import firebase from "../Config/Firebase"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container} from 'react-bootstrap'
const styles={
    h1:{           
        marginTop:"1%",
        marginBotton:"1%",
       
    }
}
function Registro(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''})
    const [loading,setLoading] = useState(false)
    const [alert,setAlert] = useState({variant:"",text:""})
    const handleSubmit = (event)=>{
        event.preventDefault()
        setLoading(true)
        console.log(form)
        firebase.auth.createUserWithEmailAndPassword(form.email,form.password)
        .then(data=>{
            console.log("Registro",data.user.uid)
            firebase.db.collection("usuarios")
            .add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid
            })
            .then(data=>{
                setLoading(false)
                setAlert({variant:"success",text:"Registro Exitoso!"})
                console.log(data);
            })
            .catch(error=>{
                setLoading(false)
                setAlert({variant:"danger",text:"Ha ocurrido un error"})
                console.log("Error add",error)
            })
        })
        .catch(error=>{
            setLoading(false)
            setAlert({variant:"danger",text:"Ha ocurrido un error"})
            console.log("Error dasdsa",error)
        })
    }
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setForm({...form,[name]:value})
    }
    
    return(
        /* */
        <div><h1 style={styles.h1}> Registro </h1> 
            <form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="nombre" type="text" placeholder="Ingrese su nombre" value={form.nombre} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label >Apellido</Form.Label>
                        <Form.Control name="apellido" type="text" placeholder="Ingrese su apellido" value={form.apellido} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label >Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Ingrese su email" value={form.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                        <Form.Label >Contraseña</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Ingrese su contraseña" value={form.password} onChange={handleChange} />
                        </Form.Group>
                
                <Button variant="primary" loading={loading} type="submit">Registrarse</Button>
               
                
                {/* <AlertCustom variant={alert.variant} text={alert.text} /> */}
            </form>
            </div>
    )
    
}
export default Registro;
