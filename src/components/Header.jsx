
export default function Header() {
  return (
    <div className="p-4 border-b-2 transition-colors duration-300 border-gray-200 bg-white text-gray-800">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold">My APP</h1>
            <div className="flex items-center gap-4">
                <span>Welcome, Guest</span>
                <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-gray-800 text-white hover:bg-gray-700 cursor-pointer">☀️ Light</button>
            </div>
        </div>
    </div>
  )
}
// {theme === "light" ? "🌙 Dark" : "☀️ Light"}