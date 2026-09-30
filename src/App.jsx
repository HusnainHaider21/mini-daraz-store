import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import CategoryFilter from "./components/CategoryFilter"
import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"
import Cart from "./components/Cart"

function HomePage({ products, search, setSearch, category, setCategory, onAddToCart }) {
  const filteredProducts = products.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === "All" || p.category === category
    return matchSearch && matchCategory
  })
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <CategoryFilter selectedCategory={category} setSelectedCategory={setCategory} />
      <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
    </>
  )
}

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => { setProducts(data); setLoading(false) })
  }, [])

  const handleAddToCart = (product) => {
  const exist = cart.find(item => item.id === product.id)
  if (exist) {
    setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item))
  } else {
    setCart([...cart, { ...product, qty: 1 }])
  }
}

  if (loading) return <h2 className="text-center mt-20">Loading...</h2>

  return (
    <BrowserRouter>
      <div className="pb-20">
        <Routes>
          <Route path="/" element={<HomePage products={products} search={search} setSearch={setSearch} category={category} setCategory={setCategory} onAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        </Routes>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </BrowserRouter>
  )
}
export default App