import * as React from "react";
import { useAppStore, useProducts } from "@/lib/store";

import { productItemType } from "@/lib/slices/cart/cart-slices";

import { Button } from "@/components/buttons/button";
import Typography from "@/components/core/typography";
import Layout from "@/components/layout/layout";
import { nextUrl } from "@/constant/env";
import { useRouter } from "next/router";

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
import { MdTableRows } from "react-icons/md";
import { MdIndeterminateCheckBox } from "react-icons/md";
import { Skeleton } from "@/components/core/skeleton";
export default function Product({ role }: { role: string }) {
  const { getItem, isLoading } = useAppStore();

  React.useEffect(() => {
    getItem();
  }, []);

  const products = useProducts();

  if (isLoading) {
    return (
      <div>
        <div className="bg-accent h-[1px] w-full"></div>
        <Layout className="mt-10 max-sm:h-full">
          <Tabs defaultValue="rows" className="w-full overflow-hidden">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="rows" className="shadow-none">
                <MdTableRows />
              </TabsTrigger>
              <TabsTrigger value="grid" className="shadow-none">
                <MdIndeterminateCheckBox />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rows">
              <Card className="border-transparent">
                <CardHeader>
                  <CardTitle>
                    <Skeleton className="h-8 w-32" />
                  </CardTitle>
                  <CardDescription>
                    <Skeleton className="h-8 w-64" />
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {Array.from({ length: 3 }, (_, index) => (
                    <SkeletonIndex key={index} index={index} />
                  ))}
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="grid">
              <Card className="border-transparent">
                <CardHeader>
                  <CardTitle>
                    {" "}
                    <Skeleton className="h-8 w-32" />
                  </CardTitle>
                  <CardDescription>
                    <Skeleton className="h-8 w-64" />
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-3 grid grid-cols-3 gap-x-3.5 gap-y-4 max-sm:grid-cols-1">
                  {Array.from({ length: 6 }, (_, index) => (
                    <SkeletonGrid key={index} />
                  ))}
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </Layout>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-accent h-[1px] w-full"></div>
      <Layout className="mt-10 max-sm:h-full">
        <Tabs defaultValue="rows" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="rows" className="shadow-none">
              <MdTableRows />
            </TabsTrigger>
            <TabsTrigger value="grid" className="shadow-none">
              <MdIndeterminateCheckBox />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="rows">
            <Card className="border-transparent">
              <CardHeader>
                <CardTitle>Best Selling Products</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* @ts-ignore */}
                {products.product
                  ?.slice(0, 3)
                  ?.map((product: productItemType, index: number) => (
                    <IndexCard
                      key={index}
                      product={product}
                      role={role}
                      index={index}
                    />
                  ))}
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="grid">
            <Card className="border-transparent">
              <CardHeader>
                <CardTitle>GloWhite Catalog</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-3 grid grid-cols-3 gap-x-3.5 gap-y-4 max-sm:grid-cols-1">
                {/* @ts-ignore */}
                {products.product?.map(
                  (product: productItemType, index: number) => (
                    <GridCard
                      key={index}
                      product={product}
                      role={role}
                      index={index}
                    />
                  )
                )}
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </Layout>
    </div>
  );
}
function SkeletonIndex({ index }: { index: number }) {
  return (
    <div
      className={`flex ${
        index === 1 && "flex-row-reverse"
      } items-center space-x-12`}
    >
      <Skeleton className="h-32 w-32 rounded-full" />
      <div className="space-y-5">
        <Skeleton className="h-8 w-[300px]" />
        <Skeleton className="h-12 w-[500px]" />
      </div>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <main className="bg-white border border-accent shadow-md rounded-lg overflow-hidden h-full">
      <div className="overflow-hidden h-[250px]">
        <Skeleton className="h-[250px]" />
      </div>
      <section className="px-4 py-3">
        <div className="flex flex-col gap-1">
          <Typography variant="p">
            <Skeleton className="h-4 w-24" />
          </Typography>
          <Typography variant="large" className="font-semibold">
            <Skeleton className="h-8 w-32" />
          </Typography>
          <Typography variant="small" color="muted">
            <Skeleton className="h-4 w-12" />
          </Typography>
        </div>
        <div className="mt-3">
          <Skeleton className="h-4 w-16" />
        </div>
      </section>
    </main>
  );
}

function GridCard({
  product,
  role,
  index,
}: {
  product: productItemType;
  role: string;
  index: number;
}) {
  const { addToCart } = useAppStore();
  const router = useRouter();
  return (
    <main
      className="bg-white border border-accent shadow-md rounded-lg overflow-hidden h-full"
      key={index}
    >
      <div className="overflow-hidden h-[250px]">
        <img
          src={product?.imageURL}
          alt="product image"
          className="object-cover w-[300px]"
        />
      </div>
      <section className="px-4 py-3">
        <div className="flex flex-col gap-1">
          <Typography variant="p">{product?.name}</Typography>
          <Typography variant="large" className="font-semibold">
            {product?.price
              .toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
              .replace(/^(\D+)/, "Rp ")}
          </Typography>
          <Typography variant="small" color="muted">
            {product?.quantity} left
          </Typography>
        </div>
        <div className="mt-3 flex justify-center">
          {role === "user" && (
            <Button
              variant="default"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to Cart
            </Button>
          )}
          {role === "admin" && (
            <Button variant="default" disabled>
              Add to Cart
            </Button>
          )}
          {!role && (
            <Button
              variant="default"
              onClick={() => {
                router.push(`${nextUrl}/login/user`);
              }}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </section>
    </main>
  );
}

function IndexCard({
  product,
  role,
  index,
}: {
  product: productItemType;
  role: string;
  index: number;
}) {
  const { addToCart } = useAppStore();
  const router = useRouter();
  return (
    <main
      className={`${index === 0 ? "mt-3" : "mt-5"} h-[60vh] max-sm:h-full `}
    >
      <section
        className={`flex  ${
          index === 1 ? "flex-row-reverse" : " "
        } gap-5 max-sm:flex-col w-full `}
      >
        <div className="w-full flex max-sm:justify-center ">
          <img
            src={product?.imageURL}
            className="object-cover rounded-md shadow-md max-sm:h-full"
            alt="Product photo"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="h3" color="primary">
            {product.name}
          </Typography>
          <Typography variant="small" color="muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae lorem quam. Nulla felis libero, lacinia at est id, tincidunt
            dignissim turpis. Nam lobortis, nisl ut ultrices vulputate, enim
            velit congue ante, ut sagittis justo dui ac lectus.
          </Typography>
          <div>
            {role === "user" && (
              <Button
                variant="default"
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to Cart
              </Button>
            )}
            {role === "admin" && (
              <Button variant="default" disabled>
                Add to Cart
              </Button>
            )}
            {!role && (
              <Button
                variant="default"
                onClick={() => {
                  router.push(`${nextUrl}/login/user`);
                }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
