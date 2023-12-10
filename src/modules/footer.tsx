import Typography from "@/components/core/typography";

import * as z from "zod";

import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/forms/form";
import { Input } from "@/components/forms/input";

const icons = [CiInstagram, CiTwitter, CiYoutube, FaWhatsapp];

export default function Footer() {
  const FormSchema = z.object({
    email: z.string().min(5, {
      message: "email must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <main className="bg-secondary mt-10">
      <footer className="max-md:px-6 text-center py-10 mt-5 max-w-4xl mx-auto">
        <section className="text-white h-[30vh] max-md:h-full grid grid-cols-4 max-sm:grid-cols-1 gap-8 items-center">
          {/* ----------#Start region logo#---------- */}
          <div className="items-start flex flex-col gap-3">
            <img
              src="/image/GloWhite.png"
              alt="logo"
              className="object-cover w-32 -translate-x-1"
            />
            <Typography variant="large" className="text-white">
              PT. GloWHite Indonesia
            </Typography>
            <div className="flex gap-3 items-center mt-3">
              {icons.map((Icon, i) => (
                <li key={i} className="p-1 bg-neutral-200 rounded-md list-none">
                  <Icon />
                </li>
              ))}
            </div>
          </div>
          {/* ----------#End region logo#---------- */}

          {/* ----------#Start region links#---------- */}

          <div className="text-start">
            <Typography variant="large" className="text-white">
              Company
            </Typography>
            <div className="mt-3">
              {company.map((item) => (
                <Typography
                  variant="small"
                  color="muted"
                  className="text-white mb-1"
                >
                  {item?.links}
                </Typography>
              ))}
            </div>
          </div>

          <div className="text-start">
            <Typography variant="large" className="text-white">
              Support
            </Typography>
            <div className="mt-3">
              {support.map((item) => (
                <Typography
                  variant="small"
                  color="muted"
                  className="text-white mb-1"
                >
                  {item?.links}
                </Typography>
              ))}
            </div>
          </div>

          {/* ----------#End region links#---------- */}

          {/* ----------#Start region input#---------- */}
          <div className="text-start">
            <Typography variant="large" className="text-white">
              Stay up to date
            </Typography>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3 mt-3"
              >
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter your email"
                        className="bg-neutral-600 text-typography-600"
                        {...field}
                      />
                    )}
                  />
                  <FaPaperPlane className="text-black absolute inset-y-0 translate-y-2 right-0 flex items-center pr-3 text-2xl" />
                </div>
              </form>
            </Form>
          </div>
          {/* ----------#End region input#---------- */}
        </section>
      </footer>
    </main>
  );
}

const company = [
  {
    links: "About us",
  },
  {
    links: "Blog",
  },
  {
    links: "Contact us",
  },
  {
    links: "Pricing",
  },
  {
    links: "Testimonials",
  },
];
const support = [
  {
    links: "Help center",
  },
  {
    links: "Terms of service",
  },
  {
    links: "Legal",
  },
  {
    links: "Privacy policy",
  },
  {
    links: "Status",
  },
];
