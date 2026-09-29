import { useState, useEffect } from "react"
import Header from "./components/Header"
import CategoryFilter from "./components/CategoryFilter"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [cart, setCart] = useState([]) // naya

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  const filteredProducts = products.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === "All" || p.category === category
    return matchSearch && matchCategory
  })

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  if (loading) return <h2 className="text-center mt-20 text-xl">Loading...</h2>

  return (
    <div className="pb-20">
      <Header search={search} setSearch={setSearch} />
      <CategoryFilter selectedCategory={category} setSelectedCategory={setCategory} />
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}
export default App