import * as React from "react";

export default function Banner({ slot }) {
  return (
    <div className="banner bg-slate-50">
      <div className="text-center text-xs uppercase text-cyan-600">
        <span className="inline-block scale-90">Advertisement</span>
      </div>
      <ins className="adsbygoogle flex justify-center bg-black/5">
        <img src="/300x250.png" alt="" width={300} height={250} />
      </ins>
    </div>
  );
}
