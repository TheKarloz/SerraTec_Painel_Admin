import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CadastroProdutos from './Components/CadastroProdutos';
import UpdateProdutos from './Components/UpdateProdutos';

import Home from './Components/Home';
import AdminProdutos from './Components/AdministrarProdutos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/cadastro/produtos' element={<CadastroProdutos/>}/>
      <Route path='/admin/produtos' element={<AdminProdutos/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);


