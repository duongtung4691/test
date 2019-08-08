<template>
  <section class="welcome-post-sliders owl-carousel">

    <!-- Single Slide -->
    <div class="welcome-single-slide">
      <!-- Post Thumb -->
      <img src="../../assets/img/bg-img/slide-1.jpg" alt="">
      <!-- Overlay Text -->
      <div class="project_title">
        <div class="post-date-commnents d-flex">
          <a href="#">May 19, 2017</a>
          <a href="#">5 Comment</a>
        </div>
        <a href="#">
          <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
        </a>
      </div>
    </div>

    <!-- Single Slide -->
    <div class="welcome-single-slide">
      <!-- Post Thumb -->
      <img src="../../assets/img/bg-img/slide-2.jpg" alt="">
      <!-- Overlay Text -->
      <div class="project_title">
        <div class="post-date-commnents d-flex">
          <a href="#">May 19, 2017</a>
          <a href="#">5 Comment</a>
        </div>
        <a href="#">
          <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
        </a>
      </div>
    </div>

    <!-- Single Slide -->
    <div class="welcome-single-slide">
      <!-- Post Thumb -->
      <img src="../../assets/img/bg-img/slide-3.jpg" alt="">
      <!-- Overlay Text -->
      <div class="project_title">
        <div class="post-date-commnents d-flex">
          <a href="#">May 19, 2017</a>
          <a href="#">5 Comment</a>
        </div>
        <a href="#">
          <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
        </a>
      </div>
    </div>

    <!-- Single Slide -->
    <div class="welcome-single-slide">
      <!-- Post Thumb -->
      <img src="../../assets/img/bg-img/slide-4.jpg" alt="">
      <!-- Overlay Text -->
      <div class="project_title">
        <div class="post-date-commnents d-flex">
          <a href="#">May 19, 2017</a>
          <a href="#">5 Comment</a>
        </div>
        <a href="#">
          <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
        </a>
      </div>
    </div>

    <!-- Single Slide -->
    <div class="welcome-single-slide">
      <!-- Post Thumb -->
      <img src="../../assets/img/bg-img/slide-4.jpg" alt="">
      <!-- Overlay Text -->
      <div class="project_title">
        <div class="post-date-commnents d-flex">
          <a href="#">May 19, 2017</a>
          <a href="#">5 Comment</a>
        </div>
        <a href="#">
          <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
        </a>
      </div>
    </div>

  </section>
</template>

<script>
    export default {
        name: "slider",
        mounted() {
            $(".welcome-post-sliders").owlCarousel({
                items: 4,
                loop: true,
                autoplay: true,
                smartSpeed: 1500,
                margin: 10,
                nav: true,
                navText: ['', ''],
                responsive: {
                    320: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            })
        }
    }

</script>

<style scoped lang="scss">
  .welcome-single-slide {
    position: relative;
    z-index: 1;
    overflow: hidden
  }

  .welcome-single-slide .project_title a > h5 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .welcome-single-slide .project_title {
    position: absolute;
    content: "";
    bottom: -300px;
    left: 0;
    z-index: 3;
    background: rgba(252, 108, 63, 0.7);
    padding: 30px;
    width: 100%;
    height: auto;
    -webkit-transition-duration: 750ms;
    transition-duration: 750ms;
  }

  .welcome-single-slide:hover .project_title {
    bottom: 0;
  }


  .welcome-single-slide .post-date-commnents a {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
  }


  .welcome-single-slide .post-date-commnents a:hover {
    color: rgba(255, 255, 255, 0.9);
  }


  .welcome-single-slide .post-date-commnents a:first-child {
    margin-right: 30px;
  }

  .welcome-single-slide .post-date-commnents a:first-child:after {
    width: 2px;
    height: 80%;
    content: '';
    position: absolute;
    top: 10%;
    right: -14px;
    z-index: 2;
    background-color: #fff;
  }


  .welcome-post-sliders {
    position: relative;
    z-index: 1;
  }

  .welcome-post-sliders {
    ::v-deep {
      .owl-prev, .owl-next ,.owl-next:focus,.owl-prev:focus{
        border: none !important;
        outline: none !important;
      }
    }
  }

  .welcome-post-sliders {
    ::v-deep {
      .owl-prev {
        position: absolute;
        width: 10%;
        background-color: transparent;
        height: 100%;
        top: 0;
        left: 0;
        /*cursor: url(../../assets/img/core-img/back.png), auto !important;*/
        z-index: 9;
      }
    }
  }

  .welcome-post-sliders {
    ::v-deep {
      .owl-next {
        position: absolute;
        width: 10%;
        width: 10%;
        background-color: transparent;
        height: 100%;
        top: 0;
        right: 0;
        /*cursor: url(../../assets/img/core-img/next.png), auto !important;*/
      }
    }
  }

  #scrollUp {
    bottom: 55px;
    font-size: 14px;
    right: 50%;
    width: 30px;
    background-color: #fc6c3f;
    color: #fff;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    margin-right: -15px;
  }
</style>
