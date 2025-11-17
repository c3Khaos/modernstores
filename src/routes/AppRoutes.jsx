import { Homepage } from '@/pages/Homepage';
import ProductsPage from '@/pages/ProductsPage';
import React from 'react'
import { Header } from "@/components/layout/Header"
import { Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <>
    <Header/>

    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/products' element={<ProductsPage/>} />
    </Routes>
    </>
  )
}

export default AppRoutes