<template>
  <div class="col-xl-3 xl-40 box-col-12">
    <div class="md-sidebar">
      <div class="md-sidebar-aside job-sidebar">
        <div class="default-according style-1 faq-accordion job-accordion">
          <div
            class="accordion"
            id="accordionExample"
          >
            <jobfilter />
            <!-- <jobtab2 /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import jobtab2 from './jobTab2.vue';
import jobfilter from './jobfilter.vue';
export default {
  components: {
    // jobtab2,
    jobfilter
  },
  data() {
    return {};
  }
};
</script>
