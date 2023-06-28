import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import Home from './modules/Home'
import { Routes, Route } from 'react-router-dom'
import Product from './modules/Product'
import Products from './modules/Products'
import CategoryProducts from './modules/CategoryProducts/index,'
import Cart from './modules/Cart'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (

    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/categories/:name' element={<CategoryProducts/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<div>Not Found 404</div>} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App