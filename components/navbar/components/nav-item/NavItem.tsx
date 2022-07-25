import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./NavItem.module.css";

interface Props {
  href: string;
  text: string;
}

const NavItem: FC<Props> = ({ href, text }) => {
  const { pathname } = useRouter();

  return (
    <Link href={href}>
      <a className={pathname === href ? styles.active : ""}>{text}</a>
    </Link>
  );
};

export default NavItem;
