import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import AppContext from '../../contexts/AppContext';
import { Item } from '../../types/Item';

import { Container, DeleteButton, Image } from './styles';

interface Props {
  id: number,
  imagePath: string,
  title: string,
  description: string,
  className?: string
}

const ItemCard: React.FC<Props> = ({ id, imagePath, title, description }) => {
  const { items, setItems } = useContext(AppContext)!;

  const deleteItem = (id: number) => {
    const newItems = items.filter((item: Item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <Container>
      <DeleteButton onClick={() => deleteItem(id)}>
        <FontAwesomeIcon icon={faTimes} />
      </DeleteButton>
      <Image src={imagePath} alt="" />
      <strong>{title}</strong>
      <p>{description.length > 100 ? description.substr(0, 100) + "..." : description}</p>
    </Container>
  );
}

export default ItemCard;