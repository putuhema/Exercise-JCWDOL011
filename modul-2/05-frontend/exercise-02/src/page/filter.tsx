import { useEffect, useState } from "react";
import Container from "../components/shared/container";

const mockData = [
  "Banana",
  "Apple",
  "Orange",
  "Manggo",
  "Pineapple",
  "Watermelon",
  "Strawberry",
  "Persimmon",
];

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState<string[]>([]);
  useEffect(() => {
    const filterData = mockData.filter((data) =>
      data.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filterData);
  }, [searchTerm]);

  return (
    <Container>
      <div className="w-full p-4">
        <div className="border mx-auto flex flex-col gap-2 p-4 items-center bg-blue-100 border-blue-300 rounded-md">
          <div className="flex  gap-2 items-center justify-between mb-10">
            <label htmlFor="search">Search</label>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search ...."
              className="border border-blue-300 p-2 w-[400px] outline-blue-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            {searchTerm === "" ? (
              <>
                {mockData.map((data) => (
                  <span
                    key={data}
                    className="px-6  py-2 w-full border border-blue-300 bg-white text-center rounded-md block"
                  >
                    {data}
                  </span>
                ))}
              </>
            ) : filterData.length > 0 ? (
              <>
                {filterData.map((data) => (
                  <span
                    key={data}
                    className="px-6  py-2 w-full border border-blue-300 bg-white text-center rounded-md block"
                  >
                    {data}
                  </span>
                ))}
              </>
            ) : (
              <>
                <p className="text-center italic">No fruit found.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
