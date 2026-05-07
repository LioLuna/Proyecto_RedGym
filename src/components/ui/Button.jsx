const baseStyles =
  "px-6 py-2 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  outline: "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:ring-red-500",
  secondary: "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500",
};

const sizes = {
  sm: "text-sm px-4 py-1.5",
  md: "text-base px-6 py-2",
  lg: "text-lg px-8 py-3",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variantClass = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;

  return (
    <button
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;