import React, { useContext, useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GlobalContext } from "../../Contexts/Context";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user } = useContext(GlobalContext);

  const shownav = () => setActive(true);
  const hidenav = () => setActive(false);

  const navlinks = [
    {
      name: `Home`,
      url: `/`,
    },
    {
      name: `Commands`,
      url: `/commands`,
    },
    {
      name: `Contact`,
      url: `/contact`,
    },
    {
      name: `Invite Now`,
      url: `https://discord.com/api/oauth2/authorize?client_id=1091126594006949978&permissions=8&scope=applications.commands%20bot`,
      target: true,
    },
    {
      name: `Support`,
      url: `https://discord.gg/WFfjrQxnfH`,
      target: true,
    },
  ];

  const DesktopNavbar = () => (
    <div className="navbar hidden">
      <a href="/" className="hover_line nav_title">
        {user?.username}
      </a>
      <div className="nav_links">
        {navlinks.map((link, index) => (
          <a
            className="hover_line"
            key={index}
            href={link.url}
            target={link.target ? "_blank" : null}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );

  const MobileNavbar = () => (
    <div className="navbar hidden_mobile">
      <a href="/" className="hover_line nav_title">
        Meowsic
      </a>
      <div
        className="nav_links"
        style={{
          display: active ? "flex" : "none",
        }}
      >
        {navlinks.map((link, index) => (
          <a
            className="hover_line"
            key={index}
            href={link.url}
            onClick={hidenav}
            target={link.target ? "_blank" : null}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="btn">
        {active ? (
          <AiOutlineCloseCircle className="btn_icon" onClick={hidenav} />
        ) : (
          <GiHamburgerMenu className="btn_icon" onClick={shownav} />
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* desktop */}
      <DesktopNavbar />
      {/* mobile */}
      <MobileNavbar />
    </>
  );
};

export default Navbar;
