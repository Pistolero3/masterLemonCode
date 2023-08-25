<template>
  <div class="container">
    <NuxtLink to="/" class="back">⬅️ Go back</NuxtLink>

    <h1>Detalles de Usuario</h1>
    <div v-if="member" class="employee-card">
      <h2>Name: {{ member.name ? member.name : "Unknown Name" }}</h2>
      <img :src="member.avatar_url" alt="Avatar" />
      <h3>Organisation: {{ orgName }}</h3>
      <h3>
        Location: {{ member.location ? member.location : "Unknown location" }}
      </h3>
      <h3>Bio: {{ member.bio ? member.bio : "Bio not updated" }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Member } from "@/types/index";
import { memberList } from "@/services/members";

const route = useRoute();
const login = route.params.login as string;
const { state } = useOrgStore();
const orgName =
  state.orgName.toLowerCase().charAt(0).toUpperCase() + state.orgName.slice(1);

const member: Member = await memberList.getMemberById(login);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
}

.back {
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 20px;
}

.employee-card {
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
}

img {
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>
