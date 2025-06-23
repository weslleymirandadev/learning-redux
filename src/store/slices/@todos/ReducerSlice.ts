import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number,
    text: string,
    completed: boolean,
}

interface TodoState {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{id: number, text: string}>) => {
            state.todos.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false,
            })
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id == action.payload)

            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;