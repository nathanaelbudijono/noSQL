"use client";

import * as React from "react";
import { clsx } from "clsx";
import { Button } from "@/components/buttons/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { FaUserCircle } from "react-icons/fa";
import { nextAPIUrl } from "@/constant/env";
import axios from "axios";

import { LogOut, Settings, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/core/dropdown-menu";

interface navbarType {
  id: string;
  role: string;
}

export default function Navbar({ id, role }: navbarType) {
  const pathname = usePathname();
  const router = useRouter();

  async function LogoutSystem() {
    const res = await axios.post(`${nextAPIUrl}/public/logout`);
    if (res.status === 200) {
      router.push("http://localhost:3000");
    }
  }

  if (role === "user") {
    return (
      <main className={clsx("max-md:px-6 sticky top-0 z-10", "bg-neutral-600")}>
        <section className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center py-4">
            <Link href={"/"}>
              <img src="/image/GloWhite.png" className="h-12" />
            </Link>
            {pathname.startsWith("/login") ||
            pathname.startsWith("/register") ? (
              ""
            ) : (
              <div className="flex gap-4 items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <FaUserCircle />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="hover:bg-primary/90">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>

                      <DropdownMenuItem className="hover:bg-primary/90">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="hover:bg-primary/90">
                      <button
                        className="flex items-center"
                        onClick={LogoutSystem}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </button>

                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </section>
      </main>
    );
  } else if (role === "admin") {
    return (
      <main className={clsx("max-md:px-6 sticky top-0 z-10", "bg-neutral-600")}>
        <section className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center py-4">
            <Link href={"/"}>
              <img src="/image/GloWhite.png" className="h-12" />
            </Link>
            {pathname.startsWith("/login") ||
            pathname.startsWith("/register") ? (
              ""
            ) : (
              <div className="flex gap-4 items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <FaUserCircle />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="hover:bg-primary/90">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>

                      <DropdownMenuItem className="hover:bg-primary/90">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="hover:bg-primary/90">
                      <button
                        className="flex items-center"
                        onClick={LogoutSystem}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </button>

                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <main className={clsx("max-md:px-6 sticky top-0 z-10", "bg-neutral-600")}>
        <section className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center py-4">
            <Link href={"/"}>
              <img src="/image/GloWhite.png" className="h-12" />
            </Link>
            {pathname.startsWith("/login") ||
            pathname.startsWith("/register") ? (
              <div></div>
            ) : (
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  onClick={() => router.push("/login/user")}
                >
                  Login
                </Button>
                <Button
                  variant="default"
                  onClick={() => router.push("/register/user")}
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    );
  }
}
