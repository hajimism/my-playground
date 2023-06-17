"use client";

import { Route } from "next";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { TabItem } from "./type";

type Props = {
  tabItems: TabItem[];
  param?: string;
};

export const TabWithRouter: FC<Props> = ({ tabItems, param = "tab" }) => {
  const searchParams = useSearchParams();

  if (!tabItems[0]) return <></>;
  const tabParam = searchParams.get(param) ?? tabItems[0].value;

  return (
    <Tabs value={tabParam}>
      <TabsList>
        {tabItems.map(({ value, label }) => (
          <TabsTriggerWithRouter value={value} key={value} param={param}>
            {label}
          </TabsTriggerWithRouter>
        ))}
      </TabsList>

      <>
        {tabItems.map(({ value, content }) => (
          <TabsContent value={value} key={value}>
            {content}
          </TabsContent>
        ))}
      </>
    </Tabs>
  );
};

const TabsTriggerWithRouter = forwardRef<
  ElementRef<typeof TabsTrigger>,
  ComponentPropsWithoutRef<typeof TabsTrigger> & { param?: string }
>(({ param = "tab", ...props }, ref) => {
  const router = useRouter();
  // Bug: pathname should be Route when experimental.typedRoutes === true
  const pathname = usePathname() as Route;
  const onClick = () => router.push(`${pathname}?${param}=${props.value}`);

  return <TabsTrigger ref={ref} {...props} onClick={onClick} />;
});
TabsTriggerWithRouter.displayName = "TabsTriggerWithRouter";
