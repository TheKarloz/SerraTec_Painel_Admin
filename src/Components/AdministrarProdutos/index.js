import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import axios from 'axios'
import React, { Component } from "react";
import './styles.css'
import Footer from '../Footer';
import Busca from '../BuscaCategoria';
import useAxiosGet from '../hooks/useAxiosGet';
import api from "../Service/api"
import CadastroProdutos from '../CadastroProdutos';
import UpdateProdutos from '../UpdateProdutos';


const AdminProdutos = () =>{
    
    const [categoria, setCategoria] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [valor, setValor] = useState('');
    const [foto, setFoto] = useState('');

    const [produto, setProduto] = useState([]);

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
            <div className='container container-produtos'>
            {produto && produto.map((item, index) => {
                return (
                    <Card key={index} style={{ width: '14rem' }} className='card-produto'>
                        <Card.Img variant="top" src={item.foto} />
                        <Card.Body>
                            <Card.Title>{item.nome}</Card.Title>
                            <Card.Text>
                                <span>R$:</span> {item.valorUnitario} <br />
                                <span>CATEGORIA:</span> {item.categoria.nome}
                                <div>
                                    <UpdateProdutos
                                    id={item.id} 
                                    nome={item.nome} 
                                    valor={item.valorUnitario} 
                                    categ={item.categoria}
                                    foto={item.foto}/>
                                    <Button variant='danger'>Deletar</Button>
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