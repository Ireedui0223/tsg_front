<template>
  <div>
    <teleport to="body">
      <footer
        class="footer"
        :class="footer == 'footer-dark' ? 'footer-dark' : ''"
      >
        <div class="footer-container m-t-30">
          <div class="inner-footer m-t-20">
            <div
              class="row"
              data-intro="This is the your details"
              id="info-bar-tour"
            >
              <div class="col-sm-6 col-lg-6 order-sm-1 order-xl-0">
                <div class="row">
                  <div class="col-md-6">
                    <nuxt-link to="/">
                      <img
                        src="/images/logo.png"
                        alt="images"
                      />
                    </nuxt-link>
                  </div>
                  <div class="col-md-6">
                    <div class="ttl-info text-start">
                      <h6><i class="fa fa-envelope"></i> Холбоос</h6>
                      <ul>
                        <li class="m-t-5">
                          <nuxt-link to="/"> Нүүр хуудас </nuxt-link>
                        </li>
                        <li class="m-t-5">
                          <nuxt-link to="student/profile">
                            Хувийн мэдээлэл
                          </nuxt-link>
                        </li>
                        <li class="m-t-5">
                          <nuxt-link to="student/job/list">
                            Ажлын зарууд
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-6 col-lg-6 order-sm-2 order-xl-2 contact-us-container"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="ttl-info text-start ttl-xs-mt">
                      <h6><i class="fa fa-phone"></i> Бидний тухай</h6>
                      <span>Багийн танилцуулга</span>
                    </div>
                  </div>
                  <div class="col-md-6 social-container">
                    <div class="ttl-info text-start ttl-sm-mb-0 icons">
                      <h6><i class="fa fa-location-arrow"></i> Холбоо барих</h6>
                      <ul class="list-social d-flex aln-center">
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            ><i class="icon-facebook"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            ><i class="icon-linkedin"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            ><i class="icon-twitter"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            ><i class="icon-pinterest"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            ><i class="icon-instagram"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid m-t-20 p-t-4">
          <div class="row">
            <div class="col-md-12 footer-copyright text-center">
              <p class="mb-0 p-t-5 p-b-5">
                Copyright © 2021 Tsg Job Web. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </teleport>
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
      return useLayoutStore().footer;
    }
  }
};
</script>
<style lang="scss" scoped>
.footer-container {
  width: 80%;
  margin: auto;
  .inner-footer {
    .row {
      .contact-us-container {
        display: flex;
        justify-content: right;
        align-items: center;
        font-size: 0.9rem;
        .row {
          .social-container {
            .icons {
              span {
                font-size: 0.9rem;
                font-weight: 500;
                line-height: 1rem;
                margin-right: 6px;
              }
              ul {
                flex-wrap: wrap;
                align-content: center;
                li {
                  border: 1px solid var(--theme-deafult);
                  width: 40px;
                  height: 40px;
                  padding: 10px 17px 1px 12px;
                  border-radius: 100%;
                  background: white;
                  margin-right: 8px;
                  margin-bottom: 8px;
                  &:hover {
                    background: var(--theme-deafult);
                    a {
                      i {
                        color: white;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.container-fluid {
  background: #f7f8f9;
}
.footer {
  padding-bottom: 0px;
}
</style>
