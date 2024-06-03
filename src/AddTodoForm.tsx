import { type FC, useState } from "react";
import { Plus } from "lucide-react";

import styles from "./AddTodoForm.module.css";

type Props = {
	onAdd: (text: string) => void;
};

export const AddTodoForm: FC<Props> = ({ onAdd }) => {
	const [text, setText] = useState("");

	const handleAdd = () => {
		if (text === "") {
			alert("エラーが発生しました！　えらーいこっちゃ！");
			return;
		}

		onAdd(text);
		setText("");
	};

	return (
		<div>
			<div className={styles.inputs}>
				<input
					data-testid="input"
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="牛乳を買う。もし卵があれば、6つ買う。"
					className={styles.input}
				/>
				<div
					data-testid="add-button"
					onClick={handleAdd}
					className={styles.addButton}
				>
					<Plus aria-label="追加" /> 追加
				</div>
			</div>
		</div>
	);
};
