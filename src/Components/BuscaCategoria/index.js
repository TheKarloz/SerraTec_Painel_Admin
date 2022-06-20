import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import { Location } from "react-router-dom";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import api from "../Service/api"
import AdminCategoria from '../AdministrarCategoria';
import UpdateCategoria from '../UpdateCategoria';


const BuscaCategorias = () => {
    const [categoria, setCategoria] = useState([])

    const getCategoria = async () => {
        const { data } = await api.get('/categorias')
        setCategoria(data)
        console.log(data)
    }

    useEffect(() => {
        getCategoria();
    }, [])

    return(

        <>
            {categoria && categoria.map((item, index) => {return(
            <>
                <option key={index} value={item.nome}>{item.nome}</option>
            </> 
            )})}
        </>

    )
}

export default BuscaCategorias;