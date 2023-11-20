<template>
  <div>
    <Breadcrumbs title="Student" />
    <div class="student-search-container p-t-20 p-b-20">
      <div class="content-container">
        <div class="student-content">
          <h3 class="text-white display-4 content-title">
            Find the job that fits your life
          </h3>
          <p class="text-white motto">
            Resume-Library is a true performance-based job board. Enjoy custom
            hiring products and access to up to 10,000 new resume registrations
            daily, with no subscriptions or user licences. (Тайлбар мэдээлэл)
          </p>
          <div class="job-choice-container">
            <span>Бүтэн цаг</span>
            <span>Гэрээт</span>
            <span>Цагийн ажил</span>
            <span>Дадлагжих хөтөлбөр</span>
            <span>Түр ажил</span>
          </div>
        </div>
        <div class="image-container">
          <div class="box-1">
            <img
              src="https://a0.anyrgb.com/pngimg/956/390/mongolian-pattern-happy-baby-mongols-bear-doll-wedding-doll-doll-cute-baby-doll-mongolian-barbie-doll-mongolia.png"
              width="100%"
            />
            <div class="circle-container">
              <div class="inlay-circle-1" />
            </div>
          </div>
          <div class="box-2">
            <img
              width="100%"
              src="/images/student/intro-girl.png"
            />
            <div class="circle-container">
              <div class="inlay-circle-2" />
            </div>
          </div>
          <div class="heart-icon">
            <img
              src="/images/student/heart.png"
              alt="images"
            />
          </div>
          <div class="like-icon">
            <img
              src="/images/student/like.png"
              alt="images"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="job-lists-container m-t-30">
      <h2 class="display-4">Ажилууд</h2>
      <p class="sub-header">Сонгогдсон ажилууд</p>
      <div class="job-lists text-start">
        <div
          class="card"
          v-for="(job, index) in jobslist"
          :key="index"
          :class="{ 'ribbon-vertical-left-wrapper': job.priority == 1 }"
        >
          <div
            v-if="job.priority == 1"
            class="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"
          >
            <i class="icofont icofont-love"></i>
          </div>
          <div class="job-search">
            <div class="card-body">
              <div class="media">
                <img
                  class="img-40 img-fluid m-r-20"
                  :src="getImgUrl(job.image)"
                  alt=""
                />
                <div class="media-body">
                  <h6 class="f-w-600">
                    <nuxt-link :to="`/student/job/detail/${job.id}`">{{
                      job.title
                    }}</nuxt-link>

                    <span
                      class="pull-right"
                      v-if="job.date"
                      v-text="job.date"
                    ></span>
                    <span
                      class="badge badge-primary pull-right"
                      v-else
                      >New</span
                    >
                  </h6>
                  <p>
                    {{ job.city
                    }}<span
                      class="ms-1"
                      v-html="stars(job.stars)"
                    ></span>
                  </p>
                </div>
              </div>
              <p v-text="job.description"></p>
            </div>
          </div>
        </div>
      </div>
      <nuxt-link to="/student/job/list">
        <button
          class="btn btn-pill btn-outline-info-2x btn-air-info"
          type="button"
          title="btn btn-pill btn-outline-info-2x btn-air-info"
        >
          Илүү их ажил үзэх
        </button>
      </nuxt-link>
    </div>
    <div class="our-past-work-container m-t-30">
      <div class="our-past-work">
        <div class="image-container">
          <img
            src="/images/ourworks/image2.png"
            alt="carer-launch"
          />
        </div>
        <div class="content-container">
          <div class="title-iconbox">
            <h3 class="display-5">Бид юу хийдэг вэ</h3>
            <p>Гол үйл ажиллагаа</p>
          </div>
          <!-- tf-iconbox -->
          <div class="list-item">
            <h1 class="display-6">
              <a href="#">Ажил чуучлал</a>
            </h1>
            <p>Тус ажлийн танилцуулга</p>
          </div>
        </div>
      </div>
      <div class="wrap-count row m-t-20">
        <div
          style="visibility: visible"
          class="col-lg-3 col-md-6"
        >
          <div class="counter">
            <div class="counter-wrapper">
              <h2>
                <span
                  class="counter-number"
                  data-speed="2000"
                  data-to="25"
                  >25</span
                ><span>M+</span>
              </h2>
            </div>
            <p class="description">Jobs Available</p>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6"
          data-wow-delay="0.3s"
          style="visibility: visible; animation-delay: 0.3s"
        >
          <div class="counter">
            <div class="counter-wrapper">
              <h2>
                <span
                  class="counter-number"
                  data-speed="2000"
                  data-to="177"
                  >177</span
                ><span>k+</span>
              </h2>
            </div>
            <p class="description">New Jobs This Week!</p>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6"
          data-wow-delay="0.4s"
          style="visibility: visible; animation-delay: 0.4s"
        >
          <div class="counter">
            <div class="counter-wrapper">
              <h2>
                <span
                  class="counter-number"
                  data-speed="2000"
                  data-to="298"
                  >298</span
                ><span>k+</span>
              </h2>
            </div>
            <p class="description">Companies Hiring</p>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6"
          data-wow-delay="0.5s"
          style="visibility: visible; animation-delay: 0.5s"
        >
          <div class="counter">
            <div class="counter-wrapper">
              <h2>
                <span
                  class="counter-number"
                  data-speed="2000"
                  data-to="5"
                  >5</span
                ><span>M+</span>
              </h2>
            </div>
            <p class="description">Candidates</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useJobStore } from '~~/store/jobs';
