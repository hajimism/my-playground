"use client";

import { CommentPreview } from "./form/comment";
import { ImagePreview } from "./form/image";
import { NamePreview } from "./form/name";
import { OccupationPreview } from "./form/occupation";
import { SkillPreview } from "./form/skill";
import { TagPreview } from "./form/tag";
import { Logo } from "./logo";

export const Preview = () => {
  return (
    <>
      <span className="text-sm text-blue-12">ｷﾘﾄﾘ線</span>
      <div className="relative border-2 border-dotted border-blue-12 p-1">
        <div className="aspect-video rounded-xl bg-blue-8 bg-[url('/profile-generator/background.png')] bg-contain p-6">
          <div className="flex h-full items-center justify-between gap-4 bg-white p-16">
            <div className="flex w-1/2 flex-col gap-6">
              <div className="flex w-full items-center justify-between gap-4">
                <ImagePreview />
                <div className="flex w-1/2 flex-col gap-4">
                  <NamePreview />
                  <OccupationPreview />
                </div>
              </div>
              <TagPreview />
              <CommentPreview />
            </div>

            <div className="flex h-full shrink-0 flex-col items-center justify-between gap-2">
              <SkillPreview />
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
