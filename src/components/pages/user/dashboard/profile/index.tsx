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
import UpdatePersonalInfo from "@/modules/user/profile/personal-info";
import UpdateAddress from "@/modules/user/profile/personal-address";
import UpdateCredential from "@/modules/user/profile/credential";
import UpdatePeronalImage from "@/modules/user/profile/image";

export default function ProfileUser({
  id,
  userComplete,
}: {
  id: string;
  userComplete: userCompleteType;
}) {
  const { isLoading } = useAppStore();
  const dob = userComplete?.dob;
  const create = userComplete?.createdAt;
  const formattedCreate = create
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(dob))
    : "";
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
        <Sheet>
          <SheetTrigger className="text-sm h-10 px-4 py-2 border border-white rounded-md z-10">
            Edit Image
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle>Update your profile picture.</SheetTitle>
              <SheetDescription>
                <UpdatePeronalImage userComplete={userComplete} />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
      <section className="flex gap-10 max-sm:gap-5 max-md:gap-7 items-end -translate-y-[60px] max-sm:-translate-y-[50px] translate-x-5 max-sm:translate-x-0">
        <div className="overflow-hidden">
          {userComplete?.imageURL ? (
            <img
              src={userComplete?.imageURL}
              alt="profile pricture"
              className="object-cover w-32 h-32 rounded-full"
            />
          ) : (
            <img
              src="/image/profile.png"
              alt="profile pricture"
              className="object-cover w-32"
            />
          )}
        </div>
        <div>
          <Typography variant="h2">
            {userComplete?.firstName} {userComplete?.lastName}
          </Typography>
          <Typography variant="small" color="muted">
            Joined since {formattedCreate}
          </Typography>
        </div>
      </section>
      {/* // --- Personal Information --- // */}
      <section className="-translate-y-10">
        <div className="flex justify-between items-center">
          <Typography variant="h3">Personal Information</Typography>
          <Sheet>
            <SheetTrigger className="text-sm">Edit</SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Update your personal information</SheetTitle>
                <SheetDescription>
                  <UpdatePersonalInfo userComplete={userComplete} />
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
            <SheetTrigger className="text-sm">Edit</SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Update your Address.</SheetTitle>
                <SheetDescription>
                  <UpdateAddress userComplete={userComplete} />
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
          Subdistrict
        </Typography>
        <Typography variant="small">{userComplete?.subdistrict}</Typography>
        <Typography variant="small" className="font-semibold">
          City
        </Typography>
        <Typography variant="small">{userComplete?.city}</Typography>
      </section>
      {/* // --- Credentials --- // */}
      <section className="-translate-y-10 mt-5">
        <div className="flex justify-between items-center">
          <Typography variant="h3">Credential</Typography>
          <Sheet>
            <SheetTrigger className="text-sm">Edit</SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Update Personal Credential</SheetTitle>
                <SheetDescription>
                  <UpdateCredential userComplete={userComplete} />
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
