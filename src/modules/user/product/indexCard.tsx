import { Button } from "@/components/buttons/button";
import Typography from "@/components/core/typography";
import { nextUrl } from "@/constant/env";
import { productItemType } from "@/lib/slices/cart/cart-slices";
import { useAppStore } from "@/lib/store";
import { useRouter } from "next/router";

export default function IndexCard({
  product,
  role,
  index,
}: {
  product: productItemType;
  role: string;
  index: number;
}) {
  const { addToCart } = useAppStore();
  const router = useRouter();
  return (
    <main
      className={`${
        index === 0 ? "mt-3" : "mt-5"
      } h-full mb-10  max-sm:h-full `}
    >
      <section
        className={`flex  ${
          index === 1 ? "flex-row-reverse" : " "
        } gap-5 max-sm:flex-col w-full`}
      >
        <div className="w-full flex max-sm:justify-center ">
          <img
            src={product?.imageURL}
            className="object-cover rounded-md shadow-md max-sm:h-full"
            alt="Product photo"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="h3" color="primary">
            {product.name}
          </Typography>
          <Typography variant="small" color="muted">
            {product.description}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae lorem quam. Nulla felis libero, lacinia at est id, tincidunt
            dignissim turpis. Nam lobortis, nisl ut ultrices vulputate, enim
            velit congue ante, ut sagittis justo dui ac lectus.
          </Typography>
          <div className="max-sm:mb-5">
            {role === "user" && (
              <Button
                variant="default"
                onClick={() => {
                  addToCart(product);
                  console.log("my product is", product);
                }}
              >
                Add to Cart
              </Button>
            )}
            {role === "admin" && (
              <Button variant="default" disabled>
                Add to Cart
              </Button>
            )}
            {!role && (
              <Button
                variant="default"
                onClick={() => {
                  router.push(`${nextUrl}/login/user`);
                }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
