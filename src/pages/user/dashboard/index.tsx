import * as React from "react";

import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import { useAppStore } from "@/lib/store";
import UserDashboard from "@/components/pages/user/dashboard";

const UserDashboardPage = () => {
  const { getUserInfo, users } = useAppStore();
  React.useEffect(() => {
    getUserInfo();
  }, []);
  console.log(users);
  return (
    <main>
      <Seo templateTitle="Dashboard" />
      <Layout className="flex flex-col">
        <UserDashboard />
      </Layout>
    </main>
  );
};

export default UserDashboardPage;
