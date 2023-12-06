import Layout from "@/components/layout/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
// import BaseLayout from "@/components/layout/sidebar-layout";

export default function Home() {
  return (
    // <BaseLayout>
    <>
      <Seo />
      <Navbar />
      <Layout className="justify-center items-center flex-col h-[70vh]">
        <Typography variant="h2">NextJs + TailWindCSS starter kit</Typography>
        <Typography variant="h4">By Nathanael</Typography>
        <ArrowLink href="https://nathanaelbudijono.vercel.app">
          Click me!
        </ArrowLink>
      </Layout>
      <Footer />
    </>

    // </BaseLayout>
  );
}
