import * as apiModel from './api/character.api-model';
import * as viewModel from './Character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: {
    name: character.origin.name,
    url: character.origin.url,
  },
  location: {
    name: character.location.name,
    url: character.location.url,
  },
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: {
      name: character.origin.name,
      url: character.origin.url,
    },
    location: {
      name: character.location.name,
      url: character.location.url,
    },
    image: character.image,
    episode: character.episode,
    url: character.url,
    created: character.created,
  } as unknown as apiModel.Character);
