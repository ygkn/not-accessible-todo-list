import type { Meta, StoryObj } from "@storybook/react";
import { AddTodoForm } from "./AddTodoForm";
import { expect, fn, userEvent, within } from "@storybook/test";

const meta = {
	component: AddTodoForm,
	args: {
		onAdd: fn(),
	},
} satisfies Meta<typeof AddTodoForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Added: Story = {
	play: async (context) => {
		const canvas = within(context.canvasElement);

		const input = canvas.getByTestId("input");
		await userEvent.type(input, "牛乳を買う。もし卵があれば、6つ買う。");

		const addButton = canvas.getByTestId("add-button");
		await userEvent.click(addButton);

		expect(context.args.onAdd).toHaveBeenCalledWith(
			"牛乳を買う。もし卵があれば、6つ買う。",
		);
	},
};

export const Added_Accessible: Story = {
	play: async (context) => {
		const canvas = within(context.canvasElement);

		await userEvent.type(
			canvas.getByRole("textbox", { name: /todo/i }),
			"牛乳を買う。もし卵があれば、6つ買う。",
		);

		await userEvent.click(canvas.getByRole("button", { name: /追加/i }));

		expect(context.args.onAdd).toHaveBeenCalledWith(
			"牛乳を買う。もし卵があれば、6つ買う。",
		);
	},
};
