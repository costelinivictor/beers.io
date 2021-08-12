import React, { useState, useEffect } from 'react';
import ItemCard from '../../components/ItemCard';

import { SearchBar } from './styles';

function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

const getItems = async () => {
  const beers = request<Array<Beer>>("https://api.punkapi.com/v2/beers");
  return beers;
}

type Beer = {
  id: number,
  name: string,
  description: string,
  image_url: string
}

const List: React.FC = () => {
  const [items, setItems] = useState<Array<Beer>>([]);

  useEffect(() => {
    getItems().then(response => setItems(response));
  }, []);

  return (
    <>
      <SearchBar
        placeholder="Search"
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {items.map(item => (
            <ItemCard
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
}

export default List;