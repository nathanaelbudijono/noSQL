import * as React from "react";
import { Button } from "@/components/buttons/button";
import { useAppStore, useCart } from "@/lib/store";
import { cartColumns } from "@/modules/tables/cart/column";
import { DataTableCart } from "@/modules/tables/cart/data-table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/core/dialog";
import Typography from "@/components/core/typography";
import { nextAPIUrl } from "@/constant/env";
import axios from "axios";
import { toast } from "react-toastify";

import { ImSpinner2 } from "react-icons/im";

export default function UserCart({ id, email }: { id: string; email: string }) {
  const { removeFromCart } = useAppStore();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const cart = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  async function handlerCheckout() {
    try {
      setIsLoading(true);
      const res = await axios.post(`${nextAPIUrl}/auth/user/buy`, {
        email,
        cart,
        id,
        totalPrice,
      });

      await toast.promise(Promise.resolve(res.data), {
        pending: "Checking out...",
        success: "Successfully checked out...",
        error: "Failed to checkout...",
      });
      removeFromCart();
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <main className="h-screen">
      <Typography variant="h3">My Cart</Typography>
      <Typography variant="small" color="muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
      </Typography>
      {cart.length > 0 && (
        <div className="flex justify-end">
          <Dialog>
            <DialogTrigger className="text-sm">Clear Cart</DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently clear your
                  cart.
                </DialogDescription>
                <DialogFooter>
                  <div className="flex justify-end">
                    <Button onClick={removeFromCart} variant="destructive">
                      Yes
                    </Button>
                  </div>
                </DialogFooter>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      )}

      <div className="container mx-auto py-5">
        <DataTableCart columns={cartColumns} data={cart} />
        {totalPrice > 0 && (
          <div>
            <Typography variant="small">Total Price</Typography>
            <Typography variant="h3" color="primary">
              {totalPrice
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .replace(/^(\D+)/, "Rp ")}
            </Typography>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <Button onClick={handlerCheckout}>
          {isLoading ? <ImSpinner2 className="animate-spin" /> : "Checkout"}
        </Button>
      </div>
    </main>
  );
}
