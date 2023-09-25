<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img
        class="b-r-10 profile-image"
        src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
        alt="profile"
      />
      <div class="media-body">
        <span>Munkh-Ireedui</span>
        <p class="mb-0 font-roboto">
          Student <i class="middle fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <li>
        <nuxt-link :to="'/student/profile'"
          ><vue-feather type="user"></vue-feather
          ><span>Account </span></nuxt-link
        >
      </li>
      <li>
        <a @click="logout">
          <vue-feather type="log-in"></vue-feather><span>Log out</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    logout: function () {
      this.$router.replace('/auth/login');

      useCookie('User').value = undefined;
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-image {
  width: 35px;
  height: 35px;
}
@media (max-width: 575px) {
  .profile-image {
    width: 25px;
    height: 25px;
  }
}
</style>
