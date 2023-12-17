import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import CreateItemDashboard from "@/components/pages/admin/dashboard/new";
import { adminType } from "@/lib/slices/admin-slices";
import { validateAdmin } from "@/lib/validation/validation-admin";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";

export default function NewProductPage({ admin }: { admin: adminType }) {
  return (
    <main>
      <Seo templateTitle="Admin Dashboard" />
      <Navbar id={admin?.id} role={admin?.role} />
      <Layout className="flex flex-col">
        <CreateItemDashboard email={admin?.email} />
      </Layout>
      <Footer />
    </main>
  );
}
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await validateAdmin(ctx);
}
