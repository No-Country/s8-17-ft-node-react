import { ChangeEvent, useState } from "react";

export default function useForm<T>(state: T) {
  const [form, setForm] = useState(state);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    });
  };
  return {
    form,
    handleChange
  };
}
