import { memberList } from "@/services/members";
import { Member } from "../types/index";
import { useOrgStore } from "../composables/useMemberList";

export default async function useMembersApi() {
  const { state } = useOrgStore();
  const members: Member[] = await memberList.get(state.orgName);
  const totalMembers: number = members.length;

  return { members, totalMembers };
}
