<template>
  <div class="header-wrapper w-100 m-0">
    <div class="row header-container">
      <SearchBar />
      <div
        class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0"
      >
        <nuxt-link to="/">
          <img src="/images/logo.png" />
        </nuxt-link>
      </div>
      <div
        class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto"
      >
        <ul class="nav-menus">
          <li>
            <span class="header-search">
              <svg @click="search_open()">
                <use href="@/assets/svg/icon-sprite.svg#search"></use>
              </svg>
            </span>
          </li>
          <li>
            <Mode />
          </li>
          <Notifications />
          <Profile />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'pinia';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Notifications from './notifications.vue';
import Mode from './mode';
import Profile from './profile';
import SearchBar from './search';
import { useMenuStore } from '~~/store/menu';

export default {
  components: {
    Notifications,
    Mode,
    Profile,
    Swiper,
    SwiperSlide,
    SearchBar
  },
  data() {
    return {
      bookmark: false
    };
  },
  computed: {
    ...mapState(useMenuStore, {
      megamenuItems: 'megamenu',
      searchOpen: 'searchOpen'
    })
  },
  methods: {
    search_open() {
      useMenuStore().searchOpen = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.w-100 {
  width: 100vw !important;
}
.header-container {
  width: 80%;
  align-items: center;
  margin: auto;
}
@media (max-width: 575px) {
  .header-container {
    align-items: center;
    width: 100%;
  }
}
</style>
