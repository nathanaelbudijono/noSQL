import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { AlertCircle, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/buttons/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/core/dropdown-menu";
import { cartType } from "@/lib/slices/cart/cart-slices";
import { useAppStore } from "@/lib/store";

interface CartCellProps {
  row: any; // Adjust the type accordingly
}

const CartCell: React.FC<CartCellProps> = ({ row }) => {
  const { updateQuantity } = useAppStore();

  return (
    <div className="flex gap-1">
      <Button
        variant="outline"
        size="sm"
        onClick={() => updateQuantity(row.original.id, "decrease")}
      >
        -
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => updateQuantity(row.original.id, "increase")}
      >
        +
      </Button>
    </div>
  );
};

export const cartColumns: ColumnDef<cartType>[] = [
  {
    accessorKey: "name",
    header: "Product",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.original.price;
      return (
        <div>
          <span>
            {price
              .toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
              .replace(/^(\D+)/, "Rp ")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    header: "Total Price",
    cell: ({ row }) => {
      const price = row.original.price;
      const quantity = row.original.quantity;
      const total = price * quantity;
      return (
        <div>
          <span>
            {total
              .toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
              .replace(/^(\D+)/, "Rp ")}
          </span>
        </div>
      );
    },
  },
  {
    id: "id",
    header: "Actions",
    cell: CartCell,
  },
];
