import { Character } from './character.api-model';
import { gql, GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient('https://rickandmortyapi.com/graphql');

interface getCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  {
    const query = gql`
      query GetCharacter($id: ID!) {
        character(id: $id) {
          name
          species
          image
          gender
          location {
            name
          }
          origin {
            name
          }
        }
      }
    `;

    const variables = { id };

    const result = await graphQLClient
      .request<getCharacterResponse>(query, variables)
      .then((data) => data.character);
    return result;
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
