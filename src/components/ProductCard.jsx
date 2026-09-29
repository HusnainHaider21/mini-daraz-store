function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-2" />
      <h2 className="text-sm font-semibold line-clamp-2 flex-grow">{product.title}</h2>
      <p className="text-green-600 font-bold mt-2">${product.price}</p>
      <button 
        onClick={() => onAddToCart(product)}
        className="mt-2 bg-orange-500 text-white py-1 rounded hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  )
}
export default ProductCard