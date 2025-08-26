type CategorySidebarProps = {
  categories: string[]
  active?: string
  onSelect: (category: string) => void
}

function CategorySidebar({ categories, active, onSelect }: CategorySidebarProps) {
  return (
    <aside className="w-full md:w-56 border rounded-lg p-3 h-max sticky top-20">
      <h4 className="font-medium mb-2">Categories</h4>
      <ul className="space-y-1">
        {categories.map((c) => (
          <li key={c}>
            <button
              onClick={() => onSelect(c)}
              className={`w-full text-left px-2 py-1 rounded ${active === c ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            >
              {c}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default CategorySidebar