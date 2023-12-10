import * as React from "react";
import { clsx } from "clsx";
import Button from "@/components/buttons/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useAppStore } from "@/lib/store";
import Typography from "@/components/core/typography";

import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { users, logout, admins } = useAppStore();

  const pathname = usePathname();
  const router = useRouter();

  async function LogoutSystem() {
    await logout();
    window.location.reload();
  }
  if (users?.userToken || admins?.adminToken) {
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
                <div className="flex gap-2 items-center">
                  <Typography variant="small" className="text-primary">
                    Saldo
                  </Typography>
                  <b>$0</b>
                </div>
                <Button variant="primary" onClick={LogoutSystem}>
                  Sign Out
                </Button>
                <FaUserCircle className="text-xl" />
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
                  variant="primary"
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
