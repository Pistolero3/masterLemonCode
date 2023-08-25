export const useOrgStore = defineStore("org", () => {
  let state = reactive({
    orgName: "lemoncode",
  });

  const setOrgName = (inputValue: any) => {
    state.orgName = inputValue;
  };

  return {
    state,
    setOrgName,
  };
});
