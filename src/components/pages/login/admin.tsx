import * as z from "zod";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { nextAPIUrl, nextUrl } from "@/constant/env";
import { toast } from "react-toastify";
import Typography from "@/components/core/typography";
import { Input } from "@/components/forms/input";
import { PasswordInput } from "@/components/forms/password-input";
import { Button } from "@/components/buttons/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/forms/form";
import Link from "next/link";

import { ImSpinner2 } from "react-icons/im";
export default function LoginAsAdmin() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const FormSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be filled.",
    }),
    password: z.string().min(2, {
      message: "Password must be filled.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    let email = data.email;
    let password = data.password;
    try {
      setIsLoading(true);
      const res = await axios.post(`${nextAPIUrl}/public/admin`, {
        email,
        password,
      });

      if (res.status === 200) {
        router.push(`${nextUrl}/admin/dashboard`);
      } else {
        return;
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <main className="w-3/4">
      <section className="px-10 py-7 bg-secondary rounded-md shadow-md">
        <Typography variant="h3" className="font-semibold" color="white">
          Login as Admin
        </Typography>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-3"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Typography variant="p" color="white">
                    Email
                  </Typography>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Enter your email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Typography variant="p" color="white">
                    Password
                  </Typography>
                  <FormControl>
                    <PasswordInput
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Enter your password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="justify-end flex mt-3">
              <Button type="submit" variant="default">
                {isLoading ? <ImSpinner2 className="animate-spin" /> : "Login"}
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
}
