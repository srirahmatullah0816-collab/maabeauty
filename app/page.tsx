import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-50">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
            ✨ AI Skin Consultant #1 Indonesia
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Your Skin,<br />
            <span className="text-pink-500">Your Rules.</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-lg">
            Konsultasi kulit gratis dengan AI. Temukan rutinitas skincare yang benar-benar cocok untuk kulitmu — bukan kulit orang lain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/quiz"
              className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-pink-600 transition shadow-lg shadow-pink-200">
              Mulai Analisis Kulit Gratis 🌸
            </Link>
            <Link href="/products"
              className="bg-white text-pink-500 border-2 border-pink-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-pink-50 transition">
              Lihat Produk
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-8 justify-center md:justify-start">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">10K+</p>
              <p className="text-sm text-gray-400">Pengguna Aktif</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">4.9★</p>
              <p className="text-sm text-gray-400">Rating Pengguna</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">Free</p>
              <p className="text-sm text-gray-400">Konsultasi AI</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-8 bg-white rounded-3xl shadow-xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-6xl mb-4">🌸</div>
                <p className="text-pink-500 font-semibold text-lg">AI Skin Analysis</p>
                <p className="text-gray-400 text-sm mt-2">Powered by Claude AI</p>
                <div className="mt-4 space-y-2">
                  <div className="bg-pink-50 rounded-xl px-4 py-2 text-sm text-pink-600">✓ Tipe Kulit Terdeteksi</div>
                  <div className="bg-pink-50 rounded-xl px-4 py-2 text-sm text-pink-600">✓ Rutinitas Personal</div>
                  <div className="bg-pink-50 rounded-xl px-4 py-2 text-sm text-pink-600">✓ Rekomendasi Produk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARA KERJA SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cara Kerja <span className="text-pink-500">Maabeauty</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Hanya 3 langkah mudah untuk menemukan rutinitas skincare terbaikmu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-pink-50 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">📋</div>
              <div className="bg-pink-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Jawab 5 Pertanyaan</h3>
              <p className="text-gray-500">Ceritakan tentang kulitmu — tipe, masalah, rutinitas sekarang, dan tujuanmu.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-pink-50 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">🤖</div>
              <div className="bg-pink-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Analisis Kulitmu</h3>
              <p className="text-gray-500">Claude AI menganalisis kondisi kulitmu dan merekomendasikan bahan aktif yang tepat.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-pink-50 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">✨</div>
              <div className="bg-pink-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dapatkan Rutinitas Personal</h3>
              <p className="text-gray-500">Terima jadwal skincare pagi & malam yang personal plus rekomendasi produk terbaik.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/quiz"
              className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-pink-600 transition shadow-lg shadow-pink-200 inline-block">
              Coba Sekarang — Gratis! 🌸
            </Link>
          </div>
        </div>
      </section>

      {/* AI PREVIEW SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="text-5xl mb-4">🤖</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Maa — AI Beauty Consultant</h2>
          <p className="text-pink-100 text-lg max-w-xl mx-auto mb-8">
            Tanya apapun tentang kulitmu. Maa siap menjawab 24/7 dengan pengetahuan dermatologi terkini.
          </p>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 max-w-lg mx-auto mb-8 text-left">
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">👤</div>
              <div className="bg-white/20 rounded-2xl rounded-tl-none px-4 py-2 text-sm">
                Kulit saya berminyak dan sering berjerawat, apa yang harus saya pakai?
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="bg-white text-pink-600 rounded-2xl rounded-tr-none px-4 py-2 text-sm max-w-xs">
                Untuk kulit berminyak berjerawat, saya rekomendasikan Niacinamide 10% dan Salicylic Acid 2%. Keduanya akan... ✨
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">🌸</div>
            </div>
          </div>
          <Link href="/register"
            className="bg-white text-pink-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-pink-50 transition inline-block">
            Mulai Chat dengan Maa 💬
          </Link>
        </div>
      </section>

    </div>
  )
}