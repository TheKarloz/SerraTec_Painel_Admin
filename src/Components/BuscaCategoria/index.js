import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import { Location } from "react-router-dom";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const BuscaCategorias = () => {
    const [categoria, setCategoria] = useState([])
    console.log(categoria)

    const getCategoria = async () => {
        const { data } = await axios.get('http://localhost:8080/categorias')
        setCategoria(data)
    }

    useEffect(() => {
        getCategoria();
    }, [])

    return(

        <>
        {categoria && categoria.map((item,index) => {return(<option key={index} value={item.nome}>{item.nome}</option>)})}
        </>

    )
}

export default BuscaCategorias;