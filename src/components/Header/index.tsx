import React from 'react';
import { Link } from "react-router-dom";

import { Container, HeaderItem } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Beers.io</h1>
      <div className="flex">
        <HeaderItem>
          <Link to="/">List</Link>
        </HeaderItem>
        <HeaderItem className="ml-8">
          <Link to="/register">Register</Link>
        </HeaderItem>
      </div>
    </Container>
  );
}

export default Header;