export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#FFF5F7]">
      <div className="text-center p-10 border-4 border-pink-200 rounded-3xl bg-white shadow-xl">
        <h1 className="text-6xl font-extrabold text-pink-600 mb-6 tracking-tight">
          Maabeauty 🌸
        </h1>
        <p className="text-2xl text-gray-500 font-medium italic">
          "Pancarkan pesonamu setiap hari"
        </p>
        <div className="mt-8">
          <span className="px-6 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-bold uppercase tracking-widest">
            Coming Soon
          </span>
        </div>
      </div>
    </main>
  );
}