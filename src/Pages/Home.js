import React,{useState,useEffect} from "react"
import firebase from "firebase"
import {Container} from 'react-bootstrap'
import Catalogo from "../Components/Catalogo"
import AgregarProd from "../Components/AgregarProd"

function Home(props) {
    
    const [productos,setProductos] = useState([]);
    const [loading,setLoading] = useState(true);
    
    
    useEffect(
        ()=>{
            /*getProductos()
            .then(response=>{
                console.log(response);
                setProductos(response.data);
                setLoading(false);
            })*/
            firebase.db.collection("productos")
            .get()
            .then(querySnapshot=>{
                console.log(querySnapshot.docs)
                setProductos(querySnapshot.docs);
                setLoading(false);
                console.log("productos",querySnapshot.docs)
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
<Container>
        <div>
            {/* <AgregarProd/> */}
            {/* <div>Titulo: {titulo}</div> */}
                {productos.map(producto=><Catalogo key={producto.id} id={producto.id} data={producto.data()}  />)}
                {/* <Filtros clickCambiarTitulo={cambiarTitulo} clickFiltrarProducto={filtrarProducto} title={titulo} /> */}
            </div>
            </Container>
        )
    }
    
}
      
export default Home;
