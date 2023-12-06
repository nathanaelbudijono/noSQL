import cn from "@/type/clsxm";
import * as React from "react";

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

type IconTagProps = {
  views?: string | number;
  tags?: string[];
} & React.ComponentPropsWithoutRef<"div">;

export default function IconTags({
  views,
  tags,
  className,
  ...rest
}: IconTagProps) {
  return (
    <div className={cn("flex gap-2 text-xs mt-2")} {...rest}>
      <ul className="flex gap-1 text-xs">
        {tags?.map((tag: string) => (
          <li key={tag} className={`tag-icon-${tag}  rounded-md`}>
            {icons[tag as Icons]}
          </li>
        ))}
      </ul>
    </div>
  );
}
