import { getCharacterList } from '../db';

export const resolvers = {
  Query: {
    hello: () => 'Hello World',
    characters: async () => {
      const characters = await getCharacterList();
      return characters;
    },
  },
};
