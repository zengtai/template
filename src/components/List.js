import * as React from "react";

import ListItem from "./ListItem";

export default function List({ items }) {
  return (
    <>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </>
  );
}
