import { useEffect, useState } from "react";
import Container from "../components/shared/container";
import axios from "axios";
import { Edit, Trash } from "lucide-react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Fetch = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(data);
    };

    fetch();
  }, []);
  return (
    <Container>
      <div className="w-full border p-4">
        <table className="table-auto border-collapse border-spacing-6 border border-slate-400 w-full">
          <thead>
            <tr>
              <th className="border border-slate-400">ID</th>
              <th className="border border-slate-400">Name</th>
              <th className="border border-slate-400">Username</th>
              <th className="border border-slate-400">Email</th>
              <th className="border border-slate-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-slate-400 text-center">
                  {user.id}
                </td>
                <td className="border border-slate-400 p-2">{user.name}</td>
                <td className="border border-slate-400 p-2">{user.username}</td>
                <td className="border border-slate-400 p-2">{user.email}</td>
                <td className="border border-slate-400 p-2">
                  <form className="flex gap-2 items-center justify-around">
                    <button className="bg-yellow-100 border-yellow-600 p-2 text-yellow-600 rounded-md">
                      <Edit size={20} />
                    </button>
                    <button className="bg-red-100 p-2 text-red-600 rounded-md">
                      <Trash size={20} />
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Fetch;
