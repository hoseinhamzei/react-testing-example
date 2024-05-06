import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

describe("TodoList Component.", () => {
    test('renders todo list component', () => {
        const { getByRole, getByLabelText } = render(<TodoList />);

        expect(getByLabelText('Todo:')).toBeInTheDocument();
        expect(getByRole("button", { name: /add/i })).toBeInTheDocument();
    });

    test('add new todo', () => {
        const { getByText, getByLabelText, getByDisplayValue, getByRole } = render(<TodoList />);
        const todoInput = getByLabelText('Todo:');
        const addButton = getByRole("button", { name: /add/i });

        fireEvent.change(todoInput, { target: { value: 'Buy milk' } });
        expect(getByDisplayValue('Buy milk')).toBeInTheDocument();

        fireEvent.click(addButton);
        expect(getByText('Buy milk')).toBeInTheDocument();
    });

    test('delete a todo', () => {
        const { getByLabelText, queryByText, getByRole } = render(<TodoList />);
        const todoInput = getByLabelText('Todo:');
        const addButton = getByRole("button", { name: /add/i });

        fireEvent.change(todoInput, { target: { value: 'Do homework' } });
        fireEvent.click(addButton);

        const deleteButton = getByRole("button", { name: /delete/i });
        fireEvent.click(deleteButton);

        expect(queryByText('Do homework')).toBeNull();
    })
})