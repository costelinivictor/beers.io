import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Container, DeleteButton, Image } from './styles';

interface Props {
  imagePath: string,
  title: string,
  description: string,
  className?: string
}

const ItemCard: React.FC<Props> = ({ imagePath, title, description }) => {
  return (
    <Container>
      <DeleteButton>
        <FontAwesomeIcon icon={faTimes} />
      </DeleteButton>
      <Image src={imagePath} alt="" />
      <strong>{title}</strong>
      <p>{description}</p>
    </Container>
  );
}

export default ItemCard;