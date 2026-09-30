function Cart({ cart, setCart }) {
  const increaseQty = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item))
  }
  const decreaseQty = (id) => {
    const item = cart.find(i => i.id === id)
    if (item.qty === 1) {
      setCart(cart.filter(i => i.id !== id))
    } else {
      setCart(cart.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i))
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2)

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
      <h2 className="font-bold text-lg">Cart ({cart.length} items) - Total: ${total}</h2>
      <div className="flex gap-2 mt-2 overflow-x-auto">
        {cart.map(item => (
          <div key={item.id} className="flex items-center gap-2 border p-2 rounded min-w-max">
            <img src={item.image} className="h-8 w-8 object-contain" />
            <span className="text-xs w-20 truncate">{item.title}</span>
            <button onClick={() => decreaseQty(item.id)} className="bg-gray-200 px-2 rounded">-</button>
            <span className="text-sm font-bold">{item.qty}</span>
            <button onClick={() => increaseQty(item.id)} className="bg-gray-200 px-2 rounded">+</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Cart