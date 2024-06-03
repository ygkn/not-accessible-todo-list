import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "./TodoList";
import { fn } from "@storybook/test";

const meta = {
	component: TodoList,
	args: {
		todoList: [
			{ id: 1, text: "牛乳を買う。もし卵があれば、6つ買う。", isDone: false },
			{ id: 2, text: "卵を買う。", isDone: true },
		],
		onDoneChange: fn(),
		onDelete: fn(),
	},
} satisfies Meta<typeof TodoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
	args: {
		todoList: [],
	},
};
