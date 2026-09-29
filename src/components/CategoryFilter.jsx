function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "men's clothing", "women's clothing", "electronics", "jewelery"]

  return (
    <div className="flex gap-2 flex-wrap justify-center my-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-1 rounded-full border capitalize ${
            selectedCategory === cat ? "bg-black text-white" : "bg-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
export default CategoryFilter