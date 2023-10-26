import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import Axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  const baseUrl = `https://rickandmortyapi.com/api/character/${id}`;
  try {
    const result = (await Axios.get(baseUrl)).data;
    return result;
  } catch (error) {
    console.error('Error en la llamada a la API:', error);
    throw error;
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
