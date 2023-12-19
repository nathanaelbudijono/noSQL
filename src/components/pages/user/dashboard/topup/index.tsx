import * as React from "react";

import { Button } from "@/components/buttons/button";
import Typography from "@/components/core/typography";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/core/dialog";

import { GiBearFace, GiChicken } from "react-icons/gi";
import { FaHatCowboy } from "react-icons/fa";

import { ToggleGroup, ToggleGroupItem } from "@/components/core/toggle-group";
import { nextAPIUrl } from "@/constant/env";
import axios from "axios";
import { toast } from "react-toastify";

export default function Topup({ email }: { email: string }) {
  const [topup, setTopup] = React.useState(0);

  async function AddMoney() {
    try {
      const res = await axios.put(`${nextAPIUrl}/auth/user/wallet`, {
        topup,
        email,
      });
      await toast.promise(Promise.resolve(res.data), {
        pending: "Adding money to your wallet.",
        success: "Successfully money to your wallet.",
        error: "Failed to add money to your wallet.",
      });
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  }
  return (
    <main className="h-screen">
      <Typography variant="h3">Top up your e-money</Typography>
      <Typography variant="small" color="muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis mi
        euismod, feugiat mi posuere, ullamcorper leo. Pellentesque eget turpis
        porttitor, varius lectus vel, placerat nulla.
      </Typography>
      <section className="mt-5">
        <div className="relative bg-blue-600 h-[30vh] shadow-sm rounded-lg">
          <Typography
            variant="small"
            className="font-semibold italic absolute top-5 left-5"
            color="white"
          >
            Tahapan Xpresi BCI
          </Typography>

          <div className="w-16 h-16 rounded-full bg-orange-300 absolute bottom-5 right-5"></div>
          <div className="w-16 h-16 rounded-full bg-yellow-400 absolute bottom-5 right-[60px]"></div>
        </div>
      </section>
      <section className="mt-5">
        <section className="h-[40vh] p-5">
          <Typography variant="h4" className="mb-5">
            Select Nominal
          </Typography>
          <section className="grid grid-cols-3 gap-5 max-sm:grid-cols-2 mb-5 justify-center">
            {saldo.map((item) => (
              <Button
                variant="outline"
                onClick={() => {
                  setTopup(item?.jumlah);
                }}
                key={item.jumlah}
              >
                {item.jumlah
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                  .replace(/^(\D+)/, "Rp ")}
              </Button>
            ))}
          </section>
          <div className="flex justify-end">
            {topup > 0 && (
              <Dialog>
                <DialogTrigger className="bg-primary text-sm hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-typography-100">
                  Top up
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle>Choose top up method.</DialogTitle>
                    <DialogDescription>
                      You aer about to add Rp. {topup}, consectetur adipiscing
                      elit. Morbi quis mi euismod, feugiat mi posuere,
                      ullamcorper leo. Pellentesque eget turpis porttitor,
                      varius lectus vel, placerat nulla.
                      <div className="mt-3">
                        <p className="text-md font-semibold leading-none tracking-tight">
                          Choose a bank
                        </p>
                        <ToggleGroup type="single">
                          <ToggleGroupItem
                            value="bold"
                            aria-label="Toggle bold"
                          >
                            <GiBearFace className="h-4 w-4" />
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            value="italic"
                            aria-label="Toggle italic"
                          >
                            <GiChicken className="h-4 w-4" />
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            value="strikethrough"
                            aria-label="Toggle strikethrough"
                          >
                            <FaHatCowboy className="h-4 w-4" />
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </div>
                    </DialogDescription>
                    <DialogFooter>
                      <Button variant="default" onClick={AddMoney}>
                        Yes
                      </Button>
                    </DialogFooter>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}

const saldo = [
  {
    jumlah: 10000,
  },
  {
    jumlah: 20000,
  },
  {
    jumlah: 50000,
  },
  {
    jumlah: 100000,
  },
  {
    jumlah: 200000,
  },
  {
    jumlah: 500000,
  },
];
