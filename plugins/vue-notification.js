import Vue from 'vue'
import VueNotifications from 'vue-notification'
import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'bootstrap/scss/bootstrap.scss';
import 'jquery.counterup'
let $window = $(window);
$window.on('load', function () {
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();
  });
});


Vue.use(VueNotifications)
