import * as React from "react";

export default function Footer(params) {
  return (
    <footer className="site-footer bg-slate-100">
      <div className="container mx-auto">
        <p className="p-4 text-center">{`Copyright © ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
}
