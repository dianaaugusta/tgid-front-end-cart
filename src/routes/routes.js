import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'

const routes = () => {
    return (
        <Routes>
            <Route path="/cart" element={<Cart />}>
            </Route>
        </Routes>
    )
}

export default routes