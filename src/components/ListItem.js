import * as React from "react";
import { Link } from "gatsby";
import { IMAGE_FORMAT, IMAGE_PATH } from "../lib/constants";

export default function ListItem({ item }) {
  return (
    <li>
      <div>
        <Link to={`/play`}>
          <img
            className="rounded-xl bg-gray-100 shadow-lg"
            src={
              IMAGE_PATH + IMAGE_FORMAT + `/` + item.appid + `.` + IMAGE_FORMAT
            }
            alt={item.title}
            width={200}
            height={200}
            loading={`lazy`}
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
            to={`/category`}
          >
            {item.category.name}
          </Link>
        </div>
      </div>
    </li>
  );
}
