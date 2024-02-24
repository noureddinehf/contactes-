import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Button, Table, Modal, Form, Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { deletee, get, post,put } from './actions/contacteactions'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [id, Setid] = useState('')
  const [name, Setnom] = useState('')
  const [num, Setnum] = useState('')


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get());
  }, []);

  const con = useSelector(state => state.contact.contacts)

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  }

  const hi =async () => {
    console.log(name, num)
    const dataa = { name, num }
    await dispatch(post(dataa))
    await dispatch(get())
    handleClose()
    Setnom(' ')
    Setnum(' ')


  };
  const by =async () => {
    console.log(name)
    const data = { name, num }
    await dispatch(put(id,data))
    await dispatch(get())
    handleClos()
    Setnom(' ')
    Setnum(' ')


  };
  

  const del =(id)=>{  
    console.log(id)
    dispatch(deletee(id))
    dispatch(get())
    handleClos()

  }
 


  const handleShow = () => setShow(true);
  const [edit, editShow] = useState(false);
  const handleClos = () => editShow(false);





  const handleSho = (id) => {
console.log(id)
con.forEach(c => {
  if(c._id==id){
    Setid(c._id)
    Setnom(c.name)
    Setnum(c.num)
    console.log(c)
    
  }
  
});
    editShow(true);}
  const [sup, supShow] = useState(false);

  const handleClo = () => supShow(false);
  const handleSh = () => supShow(true);

  return (
    <div className='container-fluide'>
      <Navbar bg='primary' expand='lg' variant='dark'>
        <Container >
          <Navbar.Brand href="#home">contacteAPP</Navbar.Brand>
        </Container>
      </Navbar>
      <div className='container'>
        <Button variant="primary mt-3" onClick={handleShow}>
          ajouter
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ajouter contaacte</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder= "naaame"
                  autoFocus
                  value={name}
                  onChange={(e) => { Setnom(e.target.value) }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label >numero</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="123456789"
                  autoFocus
                  value={num}
                  onChange={(e) => { Setnum(e.target.value) }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={hi}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={edit} onHide={handleClos}>
          <Modal.Header closeButton>
            <Modal.Title>modifer contacte</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>nomm</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="nom"
                  autoFocus
                  value={name}
                  onChange={(e)=>Setnom(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>numero</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="123456789"
                  autoFocus
                  value={num}
                  onChange={(e)=>Setnum(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClos}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>by()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={sup} onHide={handleClo}>
          <Modal.Header closeButton>
            <Modal.Title>supprimer contacte</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>id</Form.Label>
                <Form.Control
                  type="id"
                  placeholder="ecrire l'id"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClo}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClo}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {con && con.length > 0 ? (
          <Table striped className='mt-3' bordered hover variant="light">
            <thead>
              <tr>
                <th>index</th>
                <th>nom</th>
                <th>num</th>
              </tr>
            </thead>
            <tbody>
              {con.map((con, index) => (
                <tr key={index}>
                  <td >{index + 1}</td>
                  <td>{con.name}</td>
                  <td>{con.num}</td>
                  <td>
                    <Button variant="success" onClick={()=>{handleSho(con._id)}}>Modifier</Button>{' '}
                    <Button variant="danger" onClick={()=>{del(con._id)}}>Supprimer</Button>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div>
            <br></br>
            <Alert variant='info'> rien à afficher</Alert>
          </div>
        )}
      </div>
    </div>
  )
}
export default App;