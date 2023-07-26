import { CommentInput } from "./form/comment";
import { ImageInput } from "./form/image";
import { NameInput } from "./form/name";
import { OccupationInput } from "./form/occupation";
import { SkillInput } from "./form/skill";
import { TagInput } from "./form/tag";

export const Form = () => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-1/2 shrink-0 justify-center">
          <ImageInput />
        </div>
        <div className="w-1/2 space-y-4">
          <NameInput />
          <OccupationInput />
        </div>
      </div>
      <TagInput />
      <CommentInput />
      <SkillInput />
    </div>
  );
};
