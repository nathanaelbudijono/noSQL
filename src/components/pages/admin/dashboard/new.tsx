import * as React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/forms/form";
import { Button } from "@/components/buttons/button";
import Link from "next/link";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import Typography from "@/components/core/typography";
import { Input } from "@/components/forms/input";
import { Textarea } from "@/components/forms/text-area";

import { ImSpinner2 } from "react-icons/im";
import { toast } from "react-toastify";
import { nextAPIUrl, nextUrl } from "@/constant/env";
import axios from "axios";

export default function CreateItemDashboard({ email }: { email: string }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const name = data.name;
    const description = data.description;
    const price = data.price;
    const quantity = data.quantity;
    const image_url = data.image_url;
    try {
      setIsLoading(true);
      const res = await axios.put(`${nextAPIUrl}/auth/admin/product`, {
        name,
        description,
        price,
        quantity,
        image_url,
        email,
      });
      await toast.promise(Promise.resolve(res.data), {
        pending: "Creating product...",
        success: "Succesfully created product!",
        error: "Error creating product!",
      });
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <main className="px-6 py-4 shadow-lg border border-neutral-500 rounded-md">
        <Typography variant="h3">Create new Product</Typography>
        <Typography variant="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          interdum, felis fringilla imperdiet sagittis.
        </Typography>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Typography variant="p">Product Name</Typography>
                  <FormControl>
                    <Input placeholder="Body Scrub" type="text" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the name of the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <Typography variant="p">Product Description</Typography>
                  <FormControl>
                    <Textarea
                      placeholder="Lorem Ipsum Dolor Sit Amet"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the description of the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <Typography variant="p">Product Price</Typography>
                  <FormControl>
                    <Input placeholder="Rp 50.000" type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the price of the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <Typography variant="p">Product Quantity</Typography>
                  <FormControl>
                    <Input placeholder="5 Item" type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the quantity of the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <Typography variant="p">Product Image</Typography>
                  <FormControl>
                    <Input
                      placeholder="http://example.com/image.jpg"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the image url of the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="default" type="submit">
              {isLoading ? (
                <ImSpinner2 className="animate-spin" />
              ) : (
                "Create Product"
              )}
            </Button>
          </form>
        </Form>
      </main>
    </>
  );
}

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Product name must be filled.",
  }),
  description: z.string().min(1, {
    message: "Product description  must be filled.",
  }),
  price: z.string().min(1, {
    message: "Product price  must be filled.",
  }),
  quantity: z.string().min(1, {
    message: "Product price  must be filled.",
  }),
  image_url: z.string().min(1, {
    message: "Product image  must be filled.",
  }),
});
