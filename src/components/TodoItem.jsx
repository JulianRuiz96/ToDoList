import React from "react";
import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from "./TodoUpdate";
import { Checkbox, IconButton, Box, useColorModeValue } from "@chakra-ui/react";

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  const doneColor = useColorModeValue("green.500", "green.300");
  const undoneColor = useColorModeValue("gray.700", "gray.200");

  return (
    <li>
      <Box display="flex" alignItems="center">
        <span onClick={() => handleCompleteTodo(todo.id)}>
          <Checkbox
            isChecked={todo.done}
            size="md"
            colorScheme="green"
            borderColor={todo.done ? doneColor : undoneColor}
          />
        </span>
        <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
        <IconButton
          colorScheme="red"
          aria-label="Eliminar"
          size="sm"
          icon={<FaTrash />}
          onClick={() => handleDeleteTodo(todo.id)}
        />
      </Box>
    </li>
  );
};
