import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import './styles.css'
import Footer from '../Footer';
import api from "../Service/api"
import BuscaCategoria from '../BuscaCategoria';
import UpdateProdutos from '../UpdateProdutos';
import DeleteProdutos from '../DeleteProdutos';


const AdminProdutos = () => {
    
    const [produto, setProduto] = useState([]);
    const [categoria, setCategoria] = useState([]);
    console.log(categoria)

    const filterProduto =  async () =>{
        produto.filter(item => item)
    }

    const getProduto = async () =>{
        const { data } = await api.get('/produtos');
        setProduto(data);
    }

    useEffect(() => {
        getProduto();
      }, [])


    return(
        <>
            <Header/>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <select className="form-select">
                            <option value="" disabled selected hidden>Selecione a Categoria</option>
                            <BuscaCategoria/>
                        </select>
                    </div>
                    <div className='col-9'>
                        Filtrar por categoria
                    </div> 
                </div>
            </div>
            <div className='container container-produtos'>
            {produto && produto.map((item, index) => {
                return (
                    <Card key={index} style={{ width: '14rem', height:'100%'}} className='card-produto'>
                        <Card.Img variant="top" src={item.foto} />
                        <Card.Body>
                            <Card.Title>{item.nome}</Card.Title>
                            <Card.Text>
                                <span>R$:</span> {item.valorUnitario} <br />
                                <span>CATEGORIA:</span> {item.categoria.nome}
                                <div>
                                    <UpdateProdutos className="btn-update"
                                        id={item.id} 
                                        nome={item.nome} 
                                        valor={item.valorUnitario} 
                                        categ={item.categoria}
                                        foto={item.foto}
                                    />
                                    
                                    <DeleteProdutos className="btn-update"
                                        id={item.id} 
                                        nome={item.nome} 
                                        valor={item.valorUnitario} 
                                        categ={item.categoria}
                                        foto={item.foto}
                                    />
                                
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>) } ) }
            </div>
            <Footer/>
        </>
    )
}

export default AdminProdutos;