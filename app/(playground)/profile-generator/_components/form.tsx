import { CommentInput } from "./form/comment";
import { ImageInput } from "./form/image";
import { NameInput } from "./form/name";
import { OccupationInput } from "./form/occupation";
import { SkillInput } from "./form/skill";
import { TagInput } from "./form/tag";

export const Form = () => {
  return (
    <div>
      <ImageInput />
      <NameInput />
      <OccupationInput />
      <TagInput />
      <CommentInput />
      <SkillInput />
    </div>
  );
};
