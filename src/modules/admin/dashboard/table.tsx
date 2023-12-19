import { columns, productType } from "@/modules/tables/product/column";
import { DataTableProduct } from "@/modules/tables/product/data-table";

export default function AdminProductTable({
  product,
}: {
  product: productType[];
}) {
  console.log("my admin product table", product);
  return (
    <main>
      {/* @ts-ignore */}
      <DataTableProduct columns={columns} data={product?.product} />
    </main>
  );
}
