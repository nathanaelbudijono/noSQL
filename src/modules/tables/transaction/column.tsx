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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/core/dialog";
import { toast } from "react-toastify";

export type cartType = {
  id: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    imageURL: string;
    quantity: number;
  };
  quantity: number;
  totalPrice: number;
  status: string;
  purchaseDate: string;
};

export const columns: ColumnDef<cartType>[] = [
  {
    accessorKey: "user",
    header: "Buyer",
    cell: ({ row }) => {
      const firstName = row.original.user.firstName;
      const lastName = row.original.user.lastName;
      return (
        <div>
          <span>{firstName + lastName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
      const name = row.original.product.name;

      return (
        <div>
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => {
      const price = row.original.totalPrice;
      return (
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
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "purchaseDate",
    header: "Purchase Date",
  },
  {
    id: "id",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(id)}>
              Edit Product
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>More</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
