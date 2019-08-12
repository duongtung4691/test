<template>
  <div class="col-12 col-sm-8 col-md-6 col-lg-4">
    <div class="blog-sidebar mt-5 mt-lg-0">
      <!-- Single Widget Area -->
      <div class="single-widget-area about-me-widget text-center">
        <div class="widget-title">
          <h6>About Me</h6>
        </div>
        <div class="about-me-widget-thumb">
          <img src="../../assets/img/about-img/1.jpg" alt="">
        </div>
        <h4 class="font-shadow-into-light">Shopia Bernard</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
      </div>

      <!-- Single Widget Area -->
      <div class="single-widget-area subscribe_widget text-center">
        <div class="widget-title">
          <h6>Subscribe &amp; Follow</h6>
        </div>
        <div class="subscribe-link">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-google" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a>
        </div>
      </div>

      <!-- Single Widget Area -->
      <div class="single-widget-area popular-post-widget">
        <div class="widget-title text-center">
          <h6>Populer Post</h6>
        </div>
        <!-- Single Popular Post -->
        <div class="single-populer-post d-flex">
          <img src="../../assets/img/sidebar-img/1.jpg" alt="">
          <div class="post-content">
            <a href="#">
              <h6>Top Wineries To Visit In England</h6>
            </a>
            <p>Tuesday, October 3, 2017</p>
          </div>
        </div>
        <!-- Single Popular Post -->
        <div class="single-populer-post d-flex">
          <img src="../../assets/img/sidebar-img/2.jpg" alt="">
          <div class="post-content">
            <a href="#">
              <h6>The 8 Best Gastro Pubs In Bath</h6>
            </a>
            <p>Tuesday, October 3, 2017</p>
          </div>
        </div>
        <!-- Single Popular Post -->
        <div class="single-populer-post d-flex">
          <img src="../../assets/img/sidebar-img/3.jpg" alt="">
          <div class="post-content">
            <a href="#">
              <h6>Zermatt Unplugged the best festival</h6>
            </a>
            <p>Tuesday, October 3, 2017</p>
          </div>
        </div>
        <!-- Single Popular Post -->
        <div class="single-populer-post d-flex">
          <img src="../../assets/img/sidebar-img/4.jpg" alt="">
          <div class="post-content">
            <a href="#">
              <h6>Harrogate's Top 10 Independent Eats</h6>
            </a>
            <p>Tuesday, October 3, 2017</p>
          </div>
        </div>
        <!-- Single Popular Post -->
        <div class="single-populer-post d-flex">
          <img src="../../assets/img/sidebar-img/5.jpg" alt="">
          <div class="post-content">
            <a href="#">
              <h6>Eating Out On A Budget In Oxford</h6>
            </a>
            <p>Tuesday, October 3, 2017</p>
          </div>
        </div>
      </div>

      <!-- Single Widget Area -->
      <div class="single-widget-area add-widget text-center">
        <div class="add-widget-area">
          <img src="../../assets/img/sidebar-img/6.jpg" alt="">
          <div class="add-text">
            <div class="yummy-table">
              <div class="yummy-table-cell">
                <h2>Cooking Book</h2>
                <p>Buy Book Online Now!</p>
                <a href="#" class="add-btn">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Single Widget Area -->
      <div class="single-widget-area newsletter-widget">
        <div class="widget-title text-center">
          <h6>Newsletter</h6>
        </div>
        <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
        <div class="newsletter-form">
          <form action="#" method="post">
            <input type="email" name="newsletter-email" id="email" placeholder="Your email">
            <button type="submit"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>
  .single-widget-area {
    margin-bottom: 50px;
  }

  .widget-title > h6 {
    background: #fee2d9;
    height: 40px;
    width: 100%;
    line-height: 40px;
    border-radius: 2px;
    margin-bottom: 30px;
  }

  .about-me-widget-thumb img {
    height: 200px;
    width: 200px;
    margin: auto;
    border-radius: 50%;
  }

  .about-me-widget h4 {
    margin: 15px 0;
    font-weight: 400;
  }

  .about-me-widget p {
    color: #51545f;
    margin-bottom: 0;
  }

  /* subscribe_follow_area */

  .subscribe-link > a {
    font-size: 14px;
    color: #51545f;
    padding: 0 15px;
  }

  .subscribe-link > a:hover {
    color: #fc6c3f;
  }

  .subscribe-link {
    padding-top: 20px;
  }

  /* popular post */

  .popular-post-widget .single-populer-post img {
    margin-right: 10px;
    border-radius: 20px;
    margin-bottom: 30px;
    -ms-flex-item-align: center;
    align-self: center;
  }

  .popular-post-widget .single-populer-post:last-of-type img {
    margin-bottom: 0;
  }

  .popular-post-widget .single-populer-post img {
    width: calc(50% - 10px);
  }

  .popular-post-widget .single-populer-post img,
  .popular-post-widget .single-populer-post .post-content {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
  }

  .popular-post-widget .single-populer-post .post-content {
    margin-left: 10px;
  }

  .popular-post-widget .single-populer-post .post-content > p {
    font-size: 14px;
    color: #b5aec4;
    font-weight: 400;
    margin-bottom: 0;
  }

  /* Add Widget */

  .add-widget .add-widget-area {
    position: relative;
    z-index: 1;
  }

  .add-widget .add-widget-area img {
    border-radius: 30px;
  }

  .add-widget .add-widget-area:before {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    content: '';
    background-color: rgba(30, 29, 29, 0.8);
    z-index: 1;
    border-radius: 30px
  }

  .add-widget .add-text {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
  }

  .add-widget .add-text h2,
  .add-widget .add-text p {
    color: #fff;
  }

  .add-widget .add-text p {
    font-size: 14px;
  }

  .add-widget .add-text a {
    min-width: 130px;
    height: 40px;
    border: 1px solid #fc6c3f;
    color: #fc6c3f;
    font-size: 12px;
    display: inline-block;
    text-transform: uppercase;
    border-radius: 30px;
    line-height: 40px;
  }

  .add-widget .add-text a:hover {
    border: 1px solid #fc6c3f;
    color: #fff;
    background-color: #fc6c3f;
  }

  /* Newsletter Widget CSS */

  .newsletter-widget p {
    font-size: 14px;
  }

  .newsletter-form {
    position: relative;
    z-index: 1;
  }

  .newsletter-form input {
    width: 100%;
    height: 40px;
    background-color: #f5f5f8;
    border: 1px solid #e1e1e1;
    border-radius: 30px;
    padding: 0 20px;
    font-size: 14px;
    color: #b5aec4;
  }

  .newsletter-form button {
    width: 40px;
    height: 40px;
    background-color: #fc6c3f;
    border: none;
    color: #fff;
    border-radius: 30px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;
    cursor: pointer;
  }
</style>
