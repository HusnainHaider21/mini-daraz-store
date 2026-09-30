import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

function ProductDetail({ onAddToCart }) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <h2 className="text-center mt-20">Loading...</h2>

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 font-semibold">← Back to Store</Link>
      <div className="flex flex-col md:flex-row gap-8 mt-6 bg-white p-6 rounded shadow">
        <img src={product.image} className="h-80 w-full md:w-1/2 object-contain" />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-sm text-gray-500 mt-1 capitalize">{product.category}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-3xl text-green-600 font-bold mt-4">${product.price}</p>
          <button onClick={() => onAddToCart(product)} className="mt-6 bg-orange-500 text-white px-8 py-2 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail