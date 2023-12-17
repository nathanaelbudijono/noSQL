import { Button } from "@/components/buttons/button";
import Typography from "@/components/core/typography";
import Layout from "@/components/layout/layout";

export default function Product() {
  return (
    <>
      {Products.map((item, index) => {
        return (
          <Layout className="h-[40vh] mt-10 max-sm:h-full" key={index}>
            <section
              className={
                index % 2 !== 0
                  ? "flex flex-row-reverse items-center max-sm:flex-col"
                  : "flex items-center max-sm:flex-col"
              }
            >
              <div>
                <img
                  src={item?.img}
                  className="object-cover w-[1000px]"
                  alt="Product photo"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Typography variant="h3" color="primary">
                  {item?.title}
                </Typography>
                <Typography variant="small" color="muted">
                  {item?.desc}
                </Typography>
                <div>
                  <Button variant="default" className="px-6">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </section>
          </Layout>
        );
      })}
    </>
  );
}

const Products = [
  {
    img: "/image/Lotion.png",
    title: "Bright Essence Shimering Lotion",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa ex, sagittis nec nulla sed, bibendum vestibulum erat. Nunc tristique nulla urna, at malesuada mauris mattis ac. In varius est a metus tristique, vel fringilla elit commodo. In hac habitasse platea dictumst. Phasellus imperdiet purus at quam rhoncus sollicitudin. Integer ac pretium est, et sollicitudin dui.",
  },
  {
    img: "/image/sabun.png",
    title: "Bright Essence Body Wash",
    desc: "Sabun mandi dengan aroma bunga segar yang mampu membersihkan minyak dan kotoran setelah beraktifitas seharian, kandungan Vit C dengan teknologi enkapsulasi memberikan perlindungan ekstra pada kulit.",
  },
  {
    img: "/image/scrub.png",
    title: "Bright Essence Body Scrub",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa ex, sagittis nec nulla sed, bibendum vestibulum erat. Nunc tristique nulla urna, at malesuada mauris mattis ac. In varius est a metus tristique, vel fringilla elit commodo. In hac habitasse platea dictumst. Phasellus imperdiet purus at quam rhoncus sollicitudin. Integer ac pretium est, et sollicitudin dui.",
  },
];
