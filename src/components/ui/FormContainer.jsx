function FormContainer({ children, className = "" }) {
  return (
    <form
      className={`
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
        mt-10
        ${className}
      `}
    >
      {children}
    </form>
  );
}

export default FormContainer;