import * as React from "react";

import Seo from "@/components/core/seo";
import Navbar from "@/modules/navbar";
import Hero from "@/components/pages/index/hero";
import Sertifikasi from "@/components/pages/index/sertif";
import Product from "@/components/pages/index/product";
import Footer from "@/modules/footer";
import { useAppStore } from "@/lib/store";

export default function Home() {
  const { getUserInfo, users } = useAppStore();

  React.useEffect(() => {
    getUserInfo();
  }, []);
  console.log(users);
  return (
    <main>
      <Seo />
      <Navbar />
      <Hero />
      <Sertifikasi />
      <Product />
      <Footer />
    </main>
  );
}
