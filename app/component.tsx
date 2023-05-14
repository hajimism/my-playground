import { Github } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/HoverCard";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/Table";
import { List } from "@/components/ui/Typography";

import { TEXT_GRADIENT } from "@/app/gradient";

import { cn } from "@/lib/utils";

import { LINKS, Scrap } from "./links";

const PATH_TO_TREE_IN_REOO =
  "https://github.com/hajimism/my-playground/tree/main/app";

export const PageTable = () => {
  return (
    <Table className="caption-top">
      <TableCaption className="text-left py-8">
        Welcome to my playgrpound! Here is the pages.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Path</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Source</TableHead>
          <TableHead>Scrap count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {LINKS.map((item) => (
          <TableRow key={item.path.toString()}>
            <TableCell className={cn("font-bold", TEXT_GRADIENT)}>
              <Link href={item.path}>{item.path.toString()}</Link>
            </TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>
              <a
                href={`${PATH_TO_TREE_IN_REOO}${item.path.toString()}`}
                target="_blank"
                rel="noopener"
              >
                <Github className="ml-3" />
              </a>
            </TableCell>
            <TableCell className="text-center">
              <ScrapColumnItem scraps={item.scraps} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const ScrapColumnItem = ({ scraps }: { scraps: Scrap[] }) => {
  const noScrap = scraps.length === 0;

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="link"> {noScrap ? "-" : scraps.length}</Button>
      </HoverCardTrigger>
      {noScrap ? null : (
        <HoverCardContent>
          <List>
            {scraps.map(({ url, title }) => (
              <li key={url} className="text-left">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-green-10"
                >
                  {title}
                </a>
              </li>
            ))}
          </List>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};
