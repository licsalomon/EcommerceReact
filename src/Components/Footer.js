import React,{useState,useEffect} from "react"
import {Container} from 'react-bootstrap'

const styles={
        container:{
                backgroundColor:"#000025",
            color:"#ffffff",
            fontSize:"1vw",
            marginTop:"3%",
            padding:"0.5%",
        }
}

function Footer(props) {
//     const {}


        return(
                <Container fluid style={styles.container}>
                         <div>
                        <h5> Development by Laura Salomón- 2021</h5>
                        </div>
                </Container>
        )
        
    
}
export default Footer;
