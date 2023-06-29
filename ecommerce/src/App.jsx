import './App.css'
import Footer from './components/Footer/index'
import Header from './components/Header/index'
import Home from './modules/Home/index'
import { Routes, Route } from 'react-router-dom'
import Product from './modules/Product/index'
import Products from './modules/Products/index'
import CategoryProducts from './modules/CategoryProducts/index'
import Cart from './modules/Cart/index'
import About from './components/About/index'
import Contact from './components/Contact/index'

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
