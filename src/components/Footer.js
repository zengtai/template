import * as React from "react";

export default function Footer(params) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{`Copyright &copy; ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
}
