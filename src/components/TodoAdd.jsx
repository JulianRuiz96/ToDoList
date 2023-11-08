import React from "react";
import { useForm } from "../hooks/useForm";
import { Button, Stack } from "@chakra-ui/react";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="description"
        className="input-add"
        value={description}
        onChange={onInputChange}
        placeholder="¿Qué hay que hacer?"
      />
      <Stack>
        <Button type="submit" colorScheme="teal" size="xs" className="btn-add">
          Agregar
        </Button>
      </Stack>
    </form>
  );
};
