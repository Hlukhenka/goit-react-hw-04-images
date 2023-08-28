import { useState } from 'react';
import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  Form,
  FormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = evt => {
    setSearch(evt.target.value.toLowerCase());
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const trimmedSearch = search.trim();
    if (trimmedSearch === '') {
      Notiflix.Notify.failure('Your query cannot be empty');
      return;
    }

    onSubmit(trimmedSearch);
    setSearch('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <FormButton type="submit">
          <ButtonLabel>
            <ImSearch style={{ width: '100%', height: '100%' }} />
          </ButtonLabel>
        </FormButton>

        <Input
          onChange={handleChangeSearch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
        />
      </Form>
    </Header>
  );
};
