import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import Topup from "@/components/pages/user/dashboard/topup";
import { userType } from "@/lib/slices/role/user-slices";
import { validateUser } from "@/lib/validation/validation-user";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";

export default function TopUpPage({ user }: { user: userType }) {
  return (
    <main>
      <Seo templateTitle="Top Up" />
      <Navbar id={user?.id} role={user?.role} image={user?.image} />
      <Layout className="flex flex-col">
        <Topup email={user?.email} />
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await validateUser(ctx);
}
