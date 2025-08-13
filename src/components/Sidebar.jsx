export default function Sidebar() {
  const menuItems = ["Dashboard", "Profile", "Settings", "Help"];
  const menuItem = menuItems.map((item, index) => (
    <li key={index}>
      <button className="w-full text-left p-2 rounded hover:bg-opacity-80 transition-color duration-200 cursor-pointer hover:scale-105 font-semibold hover:bg-gray-200">
        {item}
      </button>
    </li>
  ));
//   console.log(menuItem);
  return (
    <aside className="w-64 p-4 transition-colors duration-300 bg-gray-50 text-gray-800">
      <nav>
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">{menuItem}</ul>
      </nav>
    </aside>
  );
}
