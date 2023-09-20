import { defineStore } from 'pinia';
export const useMenuStore = defineStore({
  id: 'menu',
  state: () => {
    return {
      searchData: [],
      togglesidebar: true,
      activeoverlay: false,
      searchOpen: false,
      customizer: '',
      hideRightArrowRTL: false,
      hideLeftArrowRTL: true,
      hideRightArrow: true,
      hideLeftArrow: true,
      width: 0,
      height: 0,
      margin: 0,
      menuWidth: 0
    };
  },
  actions: {
    resizetoggle() {
      if (process.client) {
        if (window.innerWidth < 1199) {
          this.togglesidebar = false;
          // this.activeoverlay = true
        } else {
          this.togglesidebar = true;
          // this.activeoverlay = false
        }
      }
    },
    searchTerm(term) {
      let items = [];
      var searchval = term.toLowerCase();
      console.log('====================================');
      console.log('search field');
      console.log('====================================');
    }
  }
});
