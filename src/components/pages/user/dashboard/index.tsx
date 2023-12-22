import * as React from "react";

import { Button } from "@/components/buttons/button";
import Typography from "@/components/core/typography";

import { IoCheckmarkOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { GoPackageDependents } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { useAppStore } from "@/lib/store";
import { userCompleteType } from "@/lib/slices/role/user-slices";
import user from "@/pages/api/auth/user";

const UserDashboard = ({
  userComplete,
}: {
  userComplete: userCompleteType;
}) => {
  return (
    <main>
      <section className="flex items-center gap-10 max-sm:gap-5 max-md:gap-7 bg-gradient-to-r from-neutral-600 to-neutral-500 h-[30vh]  shadow-sm rounded-md px-5 py-6 overflow-hidden">
        <div className="overflow-hidden">
          <img
            src="/image/profile.png"
            alt="profile pricture"
            className="object-cover w-32"
          />
        </div>
        <div>
          <Typography variant="h1" className="">
            {userComplete?.firstName} {userComplete?.lastName}
          </Typography>
          <p className="text-2xl font-semibold leading-none tracking-tight mt-3 mb-2 max-md:text-xl max-sm:text-lg">
            {userComplete?.wallet
              .toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
              .replace(/^(\D+)/, "Rp ")}
          </p>
          <Typography variant="small" color="muted">
            {userComplete?.email}
          </Typography>
        </div>
      </section>
      <section className="flex flex-col border border-neutral-500 shadow-sm rounded-md px-5 py-6 mt-3">
        <Typography variant="h3">My Order</Typography>
        <Typography variant="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
          blandit rutrum. Quisque congue egestas vehicula. In tincidunt lacus at
          aliquet tincidunt.
        </Typography>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 mt-5 w-full">
          {keterangan.map((item, index) => (
            <div>
              <button
                key={index}
                className="w-full flex flex-col gap-2 items-center hover:bg-accent px-4 py-2 rounded-md ease-in-out"
              >
                <Typography variant="small" className="text-black">
                  {item?.title}
                </Typography>
                <item.icon className="text-4xl" />
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="bg-white h-[40vh] border border-neutral-500 shadow-lg rounded-md p-5 mt-5 ">
        <h1 className="text-xl mb-7 font-semibold">Top-up</h1>
        <section className="grid grid-cols-3 gap-14 mb-7 justify-center">
          {saldo.map((item) => (
            <Button variant="outline">
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
        <div className="flex justify-between items-center">
          <div className="text-typography-100">
            <h2>Nominal</h2>
            <h2 className="text-2xl">Rp0</h2>
          </div>
          <Button variant="default">TOP-UP</Button>
        </div>
      </section> */}
    </main>
  );
};

export default UserDashboard;

const keterangan = [
  {
    title: "Confirm",
    icon: IoCheckmarkOutline,
  },
  {
    title: "Packaging",
    icon: GoPackageDependents,
  },
  {
    title: "Shipping",
    icon: BsTruck,
  },
  {
    title: "Rate",
    icon: CiStar,
  },
];
const saldo = [
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
  {
    jumlah: 700000,
  },
  {
    jumlah: 1000000,
  },
];
