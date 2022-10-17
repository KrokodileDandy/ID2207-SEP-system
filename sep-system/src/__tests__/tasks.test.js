import { render, fireEvent, screen } from "@testing-library/react";

// Components
import TodoForm from "../components/TodoForm";

describe("Task form", () => {
    let titleTextBox;

    const setup = () => {
        render(
            <TodoForm />
        );

        titleTextBox = screen.getByRole('textbox', {name: /task title/i});
    };

    test('sums numbers', () => {
        expect(1+2).toEqual(3);
    });

});