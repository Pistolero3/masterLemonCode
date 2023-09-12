export const GetMembers = async (org: string) => {
  return await fetch(`https://api.github.com/orgs/${org}/members`).then(
    (response) => response.json()
  );
};

export const GetMember = async (id: string) => {
  return await fetch(`https://api.github.com/users/${id}`).then((response) =>
    response.json()
  );
};

export const GetRickAndMorty = async (page: number) => {
  return await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  ).then((response) => response.json());
};

export const GetRickCharacter = async (query: string) => {
  return await fetch(
    `https://rickandmortyapi.com/api/character/?name=${query}`
  ).then((response) => response.json());
};
