function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-lg p-4 rounded-lg w-80 max-h-96 overflow-y-auto">
      <h2 className="font-bold text-lg mb-2">Cart ({cart.length})</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between text-sm py-1 border-b">
          <span className="truncate w-48">{item.title}</span>
          <span>${item.price}</span>
        </div>
      ))}
      <div className="font-bold mt-2 flex justify-between">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button onClick={() => setCart([])} className="w-full mt-2 bg-red-500 text-white py-1 rounded">
        Clear Cart
      </button>
    </div>
  )
}
export default Cart