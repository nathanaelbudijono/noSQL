import Seo from "@/components/core/seo";
import Layout from "@/components/layout/layout";
import UserCart from "@/components/pages/user/cart";
import { userType } from "@/lib/slices/role/user-slices";
import { validateUser } from "@/lib/validation/validation-user";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";

export default function UserCartPage({ user }: { user: userType }) {
  return (
    <main>
      <Seo templateTitle="My Cart" />
      <Navbar id={user?.id} role={user?.role} image={user?.image} />
      <Layout className="flex flex-col">
        <UserCart id={user?.id} email={user?.email} />
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await validateUser(ctx);
}
