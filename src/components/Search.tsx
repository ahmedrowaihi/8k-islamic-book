import React from "react";
interface Props {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
  disabled?: boolean;
}

const SearchInput: React.FC<Props> = ({ searchTerm, onSearch, disabled }) => {
  const InputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="mb-5 relative">
      <div className="flex items-center justify-center">
        <input
          onFocus={() => onSearch("")}
          disabled={disabled}
          ref={InputRef}
          type="text"
          className="w-full p-2 disabled:opacity-50 border border-purple-400 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mt-5"
          placeholder="قم بالبحث عن ما تريد، مثلا: العقيدة الواسطية"
          defaultValue={searchTerm}
          onKeyDown={(event) =>
            event.key === "Enter" && onSearch(InputRef.current?.value || "")
          }
        />
        <button
          disabled={disabled}
          onClick={() => onSearch("")}
          className="aspect-square p-2 mt-5 mx-2 disabled:opacity-50 text-white bg-purple-400 hover:bg-purple-500 rounded-full transition-all"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"></path>
          </svg>
        </button>
      </div>
      <button
        disabled={disabled}
        onClick={() => onSearch(InputRef.current?.value || "")}
        className="w-full p-2 disabled:opacity-50 border text-white bg-purple-400 hover:bg-purple-500 rounded-lg transition-all focus:outline-none my-2 h-full"
      >
        بحث
      </button>
    </div>
  );
};

export default SearchInput;
