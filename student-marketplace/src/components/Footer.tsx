function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-gray-500">
      <div className="mx-auto max-w-6xl px-4">
        © {new Date().getFullYear()} CampusTrade · Contact: support@campustrade.app
      </div>
    </footer>
  )
}

export default Footer