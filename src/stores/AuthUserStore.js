import { defineStore } from "pinia";
export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      username: "Герман Шляйгер",
    };
  },
  actions: {
    visitTwitterProfile() {
      window.open(`http://portal.ukgu.kz/kz`, "_blank");
    },
  },
});
