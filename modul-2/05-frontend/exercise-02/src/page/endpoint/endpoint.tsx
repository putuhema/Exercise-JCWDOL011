import { useState } from "react";
import Container from "../../components/shared/container";
import { useNavigate } from "react-router-dom";
import { SendHorizonal } from "lucide-react";

const Endpoint = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("message", message);
    if (message.length > 0) {
      navigate("/message", { state: message });
    } else {
      setErrorMessage("Please write something");
    }
  };
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
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="flex gap-2 items-start bg-gray-200 p-2 mt-4"
          >
            <div className="flex flex-col w-full">
              <input
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                type="text"
                placeholder="Send Message ..."
                className={`border p-2 rounded-md w-full ${
                  errorMessage && "border-red-300"
                }`}
              />
              {errorMessage.length > 0 && (
                <p className="text-sm text-red-300">{errorMessage}</p>
              )}
            </div>
            <button className="rounded-full  bg-black  text-white p-2">
              <SendHorizonal size={20} />
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Endpoint;
