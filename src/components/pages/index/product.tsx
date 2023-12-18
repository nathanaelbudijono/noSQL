import * as React from "react";
import { useAppStore, useProducts } from "@/lib/store";

import IndexCard from "@/modules/index/index-card";
import { productItemType } from "@/lib/slices/cart/cart-slices";

export default function Product({ role }: { role: string }) {
  const { getItem } = useAppStore();

  React.useEffect(() => {
    getItem();
  }, []);
  const products = useProducts();
  return (
    <main>
      {/* @ts-ignore */}
      {products.product
        ?.slice(0, 3)
        ?.map((product: productItemType, index: number) => (
          <IndexCard key={index} product={product} role={role} index={index} />
        ))}
    </main>
  );
}
