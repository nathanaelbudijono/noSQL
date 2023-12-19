import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/core/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/core/tabs";
import Typography from "@/components/core/typography";

import AdminDashboardModule from "@/modules/admin/dashboard";
import { useAppStore } from "@/lib/store";
import AdminProductTable from "@/modules/admin/dashboard/table";
import { DataTableTransaction } from "@/modules/tables/transaction/data-table";
import { columns } from "@/modules/tables/transaction/column";
import Layout from "@/components/layout/layout";
import { Skeleton } from "@/components/core/skeleton";
// import TransactionTab from "@/modules/admin/dashboard/transaction";

interface AdminDashboardProps {
  id: string;
  role: string;
  email: string;
}

const AdminDashboard = ({ id, role, email }: AdminDashboardProps) => {
  const {
    getProduct,
    product,
    getTransaction,
    transaction,
    getAdminProfile,
    adminProfile,
    isLoading,
  } = useAppStore();

  React.useEffect(() => {
    getProduct();
    getTransaction();
    getAdminProfile();
  }, []);

  console.log(product);
  if (isLoading) {
    return (
      <main className="h-screen w-full">
        <Layout className="flex flex-col">
          <Skeleton className="h-[30vh] w-full" />
          <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-2 mt-3 w-full">
            <Skeleton className="h-[50vh] w-full" />
            <Skeleton className="h-[50vh] w-full" />
            <Skeleton className="h-[50vh] w-full" />
            <Skeleton className="h-[50vh] w-full" />
          </div>
        </Layout>
      </main>
    );
  }
  return (
    <main className="h-full">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="product">Products</TabsTrigger>
          <TabsTrigger value="transaction">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>An overview of GloWhite store.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* @ts-ignore */}
              <AdminDashboardModule adminProfile={adminProfile} />
            </CardContent>
            <CardFooter>
              <Typography variant="small" color="muted">
                Updated at 17 December 2023
              </Typography>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="product">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent interdum, felis fringilla imperdiet sagittis.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* @ts-ignore */}
              <AdminProductTable product={product} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="transaction">
          <Card>
            <CardHeader>
              <CardTitle>Transaction</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent interdum, felis fringilla imperdiet sagittis.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <DataTableTransaction
                columns={columns}
                // @ts-ignore
                data={transaction?.product}
              />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AdminDashboard;
