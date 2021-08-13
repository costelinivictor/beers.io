import React, { useContext, useState } from "react";
import ItemCard from "../../components/ItemCard";

import { SearchBar } from "./styles";

import AppContext from "../../contexts/AppContext";

const List: React.FC = () => {
  const { items } = useContext(AppContext)!;
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <SearchBar
        placeholder="Search"
        onInput={(e) => setSearch(e.currentTarget.value)}
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {items
            .filter(
              (item) =>
                item.name.includes(search || "") ||
                item.description.includes(search || "")
            )
            .map((item) => (
              <ItemCard
                id={item.id}
                key={item.id}
                imagePath={item.image_url}
                title={item.name}
                description={item.description}
                className="col-span-1"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default List;
