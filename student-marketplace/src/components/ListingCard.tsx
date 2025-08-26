import { Link } from 'react-router-dom'

export type ListingCardProps = {
  id: string
  imageUrl: string
  title: string
  price: number
  sellerName: string
}

function ListingCard({ id, imageUrl, title, price, sellerName }: ListingCardProps) {
  return (
    <Link to={`/listing/${id}`} className="group border rounded-lg overflow-hidden hover:shadow-md transition">
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium line-clamp-1">{title}</h3>
          <span className="font-semibold">${price}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Seller: {sellerName}</p>
        <p className="text-xs text-blue-600 mt-2">View Details →</p>
      </div>
    </Link>
  )
}

export default ListingCard