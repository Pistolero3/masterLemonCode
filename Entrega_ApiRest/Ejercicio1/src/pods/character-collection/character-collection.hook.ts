import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  interface Props {
    pageNumber?: number;
    characterName?: string;
  }

  const loadCharacterCollection = async (pageNumber, characterName) => {
    getCharacterCollection(pageNumber, characterName).then((result) => {
      if (result) {
        setCharacterCollection(mapToCollection(result, mapFromApiToVm));
      } else {
        console.log('Prueba de nuevo');
      }
    });
  };

  return { characterCollection, loadCharacterCollection };
};
