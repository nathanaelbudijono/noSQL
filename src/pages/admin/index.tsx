// import * as React from "react";
// import Layout from "@/components/layout/layout";
// import { useAppStore } from "@/lib/store";
// import Navbar from "@/modules/navbar";
// import { GetServerSidePropsContext } from "next";
// import { checkAdmin } from "@/lib/checkAdmin";

// export default function AdminPage() {
//   const { getAdminInfo, admins } = useAppStore();

//   React.useEffect(() => {
//     getAdminInfo();
//   }, []);

//   return (
//     <main>
//       <Navbar />
//       <Layout className="flex flex-col h-screen">
//         <h1>test</h1>
//       </Layout>
//     </main>
//   );
// }

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   return await checkAdmin(ctx);
// }
