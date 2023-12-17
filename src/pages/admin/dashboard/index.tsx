import * as React from "react";

import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import AdminDashboard from "@/components/pages/admin/dashboard";
import { adminType } from "@/lib/slices/admin-slices";
import { useAppStore } from "@/lib/store";
import { validateAdmin } from "@/lib/validation/validation-admin";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";

const AdminDashboardPage = ({ admin }: { admin: adminType }) => {
  return (
    <main>
      <Seo templateTitle="Admin Dashboard" />
      <Navbar id={admin?.id} role={admin?.role} />
      <Layout className="flex flex-col">
        <AdminDashboard
          id={admin?.id}
          role={admin?.role}
          email={admin?.email}
        />
      </Layout>
      <Footer />
    </main>
  );
};

export default AdminDashboardPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await validateAdmin(ctx);
}
