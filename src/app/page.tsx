import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="relative h-screen w-full flex flex-col items-center">
      <div className="w-full max-w-[460px] mt-[20vh]">
        <h1 className="text-center text-3xl mb-5">Minimal TODO App</h1>
        <section className="bg-white/10 p-2 w-full">
          <TodoForm />
        </section>
        <section className="mt-8 w-full">
          <TodoList />
        </section>
      </div>
    </main>
  );
}
