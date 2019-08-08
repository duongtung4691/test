<template>

</template>

<script>
    import Logo from '~/components/Logo.vue'
    export default {
        components: {
            Logo
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
