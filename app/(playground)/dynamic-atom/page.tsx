"use client";
import { useAtom, useAtomValue } from "jotai";
import { ChangeEventHandler, FC, FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { H3, P } from "@/components/ui/typography";

import { todoFamily, todoIdsAtom, todosAtom, useTodo } from "./atom";
import { generateUlid } from "./util";

export default function Page() {
  const [ids, setTodoIds] = useAtom(todoIdsAtom);

  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget["inputTitle"].value;
    if (title === "") return;

    e.currentTarget["inputTitle"].value = "";
    const id = generateUlid();
    todoFamily({ id, title, checked: false });
    setTodoIds((prev) => [...prev, id]);
  };

  return (
    <div className="container py-8">
      <form onSubmit={add} className="mb-12">
        <Input name="inputTitle" type="text" />
      </form>
      {ids.length !== 0 && (
        <ul className="space-y-4 py-4">
          {ids.map((id) => (
            <TodoItem key={id} id={id} />
          ))}
        </ul>
      )}
      <Data />
    </div>
  );
}

const TodoItem: FC<{ id: string }> = ({ id }) => {
  const [todo, setTodo] = useTodo(id);
  const [editMode, setMode] = useState(false);

  const toggle = () => setTodo((prev) => ({ ...prev, checked: !prev.checked }));
  const edit = (text: string) => setTodo((prev) => ({ ...prev, title: text }));
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    edit(e.target.value);

  return (
    <li key={todo.id} className="flex items-center gap-10">
      <Button onClick={() => setMode((mode) => !mode)}>
        {editMode ? "終了" : "編集"}
      </Button>
      <div className="flex items-center gap-2">
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.checked}
          onChange={toggle}
        />
        {editMode ? (
          <Input value={todo.title} onChange={onChange} className="w-80" />
        ) : (
          <Label htmlFor={todo.id} className="px-3">
            {todo.title}
          </Label>
        )}
      </div>
    </li>
  );
};

const Data = () => {
  const todos = useAtomValue(todosAtom);

  return (
    <>
      <H3>Data</H3>
      <P>{JSON.stringify(todos)}</P>
    </>
  );
};
