import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { nextAPIUrl } from "@/constant/env";
import { toast } from "react-toastify";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/forms/form";
import Typography from "@/components/core/typography";
import { Input } from "@/components/forms/input";
import { PasswordInput } from "@/components/forms/password-input";
import { Button } from "@/components/buttons/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/popover";
import cn from "@/type/clsxm";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/forms/calendar";
import Link from "next/link";
export default function UserRegister() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const firstName = data.firstName;
      const lastName = data.lastName;
      const email = data.email;
      const phoneNumber = data.phoneNumber;
      const dob = data.dob;
      const address = data.address;
      const subdistrict = data.subdistrict;
      const city = data.city;
      const password = data.password;
      const confirmPassword = data.confirmPassword;
      if (confirmPassword === password) {
        const res = await axios.post(`${nextAPIUrl}/public/user`, {
          firstName,
          lastName,
          email,
          phoneNumber,
          dob,
          address,
          subdistrict,
          city,
          password,
        });
        await toast.promise(Promise.resolve(res.data), {
          pending: "Sedang membuat akun",
          success: "berhasil membuat akun",
          error: "gagal membuat akun",
        });
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  }
  return (
    <main>
      <section className="px-10 py-7 bg-secondary rounded-md shadow-md">
        <Typography variant="h3" className="font-semibold" color="white">
          Register your account
        </Typography>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-3"
          >
            <section className=" grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p" color="white">
                      First Name
                    </Typography>
                    <FormControl>
                      <Input
                        placeholder="Enter your first name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p" color="white">
                      Last Name
                    </Typography>
                    <FormControl>
                      <Input
                        placeholder="Enter your last name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
            <section className=" grid grid-cols-3 gap-3 max-sm:grid-cols-1">
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
                        placeholder="elanuraini@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter your email.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p" color="white">
                      Phone Number
                    </Typography>
                    <FormControl>
                      <Input placeholder="08xxxxxxxxx" type="text" {...field} />
                    </FormControl>
                    <FormDescription>Enter your phone number.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Typography variant="p" color="white">
                      Date of Birth
                    </Typography>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] bg-white pl-3 placeholder:text-muted-foreground text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          className="bg-white"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Your date of birth is used to calculate your age.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
            <section className=" grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p" color="white">
                      Address
                    </Typography>
                    <FormControl>
                      <Input
                        placeholder="Jalan Palam Merah No 23"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter your address.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subdistrict"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p" color="white">
                      Subdistrict
                    </Typography>
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
                    <Typography variant="p" color="white">
                      City
                    </Typography>
                    <FormControl>
                      <Input placeholder="Surabaya" type="text" {...field} />
                    </FormControl>
                    <FormDescription>Enter your city.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Typography variant="p" color="white">
                    Password
                  </Typography>
                  <FormControl>
                    <PasswordInput placeholder="*****" type="text" {...field} />
                  </FormControl>
                  <FormDescription>Enter your password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <Typography variant="p" color="white">
                    Confirm Password
                  </Typography>
                  <FormControl>
                    <PasswordInput placeholder="*****" type="text" {...field} />
                  </FormControl>
                  <FormDescription>Confirm your password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="justify-end flex mt-3">
              <Button type="submit" variant="default">
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
      </section>
      <div className="flex items-center gap-1 mt-3 z-10">
        <span className="text-sm">Sudah punya akun?</span>
        <Link href="localhost:3000/register/user" className="text-neutral-400">
          Login disini.
        </Link>
      </div>
    </main>
  );
}

const FormSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name must be filled.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be filled.",
  }),
  email: z.string().min(1, {
    message: "email must be filled.",
  }),
  phoneNumber: z.string().min(1, {
    message: "Phone number must be filled.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  address: z.string().min(2, {
    message: "Address must be filled.",
  }),
  subdistrict: z.string().min(1, {
    message: "Subdistrict must be filled.",
  }),
  city: z.string().min(1, {
    message: "City must be filled.",
  }),
  password: z.string().min(1, {
    message: "City must be filled.",
  }),
  confirmPassword: z.string().min(1, {
    message: "City must be filled.",
  }),
});
