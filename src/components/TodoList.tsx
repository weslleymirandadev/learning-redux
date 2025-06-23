"use client";

import { useSelector } from "react-redux";
import TodoItem, { Todo } from "./TodoItem";
import { RootState } from "@/store";

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todo.todos);

    return (
        <ul className="flex flex-col gap-2 w-full max-w-[460px]">
            {todos.map((todo: Todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}