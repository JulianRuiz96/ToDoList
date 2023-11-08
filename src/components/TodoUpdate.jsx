import React from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/useForm";
import { Input, Button, useColorModeValue } from "@chakra-ui/react";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description,
  });

  const [disabled, setDisabled] = React.useState(true);

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const description = updateDescription;

    handleUpdateTodo(id, description);

    setDisabled(!disabled);
  };

  const inputBorderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <form onSubmit={onSubmitUpdate}>
      <Input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="¿Qué hay que hacer?"
        readOnly={disabled}
        borderColor={inputBorderColor}
      />

      <Button
        colorScheme="teal"
        size="xs"
        type="submit"
        variant="ghost"
        onClick={() => setDisabled(!disabled)}
      >
        <FaEdit />
      </Button>
    </form>
  );
};
