function FormItems({ type, name }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{name}</label>

      <input
        type={type}
        name={name}
        placeholder={name}
        className="p-2 border rounded"
      />
    </div>
  );
}

export default FormItems;
