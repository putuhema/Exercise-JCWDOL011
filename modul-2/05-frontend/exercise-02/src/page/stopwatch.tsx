import { useEffect, useState } from "react";
import Container from "../components/shared/container";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const miliseconds = time % 100;

  return (
    <Container>
      <div className="w-ful p2">
        <div className="border p-4 rounded-md w-max mx-auto mt-10 bg-black">
          <h1 className="text-center text-4xl font-bold mb-5 text-white">
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {miliseconds.toString().padStart(2, "0")}
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => setIsRunning(true)}
              className="rounded-md p-2 text-white bg-green-500"
            >
              Start
            </button>
            <button
              onClick={() => setIsRunning(false)}
              className="rounded-md p-2 text-white bg-red-500"
            >
              Stop
            </button>
            <button
              onClick={() => setTime(0)}
              className="rounded-md p-2 text-white bg-yellow-500"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stopwatch;
