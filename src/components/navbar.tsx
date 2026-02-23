import { Link } from "react-router";

export default function Navbar() {
  const navs = [
    { id: 1, text: "Home", route: "/" },
    { id: 2, text: "About Us", route: "about" },
    { id: 3, text: "Services", route: "services" },
  ];

  return (
    <nav className="h-16 max-w-[1500px] mx-auto flex items-center justify-between">
      <Link to="/" className="text-4xl font-extrabold">
        BIG<span className="text-blue-700">YAN.</span>
      </Link>
      {navs.map((item) => (
        <Link to={item.route} key={item.id} className="font-medium text-lg">
          {item.text}
        </Link>
      ))}
      <Link
        to="contact"
        className="px-8 py-2 bg-blue-700 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 hover:cursor-pointer"
      >
        Contact Us
      </Link>
    </nav>
  );
}
