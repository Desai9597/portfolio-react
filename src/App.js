import { Pages } from './components/pages/Pages'
import './App.css';
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import { HamburgerMenuContextProvider } from './store/HamburgerMenuContext';

function App() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, []);

  return (
    <HamburgerMenuContextProvider>
            <Pages />
    </HamburgerMenuContextProvider>

  );
}

export default App;
