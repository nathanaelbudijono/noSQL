import * as React from "react";

import Seo from "@/components/core/seo";
import Navbar from "@/modules/navbar";
import Hero from "@/components/pages/index/hero";
import Sertifikasi from "@/components/pages/index/sertif";
import Product from "@/components/pages/index/product";
import Footer from "@/modules/footer";
import { validateHome } from "@/lib/validation/validation-home";
import { GetServerSidePropsContext } from "next";
import { userType } from "@/lib/slices/user-slices";

export default function Home({ user }: { user: userType }) {
  return (
    <main>
      <Seo />
      <Navbar id={user?.id} role={user?.role} />
      <Hero />
      <Sertifikasi />
      <Product />
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await validateHome(ctx);
}
