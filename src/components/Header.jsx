function Header({ search, setSearch }) {
  return (
    <div className="sticky top-0 bg-white p-4 shadow flex flex-col md:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl font-bold">Mini Daraz Store</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded w-full md:w-72"
      />
    </div>
  )
}
export default Header