<template>
  <div class="searchContainer">
    <label name="ornasitation">Org: </label>
    <input
      data-testid="input-data"
      id="organisation"
      placeholder="Organistaion"
      v-model="inputValue"
    />
    <button
      data-testid="button-data"
      class="button"
      type="button"
      @click="searchOrg"
    >
      SEARCH
    </button>
  </div>
</template>

<script setup lang="ts">
const $emit = defineEmits(["searchOrg"]);
const { state } = useOrgStore();
const inputValue = ref(state.orgName);

const searchOrg = () => {
  const { setOrgName } = useOrgStore();
  setOrgName(inputValue.value);

  $emit("searchOrg", inputValue.value);
};
</script>

<style lang="scss" scoped></style>
