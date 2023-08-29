import { Minus, Plus } from "lucide-react";
import Container from "../components/shared/container";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <div className="border p-4 rounded-md">
        <div className="flex gap-4 border justify-between p-2 w-max mx-auto">
          <button
            className="p-2 rounded-md bg-red-500 text-white"
            onClick={() => setCount(count - 1)}
          >
            <Minus />
          </button>
          <input
            onChange={(e) => setCount(+e.target.value)}
            value={count}
            className="border text-center text-2xl font-bold w-[200px]"
          />
          <button
            className="p-2 rounded-md bg-green-500 text-white"
            onClick={() => setCount(count + 1)}
          >
            <Plus />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
