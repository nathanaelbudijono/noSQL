import * as React from "react";

import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import { useAppStore } from "@/lib/store";

const UserDashboardPage = () => {
  const { getUserInfo, users } = useAppStore();

  //   React.useEffect(() => {
  //     getUserInfo();
  //   }, []);
  //   console.log(users);
  return (
    <main>
      <Seo templateTitle="Dashboard" />
      <Layout className="flex flex-col">
        <UserDashboardPage />
      </Layout>
    </main>
  );
};

export default UserDashboardPage;
