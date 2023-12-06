import { clsx } from "clsx";
import ActiveLink from "@/components/links/active-link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { CiDark, CiSun } from "react-icons/ci";
import { Howl } from "howler";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [sound] = useState(new Howl({ src: ["/click.wav"] }));
  //----- Start Region Dark Mode -----//
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    sound.play();
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  //----- End Region Dark Mode -----//
  return (
    <main
      className={clsx(
        "px-16 max-md:px-6 sticky top-0 z-10",
        " bg-secondary-600  bg-opacity-40 backdrop-blur-[2px] ",
        "dark:bg-quaternary-300 dark:bg-opacity-40"
      )}
    >
      <section className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-3 items-center ">
            {Links.map((item, index) => (
              <ActiveLink key={index} href={item.link}>
                {item.title}
              </ActiveLink>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className={clsx(
              "px-2.5 py-2 text-lg rounded-md hover:bg-primary-300 text-typography-100 ",
              "dark:hover:bg-tertiary-300 dark:text-typography-800",
              "transition-all duration-200 ease-in"
            )}
          >
            {theme === "dark" ? <CiSun /> : <CiDark />}
          </button>
        </div>
      </section>
    </main>
  );
}

const Links = [
  {
    title: "Home",
    link: "/",
  },
];
