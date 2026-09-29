import ProductCard from "./ProductCard"

function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}
export default ProductList