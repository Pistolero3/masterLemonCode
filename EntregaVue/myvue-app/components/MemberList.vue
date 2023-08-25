<template>
  <div class="employees-list">
    <h1>Members for the organisation</h1>
    <h2>Total Members: {{ updatedNumber }}</h2>
    <SearchComponent @search-org="onSearchOrg" />
    <div v-if="isOrgOk">
      <ul class="listContainer">
        <li v-for="member in updatedMembers" :key="member.id">
          <NuxtLink :to="`/member/${member.login}`">
            <div class="cardContainer">
              <span>Name: {{ member.login }}</span>
              <span>Id: {{ member.id }}</span>
              <img :src="member.avatar_url" alt="Avatar" />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>We could not find any result for this search...Please, try again!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Member } from "../types/index";

let isOrgOk = ref<boolean>(true);
const { members, totalMembers } = await useMembersAPI();
let updatedMembers = ref<Member[]>(members);
let updatedNumber = ref<number>(totalMembers);

const onSearchOrg = async () => {
  const response = await useMembersAPI();
  if (response && Object.keys(response.members).length > 0) {
    isOrgOk.value = true;
    updatedMembers.value = response.members;
    updatedNumber.value = response.totalMembers;
  } else {
    updatedNumber.value = 0;
    isOrgOk.value = false;
  }
};
</script>

<style lang="scss" scoped>
.employees-list {
  text-align: center;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 20px;
  }

  .cardContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 10px;
    padding: 10px;
    gap: 5px;
    width: 200px;
    height: 150px;
    border: 1px solid #ccc;
    background-color: #f7f7f7;
  }
}

.listContainer {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  flex-wrap: wrap;

  img {
    width: 70px;
    height: 70px;
  }
}
</style>
