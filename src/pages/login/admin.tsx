import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import Layout from "@/components/layout/layout";
import { FormField, Form } from "@/components/forms/form";
import { Input } from "@/components/forms/input";
import { PasswordInput } from "@/components/forms/password-input";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/modules/navbar";

export default function AdminLogin() {
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <main className="relative">
      <Navbar />
      <Seo title="Login" />
      <Layout className="justify-center items-center flex-col h-screen relative">
        <section className="px-10 py-7 bg-secondary rounded-md shadow-md">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 items-center">
                <Typography variant="p" color="white">
                  Username
                </Typography>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <Input placeholder="Enter your username" {...field} />
                  )}
                />
              </div>

              <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 items-center">
                <Typography variant="p" color="white">
                  Password
                </Typography>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <PasswordInput
                      placeholder="Enter your password"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="justify-end flex mt-3">
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-neutral-400 whitespace-nowrap hover:bg-neutral-500"
                >
                  Sign in
                </Button>
              </div>
            </form>
          </Form>
        </section>
      </Layout>
    </main>
  );
}