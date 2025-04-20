const renderTOC = (items, prefix = "") => {
  return items.map((item, index) => {
    const currentNumber = prefix ? `${prefix}.${index + 1}` : `${index + 1}`;

    return (
      <div key={item.id} className="space-y-1">
        <a
          href={`#${item.id}`}
          className={`group flex items-center gap-3 rounded px-2 py-1 transition-colors duration-150 hover:bg-red-800/10 hover:text-red-400 ${
            prefix === ""
              ? "font-extrabold text-lg tracking-wide text-white"
              : prefix.split(".").length === 1
              ? "font-semibold text-base text-gray-300"
              : "text-sm text-gray-400"
          }`}
        >
          <span className="text-red-500 font-black">{currentNumber}.</span>
          <span>{item.label}</span>
        </a>

        {item.children && (
          <div className="ml-4 pl-4 border-l-2 border-red-800 space-y-2">
            {renderTOC(item.children, currentNumber)}
          </div>
        )}
      </div>
    );
  });
};

export default function TableOfContents({ toc }) {
  return (
    <nav className="text-base text-gray-300 space-y-4">
      {renderTOC(toc)}
    </nav>
  );
}
