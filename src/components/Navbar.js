import * as React from "react";
import { Link } from "gatsby";
import {
  IconHome,
  IconHistory,
  IconCategory,
  IconInformation,
} from "../components/Icons";

export default function Navbar({ items }) {
  return (
    <nav className="site-header fixed bottom-0 z-50 w-full bg-lime-400">
      <div className="container mx-auto pt-3 pb-2 text-xs">
        <ul className="mx-4 grid grid-cols-4 gap-x-4 text-center md:mx-0">
          <li>
            <Link className="flex flex-col items-center" to={`/`}>
              <IconHome current />
              <span>Home</span>
            </Link>
          </li>
          {items &&
            items.map((item) => (
              <li>
                <Link to={item.slug}>{item}</Link>
              </li>
            ))}
          <li>
            <Link className="flex flex-col items-center" to={`/category`}>
              <IconCategory />
              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to={`/recent`}>
              <IconHistory />
              <span>Recent</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to={`/about`}>
              <IconInformation />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
