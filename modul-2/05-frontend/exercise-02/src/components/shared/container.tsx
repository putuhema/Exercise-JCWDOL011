import { Link } from "react-router-dom";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 h-screen">
      <div className="w-[350px] bg-gray-200 p-6">
        <ul className="flex flex-col gap-2">
          <Link
            to="/counter"
            className="hover:bg-gray-300 p-2 rounded-md cursor-pointer"
          >
            Counter
          </Link>
          <Link
            to="/stopwatch"
            className="hover:bg-gray-300 p-2 rounded-md cursor-pointer"
          >
            Stopwatch
          </Link>
          <Link
            to="/filter"
            className="hover:bg-gray-300 p-2 rounded-md cursor-pointer"
          >
            Filter
          </Link>
          <Link
            to="/fetch"
            className="hover:bg-gray-300 p-2 rounded-md cursor-pointer"
          >
            Fetch API
          </Link>
          <Link
            to="/endpoint"
            className="hover:bg-gray-300 p-2 rounded-md cursor-pointer"
          >
            Endpoint
          </Link>
        </ul>
      </div>
      <div className="flex-1 w-full p-4">{children}</div>
    </div>
  );
};

export default Container;
