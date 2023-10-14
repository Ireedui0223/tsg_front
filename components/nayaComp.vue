<template>
  <div>
    <footer
      class="footer"
      :class="footer == 'footer-dark' ? 'footer-dark' : ''"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 footer-copyright text-center">
            <p class=" m-b-0">Copyright 2023 © Cuba theme by pixelstrap</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { useLayoutStore } from '~~/store/layout';

export default {
  data() {
    return {};
  },
  computed: {
    footer() {
      return useLayoutStore().footer123;
    }
  }
};
</script>
