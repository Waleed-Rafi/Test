import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="flex h-[50px] border-t border-gray-300 py-2 px-8 items-center sm:justify-between justify-center">
      <div className="hidden sm:flex"></div>

      <div className="hidden sm:flex italic text-sm">
      created by Scott Flear based on 1000s of hours expert content and advice from Turtle Method.
      </div>

      <div className="flex space-x-4">
        <a
          className="flex items-center hover:opacity-50"
          href="https://turtlemethod.com/meet-the-team"
          target="_blank"
          rel="noreferrer"
        >
          Meet the experts
        </a>
      </div>
    </div>
  );
};
