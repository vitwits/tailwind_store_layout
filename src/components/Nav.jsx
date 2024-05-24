import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex items-center">
          <img src={headerLogo} alt="Logo" width={60} />
          <span className="font-montserrat text-red-600 text-3xl font-bold">FretFire</span>
        </a>
        <ul className="flex-1 flex justify-center items-center max-lg:hidden gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25}></img>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
