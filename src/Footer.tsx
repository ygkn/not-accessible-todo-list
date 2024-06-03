import type { FC } from "react";

import TodoImage from "./assets/todo.png";

export const Footer: FC = () => {
	return (
		<div>
			<div>
				<marquee scrollamount="20" behavior="alternate">
					<div>今日もがんばろう</div>
					<img src={TodoImage} width="50" height="50" />
				</marquee>
			</div>
			<div>
				ソースコードは
				<a href="https://github.com/ygkn/not-accessible-todo-list">こちら</a>
			</div>
			<br />
			<p>
				※この Web サイトは、アクセシビリティに問題がある Web サイトの例です。
			</p>
		</div>
	);
};
