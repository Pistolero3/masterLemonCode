import { CharacterEntityApi } from './character-collection.api-model';
import Axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api/character?page=';

let characterCollection: CharacterEntityApi[] = [];

export const getCharacterCollection = async (
  pageNumber: number,
  characterName: string
): Promise<CharacterEntityApi[]> => {
  try {
    const result = (
      await Axios.get(`${baseUrl}${pageNumber}&name=${characterName}`)
    ).data.results;
    return result;
  } catch (error) {
    alert('No se pudieron cargar los personajes');
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
