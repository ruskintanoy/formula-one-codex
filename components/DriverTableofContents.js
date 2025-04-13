export default function TableOfContents({ toc }) {
    return (
      <nav className="text-gray-300 text-base space-y-2">
        {toc.map((item) => (
          <div key={item.id}>
            <a href={`#${item.id}`} className="hover:text-red-400 transition">
              {item.label}
            </a>
            {item.children && (
              <div className="ml-5 space-y-1">
                {item.children.map((child) => (
                  <div key={child.id}>
                    <a href={`#${child.id}`} className="hover:text-red-400 transition">
                      {child.label}
                    </a>
                    {child.children && (
                      <div className="ml-5 space-y-1">
                        {child.children.map((subchild) => (
                          <div key={subchild.id}>
                            <a href={`#${subchild.id}`} className="hover:text-red-400 transition">
                              {subchild.label}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    );
  }
  