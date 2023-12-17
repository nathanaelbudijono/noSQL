import * as React from "react";

import Seo from "@/components/core/seo";
import Navbar from "@/modules/navbar";
import Hero from "@/modules/index/hero";
import Sertifikasi from "@/modules/index/sertif";
import Product from "@/modules/index/product";
import Footer from "@/modules/footer";
import { useAppStore } from "@/lib/store";

export default function Home() {
  const { getUserInfo, users } = useAppStore();

  React.useEffect(() => {
    getUserInfo();
  }, []);

  console.log();

  return (
    <>
      <Seo />
      <Navbar />
      <Hero />
      <Sertifikasi />
      <Product />
      <Footer />
    </>
  );
}
