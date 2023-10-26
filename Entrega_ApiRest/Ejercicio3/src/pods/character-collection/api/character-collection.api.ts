import { CharacterEntityApi } from './character-collection.api-model';
import { GraphQLClient, gql } from 'graphql-request';

const graphQLClient = new GraphQLClient('https://rickandmortyapi.com/graphql');

let characterCollection: CharacterEntityApi[] = [];

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
    {
      characters {
        results {
          id
          name
          species
          image
          location {
            name
          }
        }
      }
    }
  `;
  const result = await graphQLClient
    .request<{ characters: { results: CharacterEntityApi[] } }>(query)
    .then((data) => data.characters.results);
  return result;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
