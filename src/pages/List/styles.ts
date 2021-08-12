import styled from "styled-components";

export const SearchBar = styled.input`
  display: block;
  margin: 30px auto 0;
  max-width: 750px;
  width: calc(100% - 40px);

  padding: 10px 20px;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
`;