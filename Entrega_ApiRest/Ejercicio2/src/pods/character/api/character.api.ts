import { Character } from './character.api-model';
import Axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  const baseUrl = `http://localhost:3000/characters/${id}`;
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
