import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card, Dropdown} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import React, { Component } from "react";
import './styles.css'
import Footer from '../Footer';
import BuscaCategoria from '../BuscaCategoria';
import api from "../Service/api"


const CadastroProdutos = () => {   
  const [categoria, setCategoria] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [valor, setValor] = useState('');
  const [foto, setFoto] = useState('');
  // const { tasks } = useAxiosGet('/produtos')

  const [produto, setProduto] = useState([]);
  
  const createProduto = async () => {
    if(nomeProduto === "" || valor === "") return
    const novoProduto = {
      nome: nomeProduto,
      valorUnitario: valor,
      categoria:categoria,
      foto: foto
    }
    alert("Produto cadastrado com sucesso");
    const { data } = await api.post('/produtos', novoProduto)

    setProduto([...produto,data])

    setNomeProduto("")
    setValor("")
    setFoto("")
  }

  return (
    <>
      <div className="body">
        <Header />
        <h1 className='text-center'>Cadastro de Produtos</h1>
        <div className="container">
          <form className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Nome do Produto:</label>
              <input type="text" className="form-control" placeholder="Nome" value={nomeProduto} onChange={e => setNomeProduto(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Valor: R$</label>
              <input type="text" className="form-control" placeholder="valor" value={valor} onChange={e => setValor(e.target.value)} />
            </div>
            <select className="form-select w-100" value={categoria} onChange={e => setCategoria(e.target.value)}>
              <option value="" disabled selected hidden>Selecione a Categoria</option>
              <BuscaCategoria />
            </select>
            <div className="col-md-9">
              <label className="form-label">Foto URL</label>
              <input type="text" className="form-control" placeholder="ULR" value={foto} onChange={e => setFoto(e.target.value)} />
            </div>
            <div className="col-md-2 moldura-foto">
              <img src={foto} alt="" style={{ width: '14rem' }} />
            </div>
            <div className="col-2 mb-4">
              <button type="button" className="btn btn-outline-success" onClick={createProduto}>
                <div className='d-flex align-items-center'>
                  Adicionar
                </div>
              </button>
            </div>
            <hr />
          </form>
        </div>
      </div>
      <Footer className='footer' />
    </>
  )
}


export default CadastroProdutos;