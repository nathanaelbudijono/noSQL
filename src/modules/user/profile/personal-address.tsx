import * as React from "react";
import * as z from "zod";

import { Button } from "@/components/buttons/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/forms/form";
import { useForm } from "react-hook-form";

import { ImSpinner2 } from "react-icons/im";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Typography from "@/components/core/typography";
import { Input } from "@/components/forms/input";
import { userCompleteType } from "@/lib/slices/role/user-slices";
import { nextAPIUrl } from "@/constant/env";
import { toast } from "react-toastify";

export default function UpdateAddress({
  userComplete,
}: {
  userComplete: userCompleteType;
}) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    form.reset({
      address: userComplete?.address,
      subdistrict: userComplete?.subdistrict,
      city: userComplete?.city,
    });
  }, []);
  const FormSchema = z.object({
    address: z.string().min(2, {
      message: "Address must be filled.",
    }),
    subdistrict: z.string().min(2, {
      message: "Subdistrict must be filled.",
    }),
    city: z.string().min(2, {
      message: "City must be filled.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const address = data.address;
    const subdistrict = data.subdistrict;
    const city = data.city;
    try {
      setIsLoading(true);
      const updatePersonal = await axios.put(
        `${nextAPIUrl}/auth/user/profile/address`,
        {
          email: userComplete?.email,
          address,
          subdistrict,
          city,
        }
      );
      await toast.promise(Promise.resolve(updatePersonal.data), {
        pending: "Updating address...",
        success: "Success updating address info",
        error: " Failed updating address info",
      });
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-3"
        >
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">Address</Typography>
                <FormControl>
                  <Input
                    placeholder="Jalan Palam Merah No 2"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Enter your Address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subdistrict"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">Subdistrict</Typography>
                <FormControl>
                  <Input placeholder="Sukolilo" type="text" {...field} />
                </FormControl>
                <FormDescription>Enter your subdistrict.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">City</Typography>
                <FormControl>
                  <Input placeholder="Surabaya" type="text" {...field} />
                </FormControl>
                <FormDescription>Enter your city.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex mt-3">
            <Button type="submit" variant="default" className="w-full">
              {isLoading ? <ImSpinner2 className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}
