import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CadastroProdutos from '../CadastroProdutos';
import Home from '../Home';
import AdminProdutos from '../AdministrarProdutos';
import CadastroCategoria from '../CadastrarCategoria';
import AdminCategoria from '../AdministrarCategoria';
import Login from '../pages/login';

const Rotas = () => {
    const [ user, setUser ] = useState(false)


    useEffect(() => {
        const email = localStorage.getItem('email')
        const senha = localStorage.getItem('senha')
        console.log("Email: " + email + " senha:" + senha)
        if(email !== null && senha !== null){
            setUser(true);
            setTimeout(() => {
                window.location.reload();
            }, 300000);
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {user && <Route path='/cadastro/categorias/' element={<CadastroCategoria />} />}
                {user && <Route path='/admin/categorias/' element={<AdminCategoria />} />}
                {user && <Route path='/cadastro/produtos' element={<CadastroProdutos />} />}
                {user && <Route path='/admin/produtos' element={<AdminProdutos />} />}
                <Route path='/login' element={<Login />} />
                {user && <Route path='/home' element={<Home />} />}
                <Route path='*' element={user ? <Home /> : <Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas