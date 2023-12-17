import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import LoginAsAdmin from "@/components/pages/login/admin";

import Navbar from "@/modules/navbar";

export default function AdminLoginPage() {
  return (
    <main className="relative">
      <Seo templateTitle="Login Admin" />
      <Navbar />
      <Seo title="Login" />
      <Layout className="justify-center items-center flex flex-col h-screen relative">
        <LoginAsAdmin />
      </Layout>
    </main>
  );
}
