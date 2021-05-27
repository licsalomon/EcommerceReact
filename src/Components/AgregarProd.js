import React,{Component,useState} from "react"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import TpFinalContext from "../Context/tpFinalContext"
import firebase from "../Config/Firebase"
import Catalogo from "../Components/Catalogo"

function AgregarProd(props){
    const id = props.match.params.id;
    const [producto,setProducto] = useState({});
    const [loading,setLoading] = useState(true);
    const [mensaje,setMensaje] = useState("");
    const [form,setForm] = useState({name:'',price:''})
    const [formAdd,setFormAdd] = useState({name:'',price:'',description:''})

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setForm({...form,[name]:value})
    }
    const handleChangeAdd = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setFormAdd({...formAdd,[name]:value})
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(form)
        firebase.db.doc("productos/"+id)
        .set({
            name:form.name,
            price:form.price
        },{merge:true})
        .then(doc=>{
            console.log("Doc",doc)
        })
        .catch(error=>{
            console.log("error",error)
        })
    }
    const handleSubmitAdd = (event)=>{
        event.preventDefault()
        console.log(formAdd)
        firebase.db.collection("productos")
        .add({
            name:formAdd.name,
            price:formAdd.price
        })
        .then(doc=>{
            console.log("Doc Delete",doc)
        })
        .catch(error=>{
            console.log("error",error)
        })
    }
    const handleDelete = (event)=>{
        event.preventDefault()
        firebase.db.doc("productos/"+id)
        .delete()
        .then(doc=>{
            console.log("Doc Add",doc)
        })
        .catch(error=>{
            console.log("error",error)
        })
    }
    if(loading){
        return(
            /* */
            <div>
                loading...
            </div>
        )
    }else{
        return(
            <div>        
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>Precio</label>
                        <input type="number" name="price" value={form.price} onChange={handleChange}></input>
                    </div>
                    <input type="submit" value="Guardar"></input>
                    
                </form>
                <button onClick={handleDelete}>Eliminar</button>

                <h1>Agregar producto</h1>
                <form onSubmit={handleSubmitAdd}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" name="name" value={formAdd.name} onChange={handleChangeAdd}></input>
                    </div>
                    <div>
                        <label>Precio</label>
                        <input type="number" name="price" value={formAdd.price} onChange={handleChangeAdd}></input>
                    </div>
                    <input type="submit" value="Guardar"></input>
                    
                </form>
            </div>
        )
    }
}
export default AgregarProd;