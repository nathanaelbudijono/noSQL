import Typography from "@/components/core/typography";
// import Input from "@/components/forms/input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const icons = [CiInstagram, CiTwitter, CiYoutube, FaWhatsapp];

// type Inputs = {
//   input: string;
// };

export default function Footer() {
  // const methods = useForm<Inputs>({
  //   mode: "onTouched",
  // });
  // const { handleSubmit, reset, clearErrors } = methods;
  // const onSubmit: SubmitHandler<Inputs> = async (data) => {
  //   console.log(data);
  //   return;
  // };
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
            {/* <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
              <FormProvider {...methods}>
                <Input
                  id="input"
                  placeholder={"Your email address."}
                  rightNode={<FaPaperPlane className="text-lg" />}
                />
              </FormProvider>
            </form> */}
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
