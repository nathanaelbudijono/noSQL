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

export default function UpdatePersonalInfo({
  userComplete,
}: {
  userComplete: userCompleteType;
}) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    form.reset({
      firstName: userComplete?.firstName,
      lastName: userComplete?.lastName,
      phoneNumber: userComplete?.phoneNumber,
    });
  }, []);
  const FormSchema = z.object({
    firstName: z.string().min(2, {
      message: "First Name must be filled.",
    }),
    lastName: z.string().min(2, {
      message: "Password must be filled.",
    }),
    phoneNumber: z.string().min(2, {
      message: "Phone Number must be filled.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const phoneNumber = data.phoneNumber;
    try {
      setIsLoading(true);
      const updatePersonal = await axios.put(
        `${nextAPIUrl}/auth/user/profile`,
        {
          email: userComplete?.email,
          firstName,
          lastName,
          phoneNumber,
        }
      );
      await toast.promise(Promise.resolve(updatePersonal.data), {
        pending: "Updating Personal Info...",
        success: "Success updating personal info",
        error: " Failed updating personal info",
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
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">First Name</Typography>
                <FormControl>
                  <Input placeholder="John" type="text" {...field} />
                </FormControl>
                <FormDescription>Enter your first name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">Password</Typography>
                <FormControl>
                  <Input placeholder="Doe" type="text" {...field} />
                </FormControl>
                <FormDescription>Enter your last name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">Phone Number</Typography>
                <FormControl>
                  <Input placeholder="0851******" type="text" {...field} />
                </FormControl>
                <FormDescription>Enter your phone number.</FormDescription>
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
