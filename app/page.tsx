import { Github } from "lucide-react";
import Link from "next/link";

import { ThemeSwitcher } from "@/components/functional/ThemeSwitcher";
import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/Table";
import { H1 } from "@/components/ui/Typography";

import { cn } from "@/lib/utils";

import { LINKS } from "./links";

const gradient =
  "text-transparent bg-clip-text bg-gradient-to-r from-blue-10 via-cyan-10 to-green-10";

export default function Home() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <H1 className={cn("pb-8", gradient)}>
          {"Playground of "}
          <a href="https://github.com/hajimism" target="_blank" rel="noopener">
            hajimism
          </a>
        </H1>
        <ThemeSwitcher />
      </div>
      <Table className="caption-top">
        <TableCaption className="text-left pb-8">
          Welcome to my playgrpound! Here is the pages.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Path</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>GitHub</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {LINKS.map((item) => (
            <TableRow key={item.path.toString()}>
              <TableCell className={cn("font-bold", gradient)}>
                <Link href={item.path}>{item.path.toString()}</Link>
              </TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <a
                  href={`https://github.com/hajimism/my-playground${item.path.toString()}`}
                  target="_blank"
                  rel="noopener"
                >
                  <Github className="ml-3" />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
