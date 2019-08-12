<template>
  <div>
<!--  <div id="preloader">-->
<!--    <div class="yummy-load"></div>-->
<!--  </div>-->


  <slider />
  <catelogy />
  <FBlog/>
  </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import slider from  '~/components/home/slider.vue'
    import catelogy from  '~/components/home/catelogy.vue'
    import FBlog from  '~/components/home/FBlog.vue'
    // import Sidebar from  '~/components/home/Sidebar.vue'


    export default {
        components: {
            Logo, slider, catelogy, FBlog
        },
        mounted() {
            var method;
            var noop = function noop() {
            };
            var methods = [
                'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
                'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
                'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
                'timeStamp', 'trace', 'warn'
            ];
            var length = methods.length;
            var console = (window.console = window.console || {});
            while (length--) {
                method = methods[length];
                // Only stub undefined methods.
                if (!console[method]) {
                    console[method] = noop;
                }
            }
            if ($.fn.scrollUp) {
                $.scrollUp({
                    scrollSpeed: 1500,
                    scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>'
                });
            }

            // :: 5.0 CounterUp Active JS
            if ($.fn.counterUp) {
                $('.counter').counterUp({
                    delay: 10,
                    time: 2000
                });
            }
        }
    }
</script>

<style>
  * {
    margin: 0;
  }
</style>
