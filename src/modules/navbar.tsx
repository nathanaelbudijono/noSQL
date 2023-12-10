import { clsx } from "clsx";
import Button from "@/components/buttons/button";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <main className={clsx("max-md:px-6 sticky top-0 z-10", "bg-neutral-600")}>
      <section className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link href={"/"}>
            <img src="/image/GloWhite.png" className="h-12" />
          </Link>
          {pathname.startsWith("/login") || pathname.startsWith("/register") ? (
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

const Links = [
  {
    title: "Home",
    link: "/",
  },
];
