import Seo from "@/components/core/seo";

import Layout from "@/components/layout/layout";

import Navbar from "@/modules/navbar";

import UserRegister from "@/components/pages/register/user";

export default function UserRegisterPage() {
  return (
    <main className="relative">
      <Navbar />
      <Seo templateTitle="Login" />
      <Layout className="flex justify-center items-center flex-col">
        <UserRegister />
      </Layout>
    </main>
  );
}
