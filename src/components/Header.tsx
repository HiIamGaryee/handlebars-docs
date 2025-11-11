import React from "react";
import logo from "../assets/logo-v2.png";

type HeaderProps = {
  title?: string;
  right?: React.ReactNode;
};

export function Header({ title = "Handlebars Docs", right }: HeaderProps) {
  return (
    <header className="topbar" role="banner" aria-label="Global header">
      <div className="topbar-inner">
        <div className="topbar-left">
          <img src={logo} alt="Logo" className="topbar-logo" />
          <strong className="topbar-title">{title}</strong>
        </div>
        <div className="topbar-right">{right}</div>
      </div>
    </header>
  );
}

export default Header;
