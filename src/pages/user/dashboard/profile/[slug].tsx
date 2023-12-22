import * as React from "react";

import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import ProfileUser from "@/components/pages/user/dashboard/profile";
import { userType } from "@/lib/slices/role/user-slices";
import { useAppStore } from "@/lib/store";
import { validateHome } from "@/lib/validation/validation-home";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";
import { Skeleton } from "@/components/core/skeleton";

export default function UseProfilePage({ user }: { user: userType }) {
  const { getUserComplete, userComplete } = useAppStore();
  React.useEffect(() => {
    getUserComplete(user?.id);
  }, [user?.id]);

  return (
    <main>
      <Seo templateTitle="Profile" />
      <Navbar id={user?.id} role={user?.role} />
      <Layout className="flex flex-scol">
        {/* @ts-ignore */}
        <ProfileUser id={user?.id} userComplete={userComplete} />
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await validateHome(ctx);
}
