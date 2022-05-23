import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Categories />
            <Products />
        </div>
    )
}
