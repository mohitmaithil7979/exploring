import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
})

export type Listing = {
  id: string
  title: string
  description: string
  category: string
  price: number
  condition: string
  images: string[]
  sellerId: string
  sellerName?: string
}

export const ListingsService = {
  async list(params?: Record<string, any>) {
    const { data } = await api.get<Listing[]>('/listings', { params })
    return data
  },
  async get(id: string) {
    const { data } = await api.get<Listing>(`/listings/${id}`)
    return data
  },
  async create(payload: Partial<Listing>) {
    const { data } = await api.post<Listing>('/listings', payload)
    return data
  },
}