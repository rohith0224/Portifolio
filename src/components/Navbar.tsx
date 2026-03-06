import { navItems } from "../data/portfolioData";

type Suit = "iron" | "captain" | "spider";

type NavbarProps = {
  suit: Suit;
  setSuit: (suit: Suit) => void;
};

export default function Navbar({ suit, setSuit }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="brand">Rohith Portfolio</div>

      <nav>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="suit-toggle">
        <button
          className={suit === "iron" ? "active" : ""}
          onClick={() => setSuit("iron")}
        >
          Iron
        </button>
        <button
          className={suit === "captain" ? "active" : ""}
          onClick={() => setSuit("captain")}
        >
          Captain
        </button>
        <button
          className={suit === "spider" ? "active" : ""}
          onClick={() => setSuit("spider")}
        >
          Spider
        </button>
      </div>
    </header>
  );
}