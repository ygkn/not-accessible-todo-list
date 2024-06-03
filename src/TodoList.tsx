import type { FC } from "react";
import { Trash2, Square, SquareCheckBig } from "lucide-react";

import styles from "./TodoList.module.css";

export const TodoList: FC<{
	todoList: {
		id: number;
		text: string;
		isDone: boolean;
	}[];
	onDoneChange: (id: number) => void;
	onDelete: (id: number) => void;
}> = ({ todoList, onDoneChange, onDelete }) => {
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
					{todo.isDone ? (
						<SquareCheckBig
							onClick={() => onDoneChange(todo.id)}
							size={16}
							className={styles.done}
						/>
					) : (
						<Square onClick={() => onDoneChange(todo.id)} size={16} />
					)}

					<span
						style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
					>
						{todo.text}
					</span>
					<button
						onClick={() => onDelete(todo.id)}
						className={styles.deleteButton}
					>
						<Trash2 size={16} />
					</button>
				</div>
			))}
		</div>
	);
};
