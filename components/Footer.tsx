import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-pink-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-pink-500 mb-3">Maabeauty 🌸</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Platform konsultasi kulit berbasis AI untuk menemukan rutinitas skincare terbaik untukmu.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Navigasi</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-500 hover:text-pink-500">Home</Link>
              <Link href="/quiz" className="text-sm text-gray-500 hover:text-pink-500">Analisis Kulit</Link>
              <Link href="/products" className="text-sm text-gray-500 hover:text-pink-500">Produk</Link>
              <Link href="/blog" className="text-sm text-gray-500 hover:text-pink-500">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Ikuti Kami</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-500 hover:text-pink-500">Instagram</a>
              <a href="#" className="text-sm text-gray-500 hover:text-pink-500">TikTok</a>
              <a href="#" className="text-sm text-gray-500 hover:text-pink-500">Twitter / X</a>
            </div>
          </div>
        </div>
        <div className="border-t border-pink-100 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">© 2026 Maabeauty. Built with Next.js + Supabase by Sri Rahmatullah</p>
        </div>
      </div>
    </footer>
  )
}