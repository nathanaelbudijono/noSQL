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

export default function UpdatePeronalImage({
  userComplete,
}: {
  userComplete: userCompleteType;
}) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    form.reset({
      imageURL: userComplete?.imageURL,
    });
  }, []);

  const FormSchema = z.object({
    imageURL: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const imageURL = data.imageURL;
    try {
      setIsLoading(true);
      const updatePersonal = await axios.put(
        `${nextAPIUrl}/auth/user/profile/image`,
        {
          email: userComplete?.email,
          imageURL,
        }
      );
      await toast.promise(Promise.resolve(updatePersonal.data), {
        pending: "Updating profile picture...",
        success: "Success profile picture...",
        error: "Failed updating profile picture",
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
            name="imageURL"
            render={({ field }) => (
              <FormItem>
                <Typography variant="small">
                  Profile Picture Image URL
                </Typography>
                <FormControl>
                  <Input
                    placeholder="http://profile-picture.com"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Enter your image url.</FormDescription>
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
