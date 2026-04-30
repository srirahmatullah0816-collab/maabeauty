'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-pink-500">
          Maabeauty 🌸
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-pink-500 transition">Home</Link>
          <Link href="/quiz" className="text-gray-600 hover:text-pink-500 transition">Analisis Kulit</Link>
          <Link href="/products" className="text-gray-600 hover:text-pink-500 transition">Produk</Link>
          <Link href="/blog" className="text-gray-600 hover:text-pink-500 transition">Blog</Link>
          <Link href="/login" className="btn-primary text-sm px-5 py-2">Masuk</Link>
        </div>
        <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-gray-600 hover:text-pink-500">Home</Link>
          <Link href="/quiz" className="text-gray-600 hover:text-pink-500">Analisis Kulit</Link>
          <Link href="/products" className="text-gray-600 hover:text-pink-500">Produk</Link>
          <Link href="/blog" className="text-gray-600 hover:text-pink-500">Blog</Link>
          <Link href="/login" className="btn-primary text-center text-sm py-2">Masuk</Link>
        </div>
      )}
    </nav>
  )
}