function Input({ name, type, placeholder }) {
  return (
    <input
      className="input"
      name={name}
      type={type}
      placeholder={placeholder}
      aria-label={placeholder || name}
      required
    />
  );
}

export default Input;
