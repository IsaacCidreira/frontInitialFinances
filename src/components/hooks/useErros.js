import { useState } from 'react';

export const useErros = () => {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const alreadyExists = errors.find((error) => error.field === field);
    if (alreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldMessage) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldMessage),
    );
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    setError,
    removeError,
    errors,
    getErrorMessageByFieldName,
  };
};
