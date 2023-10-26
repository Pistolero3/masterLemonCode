import { CharacterEntityApi } from './character-collection.api-model';
import Axios from 'axios';

const baseUrl = 'http://localhost:3000/characters';

let characterCollection: CharacterEntityApi[] = [];

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  try {
    return await Axios.get(baseUrl).then((result) => result.data);
  } catch (error) {
    console.error('Error en la llamada a la API:', error);
    throw error;
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
