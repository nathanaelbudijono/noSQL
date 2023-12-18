import { Button } from "@/components/buttons/button";
import { ItemsCart } from "@/models/itemsCart";
import {
  AirVent,
  PackageCheck,
  Package,
  Truck,
  CheckCircle,
} from "lucide-react";
const keterangan = [
  {
    title: "Confirm",
    icon: <PackageCheck />,
  },
  {
    title: "To Ship",
    icon: <Package />,
  },
  {
    title: "To Receive ",
    icon: <Truck />,
  },
  {
    title: "Complited",
    icon: <CheckCircle />,
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

const UserDashboard = () => {
  return (
    <main>
      <section className="flex gap-5 bg-neutral-500 h-fit border border-neutral-500 shadow-lg rounded-md p-5 ">
        <div>
          <img
            src="/image/profile.png"
            alt="profile pricture"
            className="object-cover w-14"
          />
        </div>
        <div>
          <p>ela@gmail.com</p>
          <p>Ela Nur Aini</p>
          <p>Rp100.000</p>
        </div>
      </section>
      <section className=" bg-white h-fit border border-neutral-500 shadow-lg rounded-md p-5 mt-5">
        <div>
          <h1 className="text text-xl mb-5">Pesanan Saya</h1>
        </div>
        <div className="grid grid-cols-4 gap-5 mb-5 justify-center">
          {keterangan.map((item) => (
            <button className="flex flex-col items-center shadow-y-lg w-full rounded-md px-5 py-2 text-typography-700 bg-white">
              {item.icon} {item.title}
            </button>
          ))}
        </div>
      </section>
      <section className="bg-white h-fit border border-neutral-500 shadow-lg rounded-md p-5 mt-5 ">
        <h1 className="text-xl mb-7 font-semibold">Top-up</h1>
        <section className="grid grid-cols-3 gap-14 mb-7 justify-center">
          {saldo.map((item) => (
            <Button variant="outline">Rp{item.jumlah}</Button>
          ))}
        </section>
        <div className="flex justify-between items-center">
          <div className="text-typography-100">
            <h2>Nominal</h2>
            <h2 className="text-2xl">Rp0</h2>
          </div>
          <Button variant="default">TOP-UP</Button>
        </div>
      </section>
    </main>
  );
};

export default UserDashboard;
