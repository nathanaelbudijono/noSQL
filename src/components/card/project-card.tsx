import cn from "@/type/clsxm";
import * as React from "react";
import Typography from "../core/typography";
import UnstyledLink from "../links/unstyled-link";
import Skeleton from "../core/skeleton";

import { RxOpenInNewWindow } from "react-icons/rx";
import { AiFillEye } from "react-icons/ai";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMarkdown,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";
import { BiLogoNodejs, BiLogoPostgresql } from "react-icons/bi";

export const icons = {
  nextjs: <SiNextdotjs />,
  tailwind: <SiTailwindcss />,
  typescript: <SiTypescript />,
  mdx: <SiMarkdown />,
  prisma: <SiPrisma />,
  express: <SiExpress />,
  nodejs: <BiLogoNodejs />,
  mongodb: <SiMongodb />,
  mongoose: <SiMongoose />,
  postgre: <BiLogoPostgresql />,
};

export type Icons = keyof typeof icons;

type ProjectCardProps = {
  title: string;
  img: string;
  desc: string;
  date: string;
  href: string;
  views?: string | number;
  tags?: string[];
} & React.ComponentPropsWithoutRef<"div">;

export default function ProjectCard({
  title,
  desc,
  img,
  date,
  href,
  views,
  tags,
  className,
  ...rest
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-primary-700 rounded-md text-typography-100 h-[410px]",
        "transition-all duration-300 ease-in-out",
        "border border-primary-400",
        "hover:scale-[1.02]",
        "dark:border-tertiary-300"
      )}
      {...rest}
    >
      <UnstyledLink href={href}>
        <div className="px-6 py-4 flex justify-between items-center">
          <ul className="flex gap-1 text-xs">
            {tags?.map((tag: string) => (
              <li key={tag} className={`tag-icon-${tag}  rounded-md`}>
                {icons[tag as Icons]}
              </li>
            ))}
          </ul>
          <Typography variant="small" color="muted" className="text-xs">
            {date}
          </Typography>
        </div>
        <img
          src={img}
          alt="Project Card"
          className="object-cover h-56 max-sm:h-52 w-full text-xs"
        />
        <div className="px-6 pt-4 pb-6">
          <div className="flex justify-between">
            <Typography variant="h4">{title}</Typography>
            <RxOpenInNewWindow
              size={15}
              className="dark:text-typography-800 translate-y-1"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <AiFillEye
              size={15}
              className="dark:text-typography-800 text-typography-100"
            />
            {views === 0 ? (
              <Skeleton className="w-[48px] h-[15px]" />
            ) : (
              <Typography variant="small" color="muted">
                {views} views
              </Typography>
            )}
          </div>
          <Typography variant="small" color="muted">
            {desc}
          </Typography>
        </div>
      </UnstyledLink>
    </div>
  );
}
