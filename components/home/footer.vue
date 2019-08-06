<template>
  <footer class="footer_area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-content">
            <!-- Logo Area Start -->
            <div class="footer-logo-area text-center">
              <a href="#" class="yummy-logo">Yummy Blog</a>
            </div>
            <!-- Menu Area Start -->
            <nav class="navbar navbar-expand-lg">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-footer-nav" aria-controls="yummyfood-footer-nav" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars" aria-hidden="true"></i> Menu</button>
              <!-- Menu Area Start -->
              <div class="collapse navbar-collapse justify-content-center" id="yummyfood-footer-nav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Categories</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Archive</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Copywrite Text -->
          <div class="copy_right_text text-center">
            <p>Copyright @2018 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  .footer_area .navbar.navbar-expand-lg .navbar-nav .nav-link {
    padding-bottom: 0;
  }
  .footer-content {
    padding: 50px 0 65px 0;
    border-bottom: 1px solid #eeeeee;
  }

  .footer-logo-area .yummy-logo {
    font-family: 'Shadows Into Light Two', cursive;
    font-size: 60px;
    margin-bottom: 0;
    padding: 0 0 20px 0;
    display: inline-block;
    color: #232d37;
  }
  navbar.navbar-expand-lg {
    padding: 0;
  }

  .navbar.navbar-expand-lg .navbar-nav .nav-link {
    padding: 25px 30px;
    color: #232d37;
    text-transform: uppercase;
    font-size: 14px;
  }

  .navbar.navbar-expand-lg .navbar-nav .nav-link:hover,
  .navbar.navbar-expand-lg .navbar-nav .active .nav-link {
    color: #fc6c3f;
  }
</style>