export default {
  computed: {
    ...mapState(useJobStore, {
      jobslist: 'jobs'
    })
  },
  methods: {
    getImgUrl(filename) {
      return '/images/job-search/' + filename;
    },
    stars(count) {
      var stars = '';

      for (var i = 0; i < 5; i++) {
        if (count > i) {
          stars = stars + '<i class="fa fa-star font-warning"></i>';
        } else {
          stars = stars + '<i class="fa fa-star font-warning-o"></i>';
        }
      }

      return stars;
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes scaler {
  0% {
    transform: scale(0.89, 0.89);
  }
  50% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0.89, 0.89);
  }
}
@keyframes heart-move {
  0% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    -webkit-transform: translate(-13px, 1px) rotate(-6deg);
    transform: translate(-13px, 1px) rotate(-6deg);
  }
  40% {
    -webkit-transform: translate(-41px, -22px) rotate(-22deg);
    transform: translate(-41px, -22px) rotate(-22deg);
  }
  60% {
    -webkit-transform: translate(-33px, -22px) rotate(-50deg);
    transform: translate(-33px, -22px) rotate(-50deg);
  }
  80% {
    -webkit-transform: translate(40px, -72px) rotate(-50deg);
    transform: translate(40px, -72px) rotate(-50deg);
  }
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
}
@keyframes like-bumb {
  0% {
    transform: scale(0.8, 0.8);
  }

  50% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0.8, 0.8);
  }
}
.student-search-container {
  width: 100vw;
  background: var(--theme-deafult);
  .content-container {
    display: flex;
    flex: wrap;
    width: 80%;
    margin: auto;
    .student-content {
      width: 67%;
      flex: 0 0 auto;
      margin: 80px 0 80px 0;
      .content-title {
        width: 70%;
      }
      .motto {
        font-size: 0.8rem;
      }
      .job-choice-container {
        margin-top: 8px;
        span {
          margin-right: 16px;
          color: white;
          font-size: 0.7rem;
        }
      }
    }
    .image-container {
      position: relative;
      align-content: center;
      height: 340px;
      max-width: 290px;
      width: 33%;
      flex: 0 0 auto;
      display: flex;
      margin: 30px;
      .box-1 {
        width: 60%;
        position: relative;
        margin-left: -10.4%;
        margin-top: -14%;
        margin-right: -6%;
        flex-grow: 1;
        img {
          width: 160px;
          margin-top: 12px;
          margin-right: 30px;
          border-radius: 120px;
          position: absolute;
        }
        .circle-container {
          animation: scaler 4s infinite ease-in-out alternate;
          top: -10px;
          right: 23px;
          position: absolute;
          .inlay-circle-1 {
            width: 180px;
            height: 180px;
            border: solid transparent 4px;
            border-right: solid #10d1ef 4px;
            border-radius: 50%;
            transform: rotate(-45deg);
          }
        }
      }
      .box-2 {
        width: 40%;
        position: relative;
        margin-left: 0%;
        margin-top: 19.4%;
        margin-right: -11%;
        flex-grow: 1;
        background: rgb(232, 231, 231, 0.5);
        border-radius: 120px;
        img {
          position: absolute;
          height: 100%;
          width: auto;
          margin-left: -60px;
        }
        .circle-container {
          animation: scaler 4s infinite ease-in-out alternate;
          bottom: -14px;
          right: -14px;;
          position: absolute;
          .inlay-circle-2 {
            width: 180px;
            height: 180px;
            border: solid transparent 4px;
            border-right: solid #ffc766 4px;
            border-radius: 50%;
            transform: rotate(45deg);
          }
        }
      }
      .heart-icon {
        position: absolute;
        bottom: 6%;
        left: 26%;
        animation: heart-move 7s infinite ease-in-out alternate;
      }
      .like-icon {
        position: absolute;
        top: 10.4%;
        left: 100%;
        z-index: 10;
        animation: like-bumb 4s infinite ease-in-out alternate;
      }
    }
  }
}

.job-lists-container {
  text-align: center;
  width: 80%;
  margin: auto;
  .sub-header {
    color: rgb(109, 108, 108);
    font-size: 1rem;
  }
}
.our-past-work-container {
  width: 80%;
  margin: auto;
  .our-past-work {
    width: 100%;
    display: flex;
    .image-container {
      width: 50%;
      img {
        width: 100%;
        object-fit: contain;
        object-position: right;
      }
    }
    .content-container {
      width: 50%;
      padding: 50px 0 50px 50px;
    }
  }
  .wrap-count {
    text-align: center;
  }
}
</style>
