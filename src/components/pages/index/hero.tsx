import { Button } from "@/components/buttons/button";
import Typography from "@/components/core/typography";
import Layout from "@/components/layout/layout";

export default function Hero({ role }: { role: string }) {
  return (
    <main className="bg-neutral-600">
      <Layout className="h-screen max-sm:h-full">
        <section className="flex items-center max-sm:flex-col">
          <div className="flex flex-col gap-4 whitespace-nowrap">
            <Typography variant="h1" color="primary">
              GloWhite Beauty Official
            </Typography>
            <Typography variant="h3" color="green">
              LOCAL BODY CARE WITH
            </Typography>
            <Typography variant="h3" color="green">
              SIMWHITE 377
            </Typography>
            <div>{!role && <Button variant="default">Register</Button>}</div>
          </div>
          <div>
            <img
              src="/image/3.png"
              className="object-cover"
              alt="Product photo"
            />
          </div>
        </section>
      </Layout>
    </main>
  );
}
