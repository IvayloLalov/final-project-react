import { FormEvent, useState } from "react";

export default function useForm(submitHandler: Function, initialValues: {}) {
  const [values, setValues] = useState(initialValues);

  // useEffect(() => {
  //     setValues(initialValues);
  // }, [initialValues])

  const onChange = (e: FormEvent) => {
    setValues((state) => ({
      ...state,
      [e.currentTarget.nodeName]: e.currentTarget.nodeValue,
    }));
  };

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();

    submitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}
