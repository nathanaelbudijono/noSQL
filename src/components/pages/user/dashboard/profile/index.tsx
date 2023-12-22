import { Button } from "@/components/buttons/button";
import Typography from "@/components/core/typography";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/core/sheet";

import { IoIosCheckmark } from "react-icons/io";
import { userCompleteType } from "@/lib/slices/role/user-slices";
import { useAppStore } from "@/lib/store";
import { Skeleton } from "@/components/core/skeleton";

export default function ProfileUser({
  id,
  userComplete,
}: {
  id: string;
  userComplete: userCompleteType;
}) {
  const { isLoading } = useAppStore();
  const dob = userComplete?.dob;

  const formattedDate = dob
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(dob))
    : "";

  if (isLoading) {
    return (
      <main className="w-full">
        <Skeleton className="h-[30vh]" />
        <section className="flex gap-10 max-sm:gap-5 max-md:gap-7 items-end mt-5 ">
          <div className="overflow-hidden">
            <Skeleton className="w-32 h-32 rounded-full" />
          </div>
          <div>
            <Typography variant="h2">
              <Skeleton className="w-32 h-12" />
            </Typography>
            <Typography variant="small" color="muted">
              <Skeleton className="w-44 h-8" />
            </Typography>
          </div>
        </section>

        <section className="mt-5">
          <div className="flex justify-between items-center">
            <Typography variant="h3">
              <Skeleton className="w-44 h-10" />
            </Typography>
          </div>
          <Typography variant="small" color="muted">
            <Skeleton className="w-[400px] h-8 mt-2" />
          </Typography>
        </section>
        <section className="mt-3  grid grid-cols-2 gap-2 max-sm:gap-2 items-center overflow-auto">
          <Typography variant="small" className="font-semibold">
            <Skeleton className="w-52 h-8" />
          </Typography>
          <Typography variant="small">
            <Skeleton className="w-52 h-8" />
          </Typography>
          <Typography variant="small" className="font-semibold">
            <Skeleton className="w-52 h-8" />
          </Typography>
          <Typography variant="small">
            <Skeleton className="w-52 h-8" />
          </Typography>

          <Typography variant="small" className="font-semibold">
            <Skeleton className="w-52 h-8" />
          </Typography>
          <Typography variant="small">
            <Skeleton className="w-52 h-8" />
          </Typography>
          <Typography variant="small" className="font-semibold">
            <Skeleton className="w-52 h-8" />
          </Typography>
          <Typography variant="small">
            <Skeleton className="w-52 h-8" />
          </Typography>
        </section>
      </main>
    );
  }
  return (
    <main className="w-full">
      <section className="bg-gradient-to-r from-neutral-600 to-neutral-500 flex justify-end items-end h-[30vh] py-2 px-5 rounded-md shadow-sm">
        <Button variant="outline" className="flex gap-1 items-center">
          <IoIosCheckmark className="text-lg" />
          Subscribed
        </Button>
      </section>
      <section className="flex gap-10 max-sm:gap-5 max-md:gap-7 items-end -translate-y-[60px] translate-x-5 max-sm:translate-x-0">
        <div className="overflow-hidden">
          <img
            src="/image/profile.png"
            alt="profile pricture"
            className="object-cover w-32"
          />
        </div>
        <div>
          <Typography variant="h2">Ela Nur Aini</Typography>
          <Typography variant="small" color="muted">
            Joined since 12 December 2023
          </Typography>
        </div>
      </section>
      {/* // --- Personal Information --- // */}
      <section className="-translate-y-10">
        <div className="flex justify-between items-center">
          <Typography variant="h3">Personal Information</Typography>
          <Sheet>
            <SheetTrigger>Edit</SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <Typography variant="small" color="muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
          blandit rutrum.
        </Typography>
      </section>
      <section className="mt-3 -translate-y-10 grid grid-cols-2  max-sm:gap-2 items-center overflow-auto">
        <Typography variant="small" className="font-semibold">
          First Name
        </Typography>
        <Typography variant="small">{userComplete?.firstName}</Typography>
        <Typography variant="small" className="font-semibold">
          Last Name
        </Typography>
        <Typography variant="small">{userComplete?.lastName}</Typography>

        <Typography variant="small" className="font-semibold">
          Date of Birth
        </Typography>
        <Typography variant="small">{formattedDate}</Typography>
        <Typography variant="small" className="font-semibold">
          Phone Number
        </Typography>
        <Typography variant="small">{userComplete?.phoneNumber}</Typography>
      </section>
      {/* // --- Address --- // */}
      <section className="-translate-y-10 mt-5">
        <div className="flex justify-between items-center">
          <Typography variant="h3">Address</Typography>
          <Sheet>
            <SheetTrigger>Edit</SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <Typography variant="small" color="muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
          blandit rutrum.
        </Typography>
      </section>
      <section className="mt-3 -translate-y-10 grid grid-cols-2  max-sm:gap-2 items-center overflow-auto">
        <Typography variant="small" className="font-semibold">
          Address
        </Typography>
        <Typography variant="small">{userComplete?.address}</Typography>
        <Typography variant="small" className="font-semibold">
          City
        </Typography>
        <Typography variant="small">{userComplete?.city}</Typography>
        <Typography variant="small" className="font-semibold">
          Subdistrict
        </Typography>
        <Typography variant="small">{userComplete?.subdistrict}</Typography>
      </section>
      {/* // --- Credentials --- // */}
      <section className="-translate-y-10 mt-5">
        <div className="flex justify-between items-center">
          <Typography variant="h3">Credential</Typography>
          <Sheet>
            <SheetTrigger>Edit</SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <Typography variant="small" color="muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
          blandit rutrum.
        </Typography>
      </section>
      <section className="mt-3 -translate-y-10 grid grid-cols-2  max-sm:gap-2 items-center overflow-auto">
        <Typography variant="small" className="font-semibold">
          Email
        </Typography>
        <Typography variant="small">{userComplete?.email}</Typography>
        <Typography variant="small" className="font-semibold">
          Password
        </Typography>
        <Typography variant="small">*****</Typography>
      </section>
    </main>
  );
}
