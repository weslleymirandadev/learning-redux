"use client";

import { useDispatch, UseDispatch } from "react-redux";
import { toggleTodo } from "@/store/slices/@todos/ReducerSlice";

export interface Todo {
    id: string,
    text: string,
    completed: boolean,
}

interface TodoItemProps {
    todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    }

    return (
        <li className="flex items-center justify-between p-2 border-b border-white/10">
            <span
                onClick={handleToggle}
                className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
                {todo.text}
            </span>
            <label className="inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleToggle}
                    className="sr-only peer"
                />
                <span className="w-6 h-6 rounded border-2 border-white/30 bg-white/10 flex items-center justify-center peer-checked:bg-white peer-checked:bg-opacity-20 transition">
                    {todo.completed && (
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </span>
            </label>
        </li>
    )
}