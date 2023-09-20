<template>
  <div>
    <div
      class="page-wrapper"
      id="pageWrapper"
      :class="layoutobj"
    >
      <div class="page-header">
        <Header />
      </div>

      <div class="page-body-wrapper">
        <slot></slot>
        <div>
          <Footer></Footer>
        </div>
      </div>
      <Teleport to="body">
        <TapTop />
      </Teleport>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';

import { layoutClasses } from '../constants/layout';
import Header from '@/components/header';
import Footer from '@/components/footer.vue';
import { useLayoutStore } from '~~/store/layout';
import TapTop from '@/components/tapTop.vue';
import { useWindowScroll } from '@vueuse/core';

export default {
  components: {
    Header,
    Footer,
    TapTop
  },
  data() {
    return {
      loading: false,
      mobileheader_toggle_var: false,
      horizontal_Sidebar: true,
      resized: false,
      layoutobj: {}
    };
  },
  computed: {
    ...mapState(useLayoutStore, {
      layout: 'layout',
      svg: 'svg'
    }),
    layoutobject: {
      get: function () {
        return JSON.parse(
          JSON.stringify(
            layoutClasses.find(
              (item) => Object.keys(item).pop() === this.layout.settings.layout
            )
          )
        )[this.layout.settings.layout];
      },
      set: function () {
        this.layoutobj = layoutClasses.find(
          (item) => Object.keys(item).pop() === this.layout.settings.layout
        );
        this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[
          this.layout.settings.layout
        ];
        return this.layoutobj;
      }
    }
  },

  methods: {}

  // mounted() {
  //     this.loading = false;
  // },
};
</script>
