import StatementChart from "@/components/core/chart";
import { Skeleton } from "@/components/core/skeleton";
import Typography from "@/components/core/typography";
import { adminProfileType } from "@/lib/slices/role/admin-slices";
import { useAppStore } from "@/lib/store";
import { Layout } from "lucide-react";
import { FaMoneyBillWave } from "react-icons/fa6";

export type Day = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface DailyAmount {
  day: Day;
  amount: number;
}

export default function AdminDashboardModule({
  adminProfile,
}: {
  adminProfile: adminProfileType;
}) {
  const quickData = [
    {
      title: "Total Revenue",

      value: adminProfile?.adminDoc?.wallet || 0,
      description: "Lorem ipsum dolor si amet",
    },
    {
      title: "Total items",
      // @ts-ignore
      value: adminProfile?.adminDoc?.product.length || 0,
      description: "Lorem ipsum dolor si amet",
    },
    {
      title: "Subscribers",
      value: 1,
      description: "Lorem ipsum dolor si amet",
    },
    {
      title: "Total Sales Today",
      value: adminProfile?.adminDoc?.wallet || 0,
      description: "Lorem ipsum dolor si amet",
    },
  ];
  return (
    <main>
      <section className="grid grid-cols-4 max-sm:grid-cols-2 gap-2">
        {quickData?.map((item, index) => {
          return (
            <div
              className="mt-3 px-6 py-3 border overflow-auto border-neutral-600 w-full rounded-md bg-neutral-700 shadow-md"
              key={index}
            >
              <Typography variant="p" className="mb-2">
                {item?.title}
              </Typography>
              {index === 0 || index === 3 ? (
                <Typography variant="h3" className="whitespace-nowrap">
                  {item?.value
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                    .replace(/^(\D+)/, "Rp ")}
                </Typography>
              ) : (
                <Typography variant="h3">{item?.value}</Typography>
              )}

              <Typography variant="small" color="muted" className="text-xs">
                {item?.description}
              </Typography>
            </div>
          );
        })}
      </section>
      <section className="mt-3 flex gap-2 max-sm:flex-col">
        <div className="w-3/5 max-sm:w-full">
          <StatementChart statement={barData as DailyAmount[]} />
        </div>
        <div className="border w-full border-neutral-600 rounded-md px-6 py-3   shadow-lg">
          <Typography variant="h4">Recent Transactions</Typography>
          <Typography variant="small" className="text-xs">
            A list of your recent Transactions.
          </Typography>
          <div className="mt-3">
            {recentTransaction.slice(0, 6).map((item, index) => {
              return (
                <div
                  className="flex justify-between items-center py-2"
                  key={index}
                >
                  <div className="flex gap-2 items-center">
                    <FaMoneyBillWave className="p-1 rounded-full bg-white text-3xl" />
                    <div>
                      <Typography variant="small">{item?.name}</Typography>
                      <Typography
                        variant="small"
                        className="text-xs"
                        color="muted"
                      >
                        {item?.email}
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <Typography variant="small" color="primary">
                      {item?.amount
                        .toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                        .replace(/^(\D+)/, "Rp ")}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

const recentTransaction = [
  {
    name: "PT Ruang Cipta",
    email: "ruangcipta@gmail.com",
    amount: 1000000,
  },
  {
    name: "PT Ruang Cipta",
    email: "ruangcipta@gmail.com",
    amount: 1000000,
  },
  {
    name: "PT Ruang Cipta",
    email: "ruangcipta@gmail.com",
    amount: 1000000,
  },
  {
    name: "PT Ruang Cipta",
    email: "ruangcipta@gmail.com",
    amount: 1000000,
  },
  {
    name: "PT Ruang Cipta",
    email: "ruangcipta@gmail.com",
    amount: 1000000,
  },
  {
    name: "PT Ruang Cipta",
    email: "ruangcipta@gmail.com",
    amount: 1000000,
  },
  {
    name: "PT Ruang Cipta",
    email: "ruangcipta@gmail.com",
    amount: 1000000,
  },
];

const barData = [
  {
    day: "Mon",
    amount: 300000,
  },
  {
    day: "Tue",
    amount: 1200000,
  },
  {
    day: "Wed",
    amount: 700000,
  },
  {
    day: "Thu",
    amount: 310000,
  },
  {
    day: "Fri",
    amount: 230000,
  },
  {
    day: "Sat",
    amount: 43000,
  },
  {
    day: "Sun",
    amount: 250000,
  },
];
