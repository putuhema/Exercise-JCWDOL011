import { DeleteIcon } from "@chakra-ui/icons";
import {
  Container,
  Card,
  Input,
  Button,
  Flex,
  CardHeader,
  Text,
  Center,
  Divider,
  Editable,
  EditablePreview,
  EditableInput,
  Stack,
  IconButton,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Todos {
  description: string;
  isDone: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todos[]>(() => {
    const saved = localStorage.getItem("todos");
    const initialSave = JSON.parse(saved!);

    return initialSave || [];
  });
  const [form, setForm] = useState({
    input: "",
    editState: false,
    edit: "",
  });
  const [edit, setEdit] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleOnClick = () => {
    if (form.input.length > 0) {
      setTodos([...todos, { description: form.input, isDone: false }]);
      setForm({
        input: "",
        editState: false,
        edit: "",
      });
    }
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.input.length > 0) {
      setTodos([...todos, { description: form.input, isDone: false }]);
      setForm({
        input: "",
        editState: false,
        edit: "",
      });
    }
  };

  const handleDelete = (id: number) => {
    setTodos((todos) => todos.filter((_, i) => i !== id));
  };

  const handleIsDone = (id: number) => {
    setForm({ ...form, editState: !form.editState });

    setTodos((todos) =>
      todos.map((todo, i) => ({
        ...todo,
        isDone: i === id ? !form.editState : todo.isDone,
      }))
    );
  };

  const handleEditOnSubmit = (id: number) => {
    setTodos((todos) =>
      todos.map((todo, i) => ({
        ...todo,
        description: id === i ? edit : todo.description,
      }))
    );
  };

  return (
    <Container maxW="2xl" bg="white" padding="10" centerContent>
      <Card border="1px" width="600px" borderColor="gray.200" padding="4">
        <CardHeader>
          <Center>
            <Text fontWeight="bold" fontSize="2xl">
              Chores Todo list
            </Text>
          </Center>
        </CardHeader>
        <Divider />
        <Stack marginTop="20px" direction="column" spacing={4}>
          {todos.map((todo, i) => {
            return (
              <Flex
                justifyContent="space-between"
                key={todo.description}
                gap="10px"
              >
                <Checkbox
                  checked={form.editState}
                  onChange={() => handleIsDone(i)}
                />
                <Editable
                  textAlign="start"
                  onSubmit={() => handleEditOnSubmit(i)}
                  onClick={() => setEdit(todo.description)}
                  defaultValue={todo.description}
                  onChange={(e) => setEdit(e)}
                  isPreviewFocusable={!todo.isDone}
                >
                  <EditablePreview
                    textDecoration={todo.isDone ? "line-through" : "none"}
                    color={todo.isDone ? "gray.400" : "black"}
                  />
                  <EditableInput />
                </Editable>
                <IconButton
                  onClick={() => handleDelete(i)}
                  aria-label="delete-button"
                  size="sm"
                  border="1px"
                  borderColor="red.300"
                  bg="white"
                  icon={<DeleteIcon color="red.300" />}
                />
              </Flex>
            );
          })}
        </Stack>
        <form onSubmit={handleOnSubmit}>
          <Flex gap="10px" marginTop="20px">
            <Input
              placeholder="add task"
              value={form.input}
              onChange={(e) => setForm({ ...form, input: e.target.value })}
            />
            <Button onClick={handleOnClick}>add</Button>
          </Flex>
        </form>
      </Card>
    </Container>
  );
}

export default App;
