function SectionHeader({
  title,
  highlight,
  subtitle,
  align = "center",
  highlightClass = "text-red-500"
}) {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={alignClass}>
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}{" "}
        {highlight && (
          <span className={highlightClass}>
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;