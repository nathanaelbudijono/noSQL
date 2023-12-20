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
import { PasswordInput } from "@/components/forms/password-input";

export default function UpdateCredential({
  userComplete,
}: {
  userComplete: userCompleteType;
}) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const FormSchema = z.object({
    original: z.string().min(2, {
      message: "Original Password must be filled.",
    }),
    newPass: z.string().min(2, {
      message: "New password must be filled.",
    }),
    confirmPass: z.string().min(2, {
      message: "Confirmation password must be filled.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const original = data.original;
    const newPass = data.newPass;
    const confirmPass = data.confirmPass;
    try {
      setIsLoading(true);
      if (newPass === confirmPass) {
        const updatePersonal = await axios.put(
          `${nextAPIUrl}/auth/user/profile/credential`,
          {
            email: userComplete?.email,
            original,
            newPass,
            confirmPass,
          }
        );
        await toast.promise(Promise.resolve(updatePersonal.data), {
          pending: "Updating personal credential...",
          success: "Success updating personal credential.",
          error: " Failed updating personal credential.",
        });
      } else {
        toast.error("Password confirmation doesn't match.");
      }
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
            name="original"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">Original Password</Typography>
                <FormControl>
                  <PasswordInput placeholder="*****" {...field} />
                </FormControl>
                <FormDescription>Enter your original password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPass"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">New Password</Typography>
                <FormControl>
                  <PasswordInput placeholder="*****" {...field} />
                </FormControl>
                <FormDescription>Enter your new password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPass"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">Confirmation Password</Typography>
                <FormControl>
                  <PasswordInput placeholder="*****" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your confirmation password.
                </FormDescription>
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
