function AdminDashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 space-y-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      <section>
        <h2 className="font-medium mb-2">Pending Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="border rounded p-3">
            <div className="font-medium">Gaming Chair</div>
            <div className="text-sm text-gray-600">Submitted by Sam</div>
            <div className="mt-2 flex gap-2">
              <button className="rounded-md border px-2 py-1 text-sm">Approve</button>
              <button className="rounded-md border px-2 py-1 text-sm text-red-600">Reject</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-medium mb-2">Reports</h2>
        <ul className="space-y-2">
          <li className="border rounded p-3">User Jordan reported listing #123 for spam</li>
        </ul>
      </section>

      <section>
        <h2 className="font-medium mb-2">Analytics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="border rounded p-3 text-center">
            <div className="text-2xl font-semibold">1,204</div>
            <div className="text-xs text-gray-600">Total Users</div>
          </div>
          <div className="border rounded p-3 text-center">
            <div className="text-2xl font-semibold">312</div>
            <div className="text-xs text-gray-600">Active Listings</div>
          </div>
          <div className="border rounded p-3 text-center">
            <div className="text-2xl font-semibold">58</div>
            <div className="text-xs text-gray-600">Reports (7d)</div>
          </div>
          <div className="border rounded p-3 text-center">
            <div className="text-2xl font-semibold">943</div>
            <div className="text-xs text-gray-600">Chats (7d)</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard