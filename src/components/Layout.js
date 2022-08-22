import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col gap-4">
      <Header />
      <main className="grow">
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
