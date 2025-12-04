import React from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logo from "../assets/logo-v2.png";

type HeaderProps = {
  title?: string;
  right?: React.ReactNode;
  onMenuClick?: () => void;
};

export function Header({ title = "Handlebars Docs", right, onMenuClick }: HeaderProps) {
  return (
    <header className="topbar" role="banner" aria-label="Global header">
      <div className="topbar-inner">
        <div className="topbar-left">
          <button
            className="topbar-menu-button"
            onClick={onMenuClick}
            aria-label="Toggle sidebar"
          >
            <MenuRoundedIcon />
          </button>
          <img src={logo} alt="Logo" className="topbar-logo" />
          <strong className="topbar-title">{title}</strong>
        </div>
        <div className="topbar-right">
          {right}
        </div>
      </div>
    </header>
  );
}

export default Header;
