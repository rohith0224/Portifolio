import { navItems } from "../data/portfolioData";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">Rohith Sunkara</div>

      <nav>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
