"use client";

import { addTodo } from "@/store/slices/@todos/ReducerSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoForm() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!input.trim()) return;

        dispatch(addTodo({
            id: crypto.randomUUID(),
            text: input
        }));
        setInput("");
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return (
        <div className="flex justify-center items-center align-middle text-2xl">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input className="px-2 outline-none border-2 border-black" type="text" value={input} onChange={inputChange} />
                <button className="border-2 bg-black cursor-pointer border-black px-2" type="submit">Adicionar</button>
            </form> 
        </div>
    );
}