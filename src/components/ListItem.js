import * as React from "react";

export default function ListItem({ item }) {
  return (
    <li>
      <div>
        <img src="" alt="" />
        <h2>
          <a href="">{item.title}</a>
        </h2>
        <div>
          <a href="">{item.category}</a>
        </div>
      </div>
    </li>
  );
}
