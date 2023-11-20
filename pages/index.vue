<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <img
                    class="img-fluid"
                    src="/images/logo.png"
                    alt="looginpage"
                  />
                </a>
              </div>
              <div class="login-main">
                <form class="theme-form">
                  <h4 class="m-b-10">Нэвтрэх</h4>
                  <p class="m-b-5">Майл хаяг болон нууц үгээ оруулна уу.</p>
                  <div class="form-group">
                    <label class="col-form-label">Майл хаяг</label>
                    <input
                      class="form-control"
                      type="email"
                      required=""
                      placeholder="Test@gmail.com"
                      v-model="user.email.value"
                    />
                    <span
                      class="validate-error"
                      v-if="!user.email.value || !validEmail(user.email.value)"
                      >{{ user.email.errormsg }}</span
                    >
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Нууц үг</label>
                    <div class="form-input position-relative">
                      <input
                        class="form-control"
                        :type="passwordShow ? 'password' : 'text'"
                        name="login[password]"
                        required=""
                        placeholder="*********"
                        v-model="user.password.value"
                      />
                      <span
                        class="validate-error"
                        v-if="user.password.value.length < 7"
                        >{{ user.password.errormsg }}</span
                      >
                      <div
                        @click="passwordShow = !passwordShow"
                        class="show-hide"
                      >
                        <span class="show"> </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="checkbox p-0">
                      <input
                        id="checkbox1"
                        type="checkbox"
                      />
                      <label
                        class="text-muted"
                        for="checkbox1"
                      >
                        Нууц үг хадгалах
                      </label>
                    </div>
                    <!-- <nuxt-link
                      class="link"
                      to="/authentication/forget_password"
                    >
                      Нууц үг мартсан?
                    </nuxt-link> -->
                    <div class="text-end mt-3">
                      <button
                        class="btn btn-primary btn-block w-100"
                        type="submit"
                        @click.prevent="login"
                      >
                        Нэвтрэх
                      </button>
                    </div>
                  </div>
                  <!-- <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                  <div class="social mt-4">
                    <div class="btn-showcase">
                      <a
                        class="btn btn-light"
                        href="https://www.linkedin.com/login"
                        target="_blank"
                        ><vue-feather
                          class="txt-linkedin"
                          type="linkedin"
                        ></vue-feather
                        >LinkedIn </a
                      ><a
                        class="btn btn-light"
                        href="https://twitter.com/login?lang=en"
                        target="_blank"
                        ><vue-feather
                          class="txt-twitter"
                          type="twitter"
                        ></vue-feather
                        >twitter</a
                      ><a
                        class="btn btn-light"
                        href="https://www.facebook.com/"
                        target="_blank"
                        ><vue-feather
                          class="txt-fb"
                          type="facebook"
                        ></vue-feather
                        >facebook</a
                      >
                    </div>
                  </div> -->
                  <p class="m-t-5 text-center">
                    Бүртгэл үүсгэх үү?
                    <nuxt-link
                      class="ms-2"
                      to="/auth/register"
                    >
                      Бүртгэл үүсгэх
                    </nuxt-link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// definePageMeta({
//   layout: 'custom'
// });
export default {
  name: 'login',
  data() {
    return {
      passwordShow: true,
      result: { email: '', password: '' },
      user: {
        email: {
          value: 'test@admin.com',
          errormsg: ''
        },
        password: {
          value: 'test@123456',
          errormsg: ''
        }
      }
    };
  },
  methods: {
    login() {
      if (!this.user.password.value || this.user.password.value.length < 7) {
        this.user.password.errormsg = 'min length 7';
      } else {
        this.user.password.errormsg = '';
      }
      if (!this.user.email.value) {
        this.user.email.errormsg = 'empty not allowed';
      } else if (!this.validEmail(this.user.email.value)) {
        this.user.email.errormsg = 'Valid email required.';
      } else {
        this.user.email.errormsg = '';
      }
      if (
        (!this.user.email.errormsg &&
          !this.user.password.errormsg &&
          this.user.email.value != 'test@admin.com') ||
        this.user.password.value != 'test@123456'
      ) {
        alert('wrong credenstials');
      }
      if (
        !this.user.email.errormsg &&
        !this.user.password.errormsg &&
        this.user.email.value == 'test@admin.com' &&
        this.user.password.value == 'test@123456'
      ) {
        this.result = {
          email: this.user.email.value,
          password: this.user.password.value
        };
        useCookie('User').value = JSON.stringify({
          email: this.user.email.value,
          useer: true
        });
        this.$router.push('/student');
      }
    },
    validEmail: function (email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
<style lang="scss" scoped>
.validate-error {
  margin-top: 5px;
  color: #fb1506;
}
</style>
