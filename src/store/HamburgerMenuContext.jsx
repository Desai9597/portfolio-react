import { createContext, useState}  from 'react';

const HamburgerMenuContext = createContext({
    toggleMenu: false,
    showMenu : () => {},
    hideMenu: () => {}
});

export function HamburgerMenuContextProvider({children}){

    const [toggleMenu, setToggleMenu] = useState(false);

    function showMenu() {
        setToggleMenu(true);
    }
    function hideMenu(){
        setToggleMenu(false);
    }

    const hamburgerMenuContext = {
        toggleMenu : toggleMenu,
        showMenu: showMenu,
        hideMenu : hideMenu
    };

    return(
        <HamburgerMenuContext.Provider value={hamburgerMenuContext}>
            {children}
        </HamburgerMenuContext.Provider>
    );
}
export default HamburgerMenuContext;