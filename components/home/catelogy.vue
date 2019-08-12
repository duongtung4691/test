<template>
  <section class="categories_area clearfix" id="about">
    <div class="container">
      <div class="row">
        <nuxt-link tag="div" class="col-12 col-md-6 col-lg-4" to="/food">

          <div class="single_catagory wow fadeInUp" data-wow-delay=".3s">
            <img src="../../assets/img/catagory-img/1.jpg" alt="">
            <div class="catagory-title">
              <a href="#">
                <h5>Food</h5>
              </a>
            </div>
          </div>

      </nuxt-link>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="single_catagory wow fadeInUp" data-wow-delay=".6s">
            <img src="../../assets/img/catagory-img/2.jpg" alt="">
            <div class="catagory-title">
              <a href="#">
                <h5>Cooking</h5>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="single_catagory wow fadeInUp" data-wow-delay=".9s">
            <img src="../../assets/img/catagory-img/3.jpg" alt="">
            <div class="catagory-title">
              <a href="#">
                <h5>Life Style</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

    export default {
        name: "catelogy",
        mounted() {
            // console.log(this.$WOW)
            if ($.fn.init) {
                 this.$WOW.init();
            }
// :: 10.0 matchHeight Active JS
            if ($.fn.matchHeight) {
                $('.item').matchHeight();
            }
        }
    }
</script>

<style scoped>
  .categories_area {
    padding: 80px 0 50px 0;
  }
  .single_catagory {
    position: relative;
    z-index: 1;
    margin-bottom: 30px;
  }
  .catagory-title {
    width: 200px;
    height: 50px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    text-align: center;
    border-radius: 30px;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
  }

  .single_catagory img {
    border-radius: 20px;
    max-width: 100%;
  }
  .single_catagory:hover .catagory-title {
    background-color: #fc6c3f;
  }
  .single_catagory:hover .catagory-title a > h5 {
    color: #fff;
  }

  .catagory-title a > h5 {
    margin-bottom: 0;
    line-height: 50px;
    transition-duration: 500ms;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    transition-duration: 500ms;
    font-weight: 500;
    outline: none;
  }

</style>
