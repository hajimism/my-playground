import { ExternalLink } from "lucide-react";
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
  const tableItems = [...LINKS].reverse();

  return (
    <Table className="caption-top">
      <TableCaption className="text-left py-8">
        Welcome to my playgrpound! Here is the pages. I also welcome your
        comments on my scraps (Hover the Scrap count) !
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Path</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Source</TableHead>
          <TableHead>Scraps</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableItems.map((item) => (
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
                <ExternalLink className="ml-3 hover:text-teal-11 transition-colors" />
              </a>
            </TableCell>
            <TableCell>
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
        {noScrap ? (
          <span className="ml-5">-</span>
        ) : (
          <Button variant="link" className="ml-1">
            {scraps.length}
          </Button>
        )}
      </HoverCardTrigger>
      {noScrap ? null : (
        <HoverCardContent>
          <List>
            {scraps.map(({ url, title }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-teal-11 cursor-pointer transition-colors"
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
