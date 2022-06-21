import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown, ListGroupItem} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import './styles.css'
import Footer from '../Footer';
import api from "../Service/api"
import axos from 'axios'
import BuscaCategoria from '../BuscaCategoria';
import UpdateCategoria from '../UpdateCategoria';

const AdminCategoria = () =>{

    const [categoria, setCategoria] = useState([]);
    const [nomeCategoria, setNomeCategoria] = useState('TODOS');
    
    const getCategoria = async () => {
        const { data } = await api.get('/categorias');
        setCategoria(data);
    }

    const filtrarCategoria = () =>{
        return(
            <select className="form-select " onChange={(e) => setNomeCategoria(e.currentTarget.value)}>
                <option value="" disabled hidden>Selecione a Categoria</option>
                <option value="TODOS" selected>TODOS</option>
                <BuscaCategoria />
            </select>
        )     
    }


    useEffect(() => {
        getCategoria();
    }, [])

    return(
        <>
            <Header/>
            <div className='container-adminCate'> 
                <div className='row'>
                    {filtrarCategoria()}
                    {nomeCategoria === 'TODOS' ? categoria.map((item, index) => {return (
                    <Card>
                        <Card.Body><span key={item} className='categoria-text'>Categoria: {item.nome}</span> 
                            <UpdateCategoria
                                id={item.id}
                                nome={item.nome}
                            />
                        </Card.Body>
                    </Card>)}) : categoria.filter(item => item.nome === nomeCategoria).map((item, index) => {return (
                    <Card>
                        <Card.Body><span key={item} className='categoria-text'>Categoria: {item.nome}</span> 
                            <UpdateCategoria
                                id={item.id}
                                nome={item.nome}
                            />
                        </Card.Body>
                    </Card>)})}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AdminCategoria;