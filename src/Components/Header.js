import React,{useState,useEffect} from "react"
import {Container} from 'react-bootstrap'

const styles={
        container:{
                display:"flex",
                alingText:"center",
                backgroundColor:"#000025",
            color:"#ffffff",
            fontSize:"3vw",
            marginBotton:"3%",
            padding:"2%",
            textAlign:"center",
        }
}

function Header(props) {
//     const {}


        return(
                <Container fluid style={styles.container}>
                         <div>
                        <h1>Technology shop</h1>
                        </div>
                </Container>
        )
        
    
}
export default Header;
