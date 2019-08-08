<template>
  <header class="header_area">
    <div class="container">
      <div class="row">
        <!-- Logo Area Start -->
        <div class="col-12">
          <div class="logo_area text-center">
            <a href="#" class="yummy-logo">Green House</a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars" aria-hidden="true"></i> Menu</button>
            <!-- Menu Area Start -->
            <div class="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
              <ul class="navbar-nav" id="yummy-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div class="dropdown-menu" aria-labelledby="yummyDropdown">
                    <a class="dropdown-item" href="index.html">Home</a>
                    <a class="dropdown-item" href="archive.html">Archive</a>
                    <a class="dropdown-item" href="single.html">Single Blog</a>
                    <a class="dropdown-item" href="static.html">Static Page</a>
                    <a class="dropdown-item" href="contact.html">Contact</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Categories</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="archive.html">Archive</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "GHHeader",
        mounted() {
            $(".searchBtn").on('click', function () {
                $(".search-hidden-form").toggleClass("search-form-open");
            });
        }
    }
</script>

<style scoped>
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

  .logo_area .yummy-logo {
    font-family: 'Shadows Into Light Two', cursive;
    font-size: 60px;
    margin-bottom: 0;
    padding: 35px 0 20px 0;
    display: inline-block;
    color: #232d37;
  }
  .footer_area .navbar.navbar-expand-lg .navbar-nav .nav-link {
    padding-bottom: 0;
  }

</style>
