<template>
  <div>
    <nuxt />
    <div id="preloader">
      <div class="yummy-load"></div>
    </div>
    <div class="top_header_area">
      <div class="container">
        <div class="row">
          <div class="col-5 col-sm-6">
            <!--  Top Social bar start -->
            <div class="top_social_bar">
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
            </div>
          </div>
          <!--  Login Register Area -->
          <div class="col-7 col-sm-6">
            <div class="signup-search-area d-flex align-items-center justify-content-end">
              <div class="login_register_area d-flex">
                <div class="login">
                  <a href="register.html">Sign in</a>
                </div>
                <div class="register">
                  <a href="register.html">Sign up</a>
                </div>
              </div>
              <!-- Search Button Area -->
              <div class="search_button">
                <a class="searchBtn" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
              </div>
              <!-- Search Form -->
              <div class="search-hidden-form">
                <form action="#" method="get">
                  <input type="search" name="search" id="search-anything" placeholder="Search Anything...">
                  <input type="submit" value="" class="d-none">
                  <span class="searchBtn"><i class="fa fa-times" aria-hidden="true"></i></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-header />
    <slider />
    <catelogy />
    <my-footer/>
  </div>
</template>
<script>
    import * as jQuery from 'jquery';
    import myFooter from  '~/components/home/footer.vue'
    import myHeader from  '~/components/home/header.vue'
    import slider from  '~/components/home/slider.vue'
    import catelogy from  '~/components/home/catelogy.vue'
    export default {
        components: {
            myFooter,  myHeader, slider, catelogy
        },
    }


    // :: 11.0 Preloader active code

</script>
<style>

</style>
