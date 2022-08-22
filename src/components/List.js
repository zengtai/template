import * as React from "react";

import ListItem from "./ListItem";

export default function List({ items }) {
  return (
    <ul className="mx-4 grid grid-cols-3 gap-x-2 gap-y-4">
      {items.map((item, index) => (
        <ListItem key={item.gid} item={item} />
      ))}
    </ul>
  );
}
