import Seo from "@/components/core/seo";
import Navbar from "@/modules/navbar";
import Hero from "@/modules/index/hero";
import Sertifikasi from "@/modules/index/sertif";
import Product from "@/modules/index/product";
import Footer from "@/modules/footer";

export default function Home() {
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
