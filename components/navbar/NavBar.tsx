import Link from "next/link";
import { NavItem } from "./components";
import styles from "./NavBar.module.css";

const navItems = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact Us", href: "/contact" },
  { text: "Pricing", href: "/pricing" },
];

function NavBar() {
  return (
    <nav className={styles.menuContainer}>
      {navItems.map(({ text, href }) => (
        <NavItem href={href} text={text} key={text} />
      ))}
    </nav>
  );
}
export default NavBar;
