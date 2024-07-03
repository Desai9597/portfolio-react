import React, {  useContext } from 'react'
import { navLinks } from "../data/data.js";
import { Link } from "react-router-dom";
import { Menu } from '@mui/icons-material';
import HamburgerMenuContext from '../../store/HamburgerMenuContext.jsx';

export const Header = () => {

  const hamburgerMenuCtx = useContext(HamburgerMenuContext);

  function handleHamburgerMenu() {
    if (hamburgerMenuCtx.toggleMenu) {
      hamburgerMenuCtx.hideMenu()
    }
  }
  
  return (
    <>
      <header>
        <div className='container flexsb'>
          <div className='title' >
            <h3>Viral Desai</h3>
          </div>
          <div className={hamburgerMenuCtx.toggleMenu ? "showLinksInMenu" : "hideLinksInMenu"}>
            {
              navLinks.map((link, i) => (
                <Link to={link.url} key={i} onClick={handleHamburgerMenu}>
                  {link.text}
                </Link>
              ))
            }
          </div>

          { /* <button className="hamburgerMenu" onClick={() => setToggleHamburgerMenu(!toggleHamburgerMenu)}>
                  <Menu className="icon"></Menu>
              </button>*/}
          <button className="hamburgerMenu" onClick={hamburgerMenuCtx.toggleMenu ? hamburgerMenuCtx.hideMenu : hamburgerMenuCtx.showMenu}>
            <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  )
}
