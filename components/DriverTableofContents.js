const renderTOC = (items, prefix = "") => {
  return items.map((item, index) => {
    const currentNumber = prefix ? `${prefix}.${index + 1}` : `${index + 1}`;

    return (
      <div key={item.id} className="space-y-1">
        <a
          href={`#${item.id}`}
          className={`hover:text-red-400 transition flex items-center gap-2 ${
            prefix === ""
              ? "font-bold text-lg"
              : prefix.split(".").length === 1
              ? "font-medium"
              : "text-sm opacity-80"
          }`}
        >
          <span className="text-red-400">{currentNumber}.</span>
          <span>{item.label}</span>
        </a>

        {item.children && (
          <div className="ml-4 border-l border-gray-700 pl-4 space-y-2">
            {renderTOC(item.children, currentNumber)}
          </div>
        )}
      </div>
    );
  });
};

export default function TableOfContents({ toc }) {
  return (
    <nav className="text-gray-300 text-base space-y-4">
      {renderTOC(toc)}
    </nav>
  );
}
