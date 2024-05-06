import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter Component.", () => {
    test("renders correctly", () => {
        const { getByRole, getByText } = render(<Counter initialValue={1} />);

        const countButton = getByRole("button", { name: /count/i });
        const initialValue = getByText("count: 1");

        expect(countButton).toBeInTheDocument();
        expect(initialValue).toBeInTheDocument();
    })

    test("increments the count by clicking on the count button", () => {
        const { getByRole, getByText } = render(<Counter />);

        const countButton = getByRole('button', { name: /count/i });

        fireEvent.click(countButton);
        expect(getByText('count: 1')).toBeInTheDocument();
    })

    test("clicking on reset button resets the count", () => {
        const { getByRole, getByText } = render(<Counter />);

        const countButton = getByRole("button", { name: /count/i });
        const resetButton = getByRole("button", { name: /reset/i });

        fireEvent.click(countButton);
        fireEvent.click(countButton);

        expect(getByText("count: 2")).toBeInTheDocument();

        fireEvent.click(resetButton);

        expect(getByText("count: 0")).toBeInTheDocument();
    })
})