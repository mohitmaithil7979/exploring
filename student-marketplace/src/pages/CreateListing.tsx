import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  category: z.string().min(1),
  price: z.coerce.number().positive(),
  condition: z.enum(['new', 'like-new', 'good', 'fair']),
  location: z.string().min(2),
  images: z.any().optional(),
})

type FormValues = z.infer<typeof schema>

function CreateListing() {
  const { register, handleSubmit, watch } = useForm<FormValues>()
  const images = watch('images') as FileList | undefined

  function onSubmit(values: FormValues) {
    console.log(values)
    alert('Preview coming soon. This is a stub submit.')
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Create Listing</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('title')} placeholder="Title" className="w-full border rounded-md px-3 py-2" />
        <textarea {...register('description')} placeholder="Description" className="w-full border rounded-md px-3 py-2" rows={5} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <select {...register('category')} className="border rounded-md px-3 py-2">
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="furniture">Furniture</option>
            <option value="fashion">Fashion</option>
          </select>
          <select {...register('condition')} className="border rounded-md px-3 py-2">
            <option value="good">Good</option>
            <option value="new">New</option>
            <option value="like-new">Like New</option>
            <option value="fair">Fair</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input type="number" step="0.01" {...register('price', { valueAsNumber: true })} placeholder="Price" className="border rounded-md px-3 py-2" />
          <input {...register('location')} placeholder="Location (e.g., Campus Center)" className="border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Upload images</label>
          <input type="file" accept="image/*" multiple {...register('images')} />
          {images && images.length > 0 && (
            <div className="mt-2 grid grid-cols-3 gap-2">
              {Array.from(images).map((file, idx) => (
                <div key={idx} className="aspect-square bg-gray-100 rounded overflow-hidden grid place-items-center text-xs text-gray-600">
                  {file.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <button type="submit" className="rounded-md bg-black text-white px-4 py-2">Preview</button>
          <button type="button" className="rounded-md border px-4 py-2">Post Listing</button>
        </div>
      </form>
    </div>
  )
}

export default CreateListing