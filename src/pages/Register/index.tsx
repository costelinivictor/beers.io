import React, { MutableRefObject, useState, useRef, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import AppContext from '../../contexts/AppContext';
import { Item } from '../../types/Item';

import { Container, Input, SubmitButton } from './styles';

const Register: React.FC = () => {
  const { items, setItems } = useContext(AppContext)!;
  const [ nameWarning, setNameWarning ] = useState<boolean>(false);
  const [ descWarning, setDescWarning ] = useState<boolean>(false);

  const [ created, setCreated ] = useState<boolean>(false);

  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const descRef = useRef() as MutableRefObject<HTMLInputElement>;

  if(created) {
    return <Redirect to="/" push={true} />;
  }

  const validateForm = (): boolean => {
    const nameValue = nameRef.current.value;
    const descValue = descRef.current.value;

    if(!nameValue.length) {
      setNameWarning(true);
      return false;
    }

    if(!descValue.length) {
      setDescWarning(true);
      return false;
    }

    return true;
  }

  const getNewItemParsed = (): Item => {
    const newItem: Item = {
      id: Math.random(),
      name: nameRef.current.value,
      description: descRef.current.value,
      image_url: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
    }

    return newItem;
  }

  const addItem = () => {
    if(!validateForm()) return;
    setNameWarning(false);
    setDescWarning(false);
    const newItem = getNewItemParsed();
    const newItems = [newItem, ...items];
    setItems(newItems);
    setCreated(true);
  }

  return (
    <div className="flex justify-center mt-24">
      <Container ref={formRef}>
        <span>Name</span>
        <Input ref={nameRef}/>
        <span className={nameWarning ? "block text-red-600" : "hidden"}>The item must have a name</span>
        <span>Description</span>
        <Input ref={descRef}/>
        <span className={descWarning ? "block text-red-600" : "hidden"}>The item must have a description</span>
        <SubmitButton type="button" onClick={addItem}>Submit</SubmitButton>
      </Container>
    </div>
  );
}

export default Register;