import React, { useEffect, useRef, useState } from "react";
import SearchInput from "./Search";
import { getOramaDB, search } from "@orama/plugin-astro/client";
import Card from "./Card";

const List: React.FC<any> = ({ data = [] }) => {
  const searchTerm = useRef("");
  const [searchResults, setSearchResults] = useState<Document[]>([]);
  const [db, setDb] = useState<any>(null);
  useEffect(() => {
    getOramaDB("mydb").then((instance) => setDb(instance));
    return () => {};
  }, []);
  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm) return setSearchResults([]);
    const results = await search(db, { term: searchTerm });
    if (results)
      setSearchResults(results.hits.map((d) => d.document) as Document[]);
  };
  return (
    <>
      <SearchInput
        disabled={!db}
        searchTerm={searchTerm.current}
        onSearch={handleSearch}
      />
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {searchResults?.length
          ? searchResults?.map((d: any) => (
              <Card href={d.path} title={d.title} />
            ))
          : data?.map((c: any) => (
              <Card
                href={`/category/${c.category_id}/`}
                title={c.category_name}
              />
            ))}
      </ul>
    </>
  );
};

export default List;
