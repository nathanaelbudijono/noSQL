import * as React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useSidebarContext } from "@/hooks/useSidebar";

import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Button from "@/components/buttons/button";
import Typography from "@/components/core/typography";

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } =
    React.useContext(useSidebarContext);

  return (
    <div className="sidebar__wrapper">
      <Button variant="primary" className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </Button>
      <aside
        className="sidebar bg-primary-500 dark:bg-quaternary-400"
        data-collapse={isCollapsed}
      >
        <div className="sidebar__top pt-1">
          <Typography variant="h4">Title</Typography>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`inline-block text-[1rem] text-typography-100 dark:text-typography-800 py-[0.7rem] px-[0.9rem] mb-[1rem] rounded-md ${
                    router.pathname === href
                      ? "bg-primary-300 dark:bg-quaternary-300"
                      : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: BsPeople,
  },
  {
    name: "Mails",
    href: "/mails",
    icon: FiMail,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: TiContacts,
  },
];
