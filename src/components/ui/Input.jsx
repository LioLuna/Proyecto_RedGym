function Input({
  type = "text",
  placeholder,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        px-4 py-3
        rounded
        bg-black
        border border-gray-700
        text-white
        placeholder-gray-400
        w-full
        focus:outline-none
        focus:border-red-500
        transition
        ${className}
      `}
      {...props}
    />
  );
}

export default Input;