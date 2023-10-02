import React from "react";

interface Props {
  title: string;
  body?: string;
  note?: string;
  href: string;
  author_name?: string;
  category_name?: string;
  disabled?: boolean;
}

const LinkCard: React.FC<Props> = ({
  title,
  body,
  note,
  href,
  author_name,
  category_name,
  disabled,
}) => {
  return (
    <li
      className={"list-none flex flex-col py-3 px-2 bg-white text-base bg-no-repeat bg-cover bg-center bg-opacity-50 rounded-lg shadow-md hover:bg-opacity-100 transition-all duration-500 ease-in-out hover:bg-slate-50 hover:ring-purple-300 hover:ring-1 ".concat(
        disabled ? "opacity-50 cursor-not-allowed" : ""
      )}
    >
      <a
        className={disabled ? "pointer-events-none" : ""}
        href={href}
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="flex flex-row justify-between">
          {author_name && category_name && (
            <p className="text-sm text-gray-500">
              {category_name} - {author_name}
            </p>
          )}
          {note && <p className="text-sm text-purple-500">{note}</p>}
        </div>
      </a>
    </li>
  );
};

export default LinkCard;
