import { FC, useState } from "react";

interface CounterProps {
    initialValue?: number;
}

const Counter: FC<CounterProps> = ({ initialValue = 0 }) => {
    const [count, setCount] = useState(initialValue || 0);

    function increment() {
        setCount(currentCount => currentCount + 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <div className="counter">
            <button onClick={increment}>count: {count}</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter;