import { useState, type FC } from "react";
import { Header } from "./Header";
import styles from "./App.module.css";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import { Footer } from "./Footer";

const generateId = (() => {
	let id = 0;
	return () => id++;
})();

export const App: FC = () => {
	const [todoList, setTodoList] = useState<
		{
			id: number;
			text: string;
			isDone: boolean;
		}[]
	>([]);

	return (
		<div className={styles.appWrapper}>
			<Header />
			<AddTodoForm
				onAdd={(text) => {
					setTodoList([
						...todoList,
						{
							id: generateId(),
							text,
							isDone: false,
						},
					]);
				}}
			/>
			<TodoList
				todoList={todoList}
				onDone={(id) => {
					setTodoList(
						todoList.map((todo) =>
							todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
						),
					);
				}}
				onDelete={(id) => {
					setTodoList(todoList.filter((todo) => todo.id !== id));
				}}
			/>
			<Footer />
		</div>
	);
};
