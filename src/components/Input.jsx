function Input({ name, type, placeholder }) {
  return (
    <input
      className="input"
      name={name}
      type={type}
      placeholder={placeholder}
      required
    />
  );
}

export default Input;
