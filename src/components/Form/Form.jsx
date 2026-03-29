import { useState } from "react";
import Button from "../customButton/Button";

function Form({
  position = "vertical",
  onSubmit,
  children,
  title,
}) {
  const [error, setError] = useState(false);

  const Positions = {
    horizontal: "flex flex-row",
    vertical: "flex flex-col",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(
      new FormData(e.target)
    );

    if (!data.name || !data.surname || !data.age) {
      setError(true);
      return;
    }

    setError(false);

    if (onSubmit) {
      onSubmit(data);
    }
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${Positions[position]} gap-5 p-4 border rounded`}
    >
      {title && (
        <h2 className="text-xl text-center w-full">
          {title}
        </h2>
      )}

      {children}

      {error && (
        <p className="text-red-500 text-sm">
          Fill all fields
        </p>
      )}

      <Button type="submit" variant="filled">
        Submit
      </Button>
    </form>
  );
}

export default Form;
