import React from 'react';
import ItemCard from '../../components/ItemCard';

import { SearchBar } from './styles';

const List: React.FC = () => {
  return (
    <>
      <SearchBar
        placeholder="Search"
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <ItemCard
            imagePath="https://images.punkapi.com/v2/keg.png"
            title="Buzz"
            description="A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
            className="col-span-1"
          />
          <ItemCard
            imagePath="https://images.punkapi.com/v2/keg.png"
            title="Buzz"
            description="A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
            className="col-span-1"
          />
          <ItemCard
            imagePath="https://images.punkapi.com/v2/keg.png"
            title="Buzz"
            description="A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
            className="col-span-1"
          />
          <ItemCard
            imagePath="https://images.punkapi.com/v2/keg.png"
            title="Buzz"
            description="A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
            className="col-span-1"
          />
          <ItemCard
            imagePath="https://images.punkapi.com/v2/keg.png"
            title="Buzz"
            description="A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
            className="col-span-1"
          />
          <ItemCard
            imagePath="https://images.punkapi.com/v2/keg.png"
            title="Buzz"
            description="A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
            className="col-span-1"
          />
        </div>
      </div>
    </>
  );
}

export default List;