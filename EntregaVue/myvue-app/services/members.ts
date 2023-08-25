import { Member } from "@/types/index";

export const memberList = {
  async get(orgName: string) {
    const members = await $fetch<Member[]>(
      `https://api.github.com/orgs/${orgName}/members`
    );

    return members;
  },

  async getMemberById(login: string) {
    const member = await $fetch<Member>(
      `https://api.github.com/users/${login}`
    );

    return member;
  },
};
