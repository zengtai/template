import * as React from "react";
import { Link } from "gatsby";

export default function ListItem({ item }) {
  return (
    <li>
      <div>
        <Link to={`#`}>
          <img
            className="rounded-xl shadow-lg"
            src={item.icon_url}
            alt={item.title}
          />
          <h2 className="sr-only mt-2 mb-1.5">
            <span className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs font-bold text-slate-700">
              {item.title}
            </span>
          </h2>
        </Link>
        <div className="sr-only origin-left scale-90">
          <Link
            className="rounded-md bg-slate-200 p-1 text-xs uppercase"
            to={`#`}
          >
            {item.category.name}
          </Link>
        </div>
      </div>
    </li>
  );
}
