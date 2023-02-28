 import {Button,Container,Row,Col,Navbar,Nav,Image} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Cart from './components/Cart/Cart';
 import {useState} from 'react';
 import {Modal} from 'react-bootstrap';
 

function App() {
  const [cartVisible,setCartVisible] = useState(false);
  const clicked=()=>{
    console.log('danny');
    setCartVisible(true);
  }
  const unclicked=()=>{
    console.log('dan');
    setCartVisible(false);
  }
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Store</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button onClick={clicked}>CART</Button>
      <h3>0</h3>
    </Navbar>
    <Navbar align="center"  bg='light' variant='success'><Navbar.Brand ><h1>REACT MOVIE</h1></Navbar.Brand></Navbar>
      <Container>
        <Row>
          <h2>MUSIC</h2>
          <Col>
          <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"></Image>
          <h3>$19.99</h3>
          <Button>ADD TO CART</Button></Col>
          <Col>
          <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"></Image>
          <h3>$14.99</h3>
          <Button>ADD TO CART</Button>  
          </Col>
        </Row>
        <Row>
          <Col>
          <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"></Image>
          <h3>$29.99</h3>
          <Button>ADD TO CART</Button></Col>
          <Col>
          <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"></Image>  
          <h3>$12.99</h3>
          <Button>ADD TO CART</Button>
          </Col>
        </Row>

      </Container>  
      <h1></h1>
      <Container><Button>SEE THE CART</Button></Container>
      {cartVisible && <Cart hide={unclicked}/> }
      <footer>REACT MOVIE</footer>
       
    </div>
  );
}

export default App;
