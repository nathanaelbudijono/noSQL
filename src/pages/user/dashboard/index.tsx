import * as React from "react";

import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import { useAppStore } from "@/lib/store";
import UserDashboard from "@/components/pages/user/dashboard";
import { GetServerSidePropsContext } from "next";
import { userType } from "@/lib/slices/role/user-slices";
import Navbar from "@/modules/navbar";
import Footer from "@/modules/footer";
import { validateUser } from "@/lib/validation/validation-user";

const UserDashboardPage = ({ user }: { user: userType }) => {
  const { getUserInfo, getUserComplete, userComplete } = useAppStore();
  React.useEffect(() => {
    getUserInfo();
    getUserComplete(user?.id);
  }, [user?.id]);
  return (
    <main>
      <Seo templateTitle="Dashboard" />
      <Navbar id={user?.id} role={user?.role} image={user?.image} />
      <Layout className="flex flex-col">
        {/* @ts-ignore */}
        <UserDashboard userComplete={userComplete} />
      </Layout>
      <Footer />
    </main>
  );
};

export default UserDashboardPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await validateUser(ctx);
}
