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
// import TransactionTab from "@/modules/admin/dashboard/transaction";

interface AdminDashboardProps {
  id: string;
  role: string;
  email: string;
}

const AdminDashboard = ({ id, role, email }: AdminDashboardProps) => {
  const { getProduct, product } = useAppStore();

  React.useEffect(() => {
    getProduct();
  }, []);

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
              <AdminDashboardModule />
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
              {/* <TransactionTab /> */}
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AdminDashboard;
