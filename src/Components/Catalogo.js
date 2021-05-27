import React,{Component,useState} from "react"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import {Button} from 'react-bootstrap'
import TpFinalContext from "../Context/tpFinalContext"

const styles = {
    card:{ width: '18rem',marginBottom:"10px" },
    button:{
        marginLeft:"5px",
        
    },
    link:{
        color:"#FFFFFF"
    }
}

function Catalogo(props){
    const {data,titulo} = props
    const verDetalle = (props.verDetalle!==false?true:false);
    // const extendida = (props.extendida==true?true:false)
    const id = props.id
    const {price,name,description}=props.data
    const [mensaje,setMensaje]=useState("")


  const comprar = ()=>{
        console.log("dasds")
        if(data.stock-1==0){
            setMensaje("No hay stock")
        }else{
            setMensaje("Gracias por su compra")
        }
    }
    return(

        <TpFinalContext.Consumer>
        {
            context=>
            <CardGroup>
            <Card style={styles.card}>
                <Card.Header as="h4">{name}</Card.Header>
                <Card.Body>
                    <Card.Title>Description: {description}  </Card.Title>
                    <br></br>
                    
                    <Card.Subtitle className="mb-2 text-muted">SKU:{id}</Card.Subtitle> 
                    <br></br>
                            
                            <Card.Text>
                            ${price}                              
                            </Card.Text>
                        
                  {
                        context.userLogin &&
                        <Button variant="primary" onClick={comprar}>Comprar</Button>
                    }
                    
                    {
                        verDetalle && 
                        <Button style={styles.button} variant="primary"><Link style={styles.link} to={"/detalle/"+id}>Ver Detalle</Link></Button>
                    }
                    
                </Card.Body>
                {/* {mensaje} */}
            </Card>
            </CardGroup>
        }
    
    </TpFinalContext.Consumer>
    )
}
export default Catalogo;