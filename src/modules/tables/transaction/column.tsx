import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { AlertCircle, MoreHorizontal } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/buttons/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/forms/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/forms/select";
import { toast } from "react-toastify";
import { nextAPIUrl } from "@/constant/env";
import axios from "axios";

export type cartType = {
  _id: string;
  buyer: string;
  email: string;
  createdAt: Date;
  totalPrice: number;
  status: string;
  cart: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
};

interface StatusFormProps {
  id: string;
  initialStatus: string;
}

const StatusForm: React.FC<StatusFormProps> = ({ id, initialStatus }) => {
  const FormSchema = z.object({
    status: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const status = data.status;
    try {
      const res = await axios.put(`${nextAPIUrl}/auth/admin/status/${id}`, {
        status,
      });
      await toast.promise(Promise.resolve(res.data), {
        pending: "Updating status...",
        success: "Successfully update status...",
        error: "Fail to update status...",
      });
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full grid grid-cols-2 gap-2"
      >
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={initialStatus} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="confirm">Confirm</SelectItem>
                  <SelectItem value="packaging">Packaging</SelectItem>
                  <SelectItem value="shipping">Shipping</SelectItem>
                  <SelectItem value="rate">Rate</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};

export const columns: ColumnDef<cartType>[] = [
  {
    accessorKey: "email",
    header: "Buyer",
  },
  {
    accessorKey: "cart",
    header: "Product",
    cell: ({ row }) => {
      const { cart } = row.original;

      return (
        <div className="flex flex-col whitespace-nowrap">
          {cart?.map((item, index) => (
            <span className="" key={index}>
              {item?.name}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "cart",
    header: "quantity",
    cell: ({ row }) => {
      const { cart } = row.original;
      return (
        <div className="flex flex-col">
          {cart?.map((item, index) => (
            <span className="" key={index}>
              {item?.quantity}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => {
      const total = row.original.totalPrice;
      return (
        <span className="whitespace-nowrap">
          {total
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
    accessorKey: "createdAt",
    header: "Purchase Date",
    cell: ({ row }) => {
      // @ts-ignore
      return <span>{row.original.createdAt.slice(0, 10)}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const id = row.original._id;

      return (
        <div>
          <StatusForm id={id} initialStatus={row.original.status} />
        </div>
      );
    },
  },
];
