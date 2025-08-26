import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useAuth } from '../hooks/useAuth'

const schema = z.object({
  email: z.string().email().refine((e) => /\.edu$/.test(e), 'Use your college .edu email'),
  otp: z.string().min(4).max(6).optional(),
})

type FormValues = z.infer<typeof schema>

function Login() {
  const { login } = useAuth()
  const { register, handleSubmit } = useForm<FormValues>()

  function onSubmit(values: FormValues) {
    login({ id: 'u1', name: 'Student', email: values.email })
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">College Email</label>
          <input {...register('email')} type="email" placeholder="you@college.edu" className="w-full border rounded-md px-3 py-2" />
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-md bg-black text-white px-3 py-2">Send OTP</button>
          <input {...register('otp')} placeholder="Enter OTP" className="flex-1 border rounded-md px-3 py-2" />
        </div>
        <button type="submit" className="w-full rounded-md bg-black text-white px-3 py-2">Login</button>
      </form>
      <div className="mt-6">
        <button className="w-full rounded-md border px-3 py-2">Login with Google</button>
      </div>
    </div>
  )
}

export default Login