import type { FC } from "react";
import { Trash2 } from "lucide-react";

import styles from "./TodoList.module.css";

export const TodoList: FC<{
	todoList: {
		id: number;
		text: string;
		isDone: boolean;
	}[];
	onDone: (id: number) => void;
	onDelete: (id: number) => void;
}> = ({ todoList, onDone, onDelete }) => {
	if (todoList.length === 0) {
		return (
			<div className={styles.emptyMessage}>
				<p>ToDo はありません</p>
				<p>良い一日を！👍</p>
			</div>
		);
	}

	return (
		<div>
			{todoList.map((todo) => (
				<div key={todo.id} className={styles.todo}>
					<input
						type="checkbox"
						checked={todo.isDone}
						onChange={() => onDone(todo.id)}
					/>
					<span
						style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
					>
						{todo.text}
					</span>
					<button onClick={() => onDelete(todo.id)}>
						<Trash2 size={16} />
					</button>
				</div>
			))}
		</div>
	);
};
