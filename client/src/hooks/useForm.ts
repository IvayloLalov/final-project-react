import { useState } from "react";

export default function useForm<T>(submitHandler: Function, initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}
