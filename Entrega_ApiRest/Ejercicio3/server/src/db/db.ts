import crypto from 'crypto';
import { mockCities, mockCharacters } from './mock-data';
import { Character, HotelEdit, City } from './models';

let characters = [...mockCharacters];
let cities = [...mockCities];

export const getCharacterList = async (): Promise<Character[]> => characters;

// export const Character = async (id: string): Promise<Character> =>
//   characters.find((h) => h.id === id);

// export const insertHotel = async (hotelEdit: HotelEdit) => {
//   const newId = crypto.randomBytes(16).toString('hex');
//   characters = [
//     ...characters,
//     {
//       ...hotelEdit,
//       id: newId,
//     },
//   ];
//   return newId;
// };

// export const updateHotel = async (chaEdit: HotelEdit): Promise<boolean> => {
//   characters = characters.map((h) =>
//     h.id === hotelEdit.id
//       ? {
//           ...h,
//           ...hotelEdit,
//         }
//       : h
//   );

//   return true;
// };

// export const deleteHotel = async (id: string): Promise<boolean> => {
//   hotels = hotels.filter((h) => h.id !== id);
//   return true;
// };

export const getCities = async (): Promise<City[]> => cities;
