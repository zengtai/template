import * as React from "react";

export default function Image({ name }) {
  return (
    <picture>
      <source srcSet="" type="image/avif" />
      <source srcSet="" type="image/webp" />
      <img src="" alt="" width={100} height={100} />
    </picture>
  );
}
