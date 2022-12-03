
// DEPENDENCIAS INSTALADAS
/*
  - npm install json-server
  - npm install react-icons
  - npm install react-router-dom
  - npm install uuid
 */
/*
  Cadastramento de entregas
 */
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import NewProject from './Components/Pages/NewDelivery'
import Contact from './Components/Pages/Contact'
import Company from './Components/Pages/Company'
import Home from './Components/Pages/Home'
import Container from './Components/Layout/Container'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Deliveries from './Components/Pages/Deliveries'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/deliveries" element={<Deliveries />}/>
          <Route exact path="/company" element={<Company />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/newdelivery" element={<NewProject />}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
