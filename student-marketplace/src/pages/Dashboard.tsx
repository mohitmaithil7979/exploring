import { useState } from 'react'

function Dashboard() {
  const tabs = ['My Listings', 'My Favorites', 'My Messages', 'Settings'] as const
  type Tab = typeof tabs[number]
  const [active, setActive] = useState<Tab>('My Listings')

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">My Account</h1>
      <div className="flex gap-2 border-b mb-4">
        {tabs.map((t) => (
          <button key={t} onClick={() => setActive(t)} className={`px-3 py-2 text-sm ${active === t ? 'border-b-2 border-black' : 'text-gray-600'}`}>{t}</button>
        ))}
      </div>

      {active === 'My Listings' && (
        <div>
          <p className="text-sm text-gray-600 mb-2">Manage your listings</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between border rounded p-3">
              <div>
                <div className="font-medium">iPad Air 64GB</div>
                <div className="text-xs text-gray-500">Status: Active</div>
              </div>
              <div className="flex gap-2">
                <button className="rounded-md border px-2 py-1 text-sm">Edit</button>
                <button className="rounded-md border px-2 py-1 text-sm">Mark Sold</button>
                <button className="rounded-md border px-2 py-1 text-sm text-red-600">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {active === 'My Favorites' && (
        <div className="text-sm text-gray-600">Saved items will appear here.</div>
      )}

      {active === 'My Messages' && (
        <div>
          <div className="text-sm text-gray-600 mb-2">Chats</div>
          <ul className="space-y-2">
            <li className="border rounded p-3">Jordan · iPad Air 64GB · 2 unread</li>
          </ul>
        </div>
      )}

      {active === 'Settings' && (
        <form className="space-y-3 max-w-md">
          <input placeholder="Full name" className="w-full border rounded-md px-3 py-2" />
          <input placeholder="Change password" type="password" className="w-full border rounded-md px-3 py-2" />
          <button className="rounded-md bg-black text-white px-4 py-2">Save</button>
          <button type="button" className="rounded-md border px-4 py-2">Logout</button>
        </form>
      )}
    </div>
  )
}

export default Dashboard