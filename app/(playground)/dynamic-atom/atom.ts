import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";

import { Todo } from "./type";

export const todoFamily = atomFamily(
  (param: Todo) => atom(param),
  (a, b) => a.id === b.id
);

export const todoIdsAtom = atom<string[]>([]);
export const todosAtom = atom<Todo[]>((get) => {
  const todoIds = get(todoIdsAtom);
  const todos = todoIds.map((id) =>
    get(
      todoFamily({
        id,
        // idで検査するため、下記は型合わせのための適当な値
        title: "",
        checked: false,
      })
    )
  );

  return todos;
});

export const useTodo = (id: string) =>
  useAtom(
    todoFamily({
      id,
      // idで検査するため、下記は型合わせのための適当な値
      title: "",
      checked: false,
    })
  );
