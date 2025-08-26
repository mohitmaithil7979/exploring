import { useMemo, useState } from 'react'
import ListingCard from '../components/ListingCard'

const mockListings = [
  { id: '1', imageUrl: 'https://picsum.photos/seed/a/600/400', title: 'iPad Air 64GB', price: 250, sellerName: 'Alex' },
  { id: '2', imageUrl: 'https://picsum.photos/seed/b/600/400', title: 'Calculus Textbook', price: 35, sellerName: 'Jamie' },
  { id: '3', imageUrl: 'https://picsum.photos/seed/c/600/400', title: 'Dorm Mini Fridge', price: 80, sellerName: 'Riley' },
  { id: '4', imageUrl: 'https://picsum.photos/seed/d/600/400', title: 'Gaming Chair', price: 120, sellerName: 'Sam' },
]

function Home() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return mockListings
    return mockListings.filter((l) => l.title.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="max-w-2xl mx-auto mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search items..."
          className="w-full border rounded-md px-4 py-3"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((l) => (
          <ListingCard key={l.id} {...l} />
        ))}
      </div>
    </div>
  )
}

export default Home