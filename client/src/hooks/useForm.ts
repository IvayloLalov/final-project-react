import { useState } from "react";

export default function useForm(
  submitHandler: any,
  initialValues: {
    email?: "";
    password?: "";
    username?: "";
    rePassword?: "";
    type?: "";
    duration?: "";
    imageUrl?: "";
    difficulty?: "";
    description?: "";
  }
) {
  const [values, setValues] = useState(initialValues);

  // useEffect(() => {
  //     setValues(initialValues);
  // }, [initialValues])

  const onChange = (e: any) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    submitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}
