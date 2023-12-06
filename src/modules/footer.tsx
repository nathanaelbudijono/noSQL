import IconButton from "@/components/buttons/icon-button";
import Typography from "@/components/core/typography";
import UnderlineLink from "@/components/links/underline-link";
import UnstyledLink from "@/components/links/unstyled-link";

import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="px-16 max-md:px-6 h-[20vh] text-center py-5 mt-5">
      <section className="max-w-4xl mx-auto flex justify-center flex-col items-center gap-1">
        <div className="flex gap-2">
          <UnstyledLink href="mailto:nathanaelbudijono@gmail.com">
            <IconButton variant="ghost" icon={AiFillMail} />
          </UnstyledLink>
          <UnstyledLink href="https://github.com/nathanaelbudijono">
            <IconButton variant="ghost" icon={AiFillGithub} />
          </UnstyledLink>
          <UnstyledLink href="https://www.linkedin.com/in/nathanael-budijono/">
            <IconButton variant="ghost" icon={AiFillLinkedin} />
          </UnstyledLink>
        </div>
      </section>
    </footer>
  );
}
