import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import Userlogin from "@/components/pages/login/user";

import Navbar from "@/modules/navbar";

export default function UserLoginPage() {
  return (
    <main className="relative">
      <Seo templateTitle="Login" />
      <Navbar />
      <Seo title="Login" />
      <Layout className="justify-center items-center flex-col h-screen relative">
        <Userlogin />
      </Layout>
    </main>
  );
}
