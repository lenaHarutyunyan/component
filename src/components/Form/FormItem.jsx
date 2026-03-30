function FormItem({ type, name }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {name}
      <input
        type={type}
        name={name}
        placeholder={name}
        className="p-2 border rounded"
      />
    </label>
  );
}

export default FormItem;
