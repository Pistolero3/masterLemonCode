import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { SearchNav } from '../../common/components/SearchNav';
import { useDebounce } from 'use-debounce';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [debouncedQuery] = useDebounce(inputValue, 1000);

  React.useEffect(() => {
    loadCharacterCollection(pageNumber, inputValue);
  }, []);

  const handlePage = () => {
    setPageNumber(pageNumber + 1);
    loadCharacterCollection(pageNumber + 1, inputValue);
  };

  const handleBackPage = () => {
    pageNumber === 1 ? pageNumber : setPageNumber(pageNumber - 1);
    loadCharacterCollection(pageNumber - 1, inputValue);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.seeCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleSearch = () => {
    try {
      loadCharacterCollection(pageNumber, inputValue);
      setInputValue('');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <SearchNav
        inputHandler={inputHandler}
        inputValue={inputValue}
        searchHandler={handleSearch}
      />
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onChangePage={handlePage}
        onChangeBackPage={handleBackPage}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};
