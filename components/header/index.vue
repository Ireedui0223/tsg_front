<template>
  <div class="header-wrapper w-100 row m-0">
    <SearchBar />
    <div class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
      <nuxt-link to="/">
        <img src="/images/logo.png" />
      </nuxt-link>
    </div>
    <div
      class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto"
    >
      <ul class="nav-menus">
        <li>
          <span class="header-search"
            ><svg @click="search_open()">
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
</template>
<script>
import { mapState } from 'pinia';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
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
    },
    bookmark_open() {
      // this.bookmark = !this.bookmark;
    }
  },
  setup() {
    return {
      modules: [Autoplay]
    };
  }
};
</script>
<style lang="scss" scoped>
.w-100 {
  width: 100vw !important;
}
</style>
