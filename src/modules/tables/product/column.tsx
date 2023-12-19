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

export type productType = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageURL: string;
  quantity: number;
};

export const columns: ColumnDef<productType>[] = [
  {
    accessorKey: "imageURL",
    header: "Preview",
    cell: ({ row }) => {
      const image = row.original.imageURL;
      console.log("my image", image);
      return (
        <div className="h-20 w-20">
          <img src={image} className="rounded-sm object-cover" />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.original.price || 0;
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
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    id: "id",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original.id;
      const name = row.original.name;
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
            <DropdownMenuItem>Delete Product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const DeleteButton = ({
  name,

  id,
}: {
  name: string;

  id: string;
}) => {
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [open, setOpen] = React.useState<boolean>(false);

  const confirmDelete = async () => {
    try {
      setIsDeleting(true);

      // await toast.promise(deleteBoat.mutateAsync(id), {
      //   pending: "Menghapus kapal...",
      //   success: "kapal berhasil dihapus!",
      //   error: "Gagal menghapus kapal!",
      // });
      setIsDeleting(false);
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-red-500 hover:bg-red-500/80">
          Hapus Boat
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px] z-[100]">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center">
            <AlertCircle size={90} color="red" />
          </div>
          <DialogTitle className="space-y-2">
            Apakah Anda yakin untuk menghapus {name}?
          </DialogTitle>
          <DialogDescription>
            Menghapus data {name} ini dari tabel tidak akan dapat dikembalikan
          </DialogDescription>
        </div>
        <DialogFooter className="flex justify-end">
          <DialogTrigger asChild>
            <Button
              variant="default"
              className="bg-yellow-400 hover:bg-yellow-400/80"
              disabled={isDeleting}
            >
              Kembali
            </Button>
          </DialogTrigger>
          <Button
            onClick={confirmDelete}
            className="bg-red-500 hover:bg-red-500/80"
            disabled={isDeleting}
          >
            Iya, Lanjutkan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
