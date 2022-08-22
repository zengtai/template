import * as React from "react";
import { Link } from "gatsby";

export default function Header({ items }) {
  return (
    <header className="site-header bg-slate-100">
      <div className="container mx-auto flex gap-x-4 py-4">
        <Link to={`/`}> Logo </Link>
        <nav>
          <ul>
            {items &&
              items.map((item) => (
                <li>
                  <Link to={item.slug}>{item}</Link>
                </li>
              ))}
          </ul>
        </nav>
        <button>Menu</button>
      </div>
    </header>
  );
}
