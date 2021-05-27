import React,{useState,useEffect} from "react"
import Catalogo from "../Components/Catalogo"
// import {getProducto} from "../Services/ItemsServices"
import firebase from "../Config/Firebase"
function Detalle(props) {
     //console.log(props.match.params.id)
     const id = props.match.params.id;
     const [producto,setProducto] = useState({});
     const [loading,setLoading] = useState(true);
     const [mensaje,setMensaje] = useState("");
//      const [form,setForm] = useState({name:'',price:''})
//      const [formAdd,setFormAdd] = useState({name:'',price:'',description:''})
     //componentDidMount
     useEffect(
         ()=>{
             /*getProducto(id)
             .then(data=>{
                 console.log(data)
                 setProducto(data.data[0]);
                 setLoading(false);
             })*/
             firebase.db.doc("productos/"+id)
             .get()
             .then(doc=>{
                 console.log("Doc",doc)
                 setProducto(doc)
                 setLoading(false)
                //  setForm({name:doc.data().name,price:doc.data().price})
             })
         },
         []
     )

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
                 <Catalogo id={producto.id} data={producto.data()}  verDetalle={false} extendida={true}/>
                                 
             </div>
         )
     }
         
     
 }
    

export default Detalle;
