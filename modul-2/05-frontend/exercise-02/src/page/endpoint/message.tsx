// import { useLocation } from "react-router-dom";
import Container from "../../components/shared/container";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  // const { state } = useLocation();

  useEffect(() => {
    const msg = localStorage.getItem("message");
    if (msg) {
      setMessage(msg);
    }

    return () => {
      localStorage.clear();
    };
  }, []);

  return (
    <Container>
      <div className="w-full ">
        <div className="mx-auto border w-[800px]">
          <div className="bg-gray-200 p-2 flex gap-4 items-center">
            <div className="w-11 h-11 rounded-full bg-gray-500 "></div>
            <p>putu mahendra</p>
          </div>
          <div className="p-2 flex flex-col gap-4">
            <div className="w-max px-4 h-11 rounded-md bg-gray-200 message message-left relative ml-4 grid place-content-center">
              <p>Hi, How are you?</p>
            </div>
            <div className="w-max px-4 h-11 rounded-md self-end bg-gray-200 message message-right relative mr-4 grid place-content-center">
              <p>good</p>
            </div>
            <div className="w-max px-4 h-11 rounded-md self-end bg-gray-200 message message-right relative mr-4 grid place-content-center">
              <p>you can ask me anything, just type it</p>
            </div>
            {message && (
              <div className="w-max px-4 h-11 rounded-md bg-gray-200 message message-left relative ml-4 grid place-content-center">
                <p>{message}</p>
              </div>
            )}
          </div>
          <div className="flex gap-2 items-start bg-gray-200 p-2 mt-4">
            <button
              onClick={() => navigate(-1)}
              className="rounded-full  bg-black  text-white p-2"
            >
              <ChevronLeft />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Message;
