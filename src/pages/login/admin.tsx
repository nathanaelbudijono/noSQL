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
import { nextAPIUrl } from "@/constant/env";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminLogin() {
  const router = useRouter();
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
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const username = data.username;
    const password = data.password;
    try {
      const res = await axios.post(`${nextAPIUrl}/login/admin`, {
        username,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        router.push("http://localhost:3000/admin");
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
      toast.error("Invalid username/password.");
    }
  }
  return (
    <main className="relative">
      <Seo title="Login Admin" />
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
