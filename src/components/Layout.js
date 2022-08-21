import * as React from "react";

import Footer from "./Footer";

export default function Layout({ Children }) {
  return (
    <>
      <Header />
      <main>{Children}</main>
      <Footer />
    </>
  );
}
