import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import './styles.css'
import Footer from '../Footer';
import api from "../Service/api"
import BuscaCategoria from '../BuscaCategoria';

const AdminCategoria = () =>{

    const [categoria, setCategoria] = useState([]);

    const getCategoria = async () =>{
        const { data } = await api.get('/categorias');
        setCategoria(data);
    }

    useEffect(() => {
        getCategoria();
      }, [])


    return(
        <>
            <Header/>
            <div className='container'>
                <div className='row'>
                    <select className="form-select w-25" value={categoria} onChange={e => setCategoria(e.target.value)}>
                        <option value="" disabled selected hidden>Selecione a Categoria</option>
                        <BuscaCategoria />
                    </select>
                </div>
                <button className='btn btn-primary col-2'>
                        Atualizar
                </button>
            </div>
            <Footer/>
        </>
    )
}

export default AdminCategoria;