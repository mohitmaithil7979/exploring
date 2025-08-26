import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export type SearchFilters = {
  q: string
  category: string
  minPrice?: number | ''
  maxPrice?: number | ''
  condition: 'any' | 'new' | 'like-new' | 'good' | 'fair'
}

const defaultValues: SearchFilters = { q: '', category: 'all', minPrice: '', maxPrice: '', condition: 'any' }

export function SearchBar({ onChange }: { onChange: (filters: SearchFilters) => void }) {
  const { register, watch, reset } = useForm<SearchFilters>({ defaultValues })
  const values = watch()

  useEffect(() => {
    onChange(values)
  }, [values, onChange])

  return (
    <div className="w-full border rounded-lg p-3 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <input {...register('q')} placeholder="Search..." className="border rounded-md px-3 py-2" />
        <select {...register('category')} className="border rounded-md px-3 py-2">
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="furniture">Furniture</option>
          <option value="fashion">Fashion</option>
        </select>
        <input type="number" {...register('minPrice', { valueAsNumber: true })} placeholder="Min Price" className="border rounded-md px-3 py-2" />
        <input type="number" {...register('maxPrice', { valueAsNumber: true })} placeholder="Max Price" className="border rounded-md px-3 py-2" />
        <select {...register('condition')} className="border rounded-md px-3 py-2">
          <option value="any">Any Condition</option>
          <option value="new">New</option>
          <option value="like-new">Like New</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
        </select>
      </div>
      <div className="mt-2 text-right">
        <button type="button" onClick={() => reset(defaultValues)} className="text-sm text-gray-600">Reset</button>
      </div>
    </div>
  )
}

export default SearchBar