import React,{useState,useEffect} from "react"
import firebase from "firebase"
import {Container} from 'react-bootstrap'
import Catalogo from "../Components/Catalogo"
import CardGroup from 'react-bootstrap/CardGroup'
import AgregarProd from "../Components/AgregarProd"
import Card from 'react-bootstrap/Card'

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
            <br></br>
              {productos.map(producto=><Catalogo key={producto.id} id={producto.id} data={producto.data()}  />)}
               
            </div>
            </Container>
        )
    }
    
}
      
export default Home;
