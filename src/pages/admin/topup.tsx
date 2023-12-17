import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { FaArrowRight } from "react-icons/fa";
export default function Topup() {
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
  return (
    <>
      <Navbar />
      <main className=" items-center justify-center max-w-2xl mx-auto mt-5 ">
        <section className="bg-secondary px-24 py-10 rounded-xl ">
          <h1 className="text-3xl text-typography-100 mb-7 font-semibold">
            Top-up
          </h1>
          <section className="grid grid-cols-3 gap-10 mb-7 justify-center">
            {saldo.map((item) => (
              <button className="border-2 border-black w-full rounded-md px-5 py-2 text-typography-700 bg-typography-100">
                Rp{item.jumlah}
              </button>
            ))}
          </section>
          <div className="flex justify-between items-center">
            <div className="text-typography-100">
              <h2>Nominal</h2>
              <h2 className="text-2xl">Rp0</h2>
            </div>
            <button className="bg-primary text-typography-100 h-fit px-4 py-1 rounded-md">
              TOP-UP
            </button>
          </div>
        </section>
        <main className="bg-white flex flex-col gap-4 items-center justify-center py-3">
          <h1 className="text-black text-3xl font-semibold">
            {" "}
            Lanjut Berbelanja?
          </h1>
          <button className="flex gap-2 items-center justify-center bg-primary text-typography-100 px-4 py-1 rounded-md">
            <p>Go to Homepage</p> <FaArrowRight />
          </button>
        </main>
      </main>
      <Footer />
    </>
  );
}
