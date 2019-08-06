<template>
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
                <a href="register.html">Sing in</a>
              </div>
              <div class="register">
                <a href="register.html">Sing up</a>
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
</template>

<script>
    import jQuery from 'jquery'
    import Logo from '~/components/Logo.vue'
    export default {
        components: {
            Logo
        }
        // head() {
        //     return {
        //         script: [
        //             {src: '@/assets/js/bootstrap/bootstrap.min.js'},
        //             {src: '@/assets/js/jquery/jquery-2.2.4.min.js'},
        //             {src: '@/assets/js/bootstrap/popper.min.js'},
        //             {src: '@/assets/js/others/plugins.js'},
        //             {src: '@/assets/js/active.js'}
        //         ],
        //         link: [
        //             {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'},
        //             {rel: 'stylesheet', href: '@/assets/css/style.css'},
        //             {rel: 'stylesheet', href: '@/assets/css/responsive/responsive.css'}
        //         ]
        //     }
        // },
    }
</script>

<style>
  .top_header_area {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ebebeb;
  }

  .top_header_area .top_social_bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }


  .top_header_area .top_social_bar > a {
    font-size: 12px;
    color: #232d37;
    margin-right: 30px;
  }

  .top_header_area .top_social_bar > a:hover {
    color: #fc6c3f;
  }

  .top_header_area .top_social_bar > a:last-of-type {
    margin-right: 0;
  }

  .top_header_area .signup-search-area {
    height: 40px;
    position: relative;
    z-index: 3;
  }

  .top_header_area .signup-search-area a {
    font-size: 13px;
    color: #222;
  }

  .top_header_area .signup-search-area .login a {
    margin-right: 13px;
    border-right: 2px solid #c2c2c2;
    padding-right: 13px;
  }

  .top_header_area .signup-search-area .search_button {
    margin-left: 54px;
  }
  .search-hidden-form {
    position: absolute;
    width: 100%;
    z-index: 4;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    font-size: 12px;
  }

  .search-hidden-form.search-form-open {
    z-index: 18;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  }

  .search-hidden-form #search-anything {
    width: 100%;
    height: 30px;
    border: 1px solid #ddd;
    top: 5px;
    position: relative;
    padding: 5px 10px;
  }

  .search-hidden-form span {
    line-height: 30px;
    width: 30px;
    height: 30px;
    position: absolute;
    display: block;
    text-align: center;
    top: 5px;
    right: 0;
    border: 1px solid #ddd;
    color: #888;
    cursor: pointer;
    z-index: 5;
    font-size: 13px;
    border-left: none;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
  }

  .search-hidden-form span:hover {
    color: #000;
  }

  .top_header_area .signup-search-area .search_button {
    margin-left: 54px;
  }

  #searchBtn {
    position: relative;
    z-index: 8;
  }

</style>
