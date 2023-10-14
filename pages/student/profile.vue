<template>
  <Breadcrumbs
    title="User Profile"
    main="User"
  />

  <div class="container-fluid">
    <div class="user-profile">
      <div class="row">
        <IndexProfile />
      </div>
    </div>
  </div>
</template>

<script>
import IndexProfile from '@/components/users/profile/indexProfile.vue';

export default {
  name: 'userProfile',
  components: {
    IndexProfile
  }
};
</script>
