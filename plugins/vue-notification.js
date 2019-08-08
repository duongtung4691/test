import Vue from 'vue'
import VueNotifications from 'vue-notification'
import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'bootstrap/scss/bootstrap.scss';
import 'jquery.counterup'
import 'bootstrap/dist/js/bootstrap.min'

let $window = $(window);
$window.on('load', function () {
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();
  });
});

Vue.use(VueNotifications)

import wowlx from 'wowjs'
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  const w = (new wowlx.WOW())
  inject('WOW', w)
}
