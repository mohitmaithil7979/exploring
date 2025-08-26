import { useParams } from 'react-router-dom'

function ListingDetail() {
  const { id } = useParams()

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
      <div>
        <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
          <img src={`https://picsum.photos/seed/${id}/1200/800`} alt="Listing" className="h-full w-full object-cover" />
        </div>
        <h1 className="text-2xl font-semibold mt-4">Listing #{id}</h1>
        <p className="text-gray-700 mt-2">Condition: Good · Location: Campus Center</p>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
      <aside className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold">$120</div>
              <div className="text-sm text-gray-500">Seller: Jordan (4.9★)</div>
            </div>
            <img src={`https://i.pravatar.cc/80?u=${id}`} alt="Seller" className="h-12 w-12 rounded-full" />
          </div>
          <button className="w-full mt-4 rounded-md bg-black text-white px-3 py-2">Message Seller</button>
        </div>
        <div className="border rounded-lg p-4">
          <button className="w-full text-sm text-red-600">Report listing</button>
        </div>
      </aside>
    </div>
  )
}

export default ListingDetail