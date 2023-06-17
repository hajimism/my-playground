"use client";

import update from "immutability-helper";
import { FC, useCallback, useMemo, useRef, useState } from "react";
import { XYCoord, useDrag, useDrop } from "react-dnd";

import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { H1, H2, P } from "@/components/ui/typography";

import { cn } from "@/lib/utils";

import { JOBS, OCCUPATIONS } from "./const";

type Job = (typeof JOBS)[number];
type ChunkedJobs = {
  [_key in Job["tag"]]: Job[];
};

const chunkJobs = (jobs: Job[]) => {
  const chunkedJobs: ChunkedJobs = {
    Android: [],
    iOS: [],
    "Front-end": [],
    "Back-end": [],
    "UI Design": [],
    "Service Design": [],
  };

  jobs.forEach((job) => {
    chunkedJobs[job.tag] = [...chunkedJobs[job.tag], job];
  });

  return chunkedJobs;
};

export default function Page() {
  const [list, setList] = useState(OCCUPATIONS);
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setList((prev) =>
      update(prev, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prev[dragIndex] ?? "Android"],
        ],
      })
    );
  }, []);
  const chunkedJobs = useMemo(() => chunkJobs(JOBS), []);

  return (
    <>
      <H1 className="my-8">DnD Linked List</H1>
      <P className="mb-8">
        ↓Drag items. The right side list order is linked to the left side list
        order.
      </P>
      <div className="flex gap-20">
        <ul>
          {list.map((item, i) => (
            <ListItem
              index={i}
              text={item}
              key={item}
              id={item}
              onMove={moveCard}
            />
          ))}
        </ul>
        <ul className="flex flex-col gap-12">
          {list.map((item) => (
            <li key={item}>
              <H2 className="border-none">{item}</H2>
              <ul className="flex w-[70rem] gap-12 overflow-x-auto">
                {chunkedJobs[item].map((job, i) => (
                  <li key={i}>
                    <Card className="w-80">
                      <CardContent className="p-0">
                        <div className="flex items-center justify-center rounded-t-md bg-blue-6 p-8">
                          <span className="text-6xl">{job.emoji}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <CardTitle className="pt-6">{job.title}</CardTitle>
                      </CardFooter>
                    </Card>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

interface ListItemProps {
  id: any;
  text: string;
  index: number;
  onMove: (_dragIndex: number, _hoverIndex: number) => void;
}

const ListItem: FC<ListItemProps> = ({ id, text, index, onMove }) => {
  const ref = useRef<HTMLLIElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "list",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      onMove(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "list",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li
      ref={ref}
      data-handler-id={handlerId}
      className={cn(isDragging && " bg-opacity-80", "cursor-grab w-32")}
    >
      {text}
    </li>
  );
};
