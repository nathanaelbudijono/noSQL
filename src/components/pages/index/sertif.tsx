import Typography from "@/components/core/typography";
import Layout from "@/components/layout/layout";

export default function Sertifikasi() {
  return (
    <>
      <Layout className="h-[60vh] max-sm:h-full flex flex-col items-center justify-center mt-10">
        <Typography variant="h2" color="primary" className="text-center mb-3">
          Rahasia Kulit Cerah Seketika
        </Typography>
        <Typography variant="h3" className="font-normal italic">
          <b>#</b>WITH<b>GLO</b>WE<b>GLOW</b>
        </Typography>
        <section className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 mt-10">
          {Sertifikat.map((item) => (
            <div className="flex flex-col items-center gap-1" key={item?.title}>
              <img src={item?.image} className="w-16 mb-3 object-cover" />
              <Typography variant="large" color="primary">
                {item?.title}
              </Typography>
              <Typography
                variant="small"
                color="muted"
                className="text-center mt-3"
              >
                {item?.desc}
              </Typography>
            </div>
          ))}
        </section>
      </Layout>
    </>
  );
}

const Sertifikat = [
  {
    image: "/image/cruelty.png",
    title: "CRUELTY FREE",
    desc: "Produk ini tidak diujikan kepada hewan sebagai bentuk percobaan.",
  },
  {
    image: "/image/paraben.png",
    title: "PARABEN FREE",
    desc: "Produk ini tidak mengandung paraben sebagai pengawet.",
  },
  {
    image: "/image/pom.png",
    title: "BADAN POM",
    desc: "Semua produk kami telah lolos uji Badan POM sesuai dengan deskrisi yang ada di produk.",
  },
];
