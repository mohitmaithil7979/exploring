import { useMemo, useState } from 'react'
import ListingCard from '../components/ListingCard'
import SearchBar, { type SearchFilters } from '../components/SearchBar'
import CategorySidebar from '../components/CategorySidebar'

const mockListings = [
  { id: '1', imageUrl: 'https://picsum.photos/seed/a/600/400', title: 'iPad Air 64GB', price: 250, sellerName: 'Alex' },
  { id: '2', imageUrl: 'https://picsum.photos/seed/b/600/400', title: 'Calculus Textbook', price: 35, sellerName: 'Jamie' },
  { id: '3', imageUrl: 'https://picsum.photos/seed/c/600/400', title: 'Dorm Mini Fridge', price: 80, sellerName: 'Riley' },
  { id: '4', imageUrl: 'https://picsum.photos/seed/d/600/400', title: 'Gaming Chair', price: 120, sellerName: 'Sam' },
]

const categories = ['all', 'electronics', 'books', 'furniture', 'fashion']

function Home() {
  const [filters, setFilters] = useState<SearchFilters>({ q: '', category: 'all', minPrice: '', maxPrice: '', condition: 'any' })
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = useMemo(() => {
    return mockListings.filter((l) => {
      const matchQ = l.title.toLowerCase().includes(filters.q.toLowerCase())
      const matchCategory = activeCategory === 'all' ? true : activeCategory === 'books' ? l.title.toLowerCase().includes('book') : true
      const matchMin = filters.minPrice === '' || l.price >= Number(filters.minPrice)
      const matchMax = filters.maxPrice === '' || l.price <= Number(filters.maxPrice)
      return matchQ && matchCategory && matchMin && matchMax
    })
  }, [filters, activeCategory])

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-6">
      <div className="md:col-span-2">
        <SearchBar onChange={setFilters} />
      </div>
      <CategorySidebar categories={categories} active={activeCategory} onSelect={setActiveCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((l) => (
          <ListingCard key={l.id} {...l} />
        ))}
      </div>
    </div>
  )
}

export default Home