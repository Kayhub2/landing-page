import "./Header.css";
import Logo from "./HeaderComponents/Logo";
import { Navbar } from "./HeaderComponents/Navbar";



function Header() {
  return (
    // <header className="w-full py-[10px] px-[50px] flex items-center justify-between">
    <div className="header-root">
      <Logo/>
      <Navbar/>
    </div>
    // </header>
  )
}

export default Header;