function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-black/60
        backdrop-blur-sm
        rounded-2xl
        border
        border-white/10
        p-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;