import { GetServerSidePropsContext } from "next";

import * as React from "react";

import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import Layout from "@/components/layout/layout";

import {
  FormField,
  Form,
  FormItem,
  FormMessage,
} from "@/components/forms/form";
import { Input } from "@/components/forms/input";
import { PasswordInput } from "@/components/forms/password-input";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import ArrowLink from "@/components/links/arrow-link";
import Navbar from "@/modules/navbar";
import { useAppStore } from "@/lib/store";
import { ToastContainer, toast } from "react-toastify";

export default function UserRegister() {
  const { registerUser, errorMessage } = useAppStore();
  const [error, setError] = React.useState("");

  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
    confirmPassword: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.password === data.confirmPassword) {
      await registerUser(data.username, data.password);
      if (!errorMessage) {
        toast.success("Sign up success!");
      } else return;
    } else {
      setError("Confirm password failed!");
    }
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
                    <FormItem>
                      <Input placeholder="Enter your username" {...field} />
                      <FormMessage />
                    </FormItem>
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

              <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 items-center">
                <Typography variant="p" color="white">
                  Konfirmasi Password
                </Typography>
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <PasswordInput
                      placeholder="Enter your password confirmation"
                      {...field}
                    />
                  )}
                />
              </div>
              <Typography variant="small" color="danger">
                {error}
              </Typography>
              <div className="justify-end flex mt-3">
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-neutral-400 whitespace-nowrap hover:bg-neutral-500"
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </Form>
        </section>
        <div className="flex items-center gap-1 mt-3 z-10">
          <span className="text-sm">Sudah punya akun?</span>
          <ArrowLink
            href="localhost:3000/register/user"
            className="text-neutral-400"
          >
            Login disini.
          </ArrowLink>
        </div>
        <button
          onClick={() => {
            toast.success("Sign up success!");
          }}
        >
          testdddd
        </button>
      </Layout>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
}
