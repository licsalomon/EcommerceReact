import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Menu from "./Components/Menu/Menu"
import Registro from "./Pages/Registro"
import Login from "./Pages/Login"
import {Container} from 'react-bootstrap'
import Detalle from "./Pages/Detalle"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Menu />
    <Container>
      <Route path="/" component={Home} exact />
      <Route path="/registro" component={Registro} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/detalle/:id" component={Detalle} exact />
   
    </Container> 
     <Footer />   
  </BrowserRouter>
  );
}

export default App;
