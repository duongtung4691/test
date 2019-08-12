<template>
  <div>
    <my-header />
    <nuxt />
    <my-footer/>
  </div>
</template>
<script>
    import * as jQuery from 'jquery';
    import myFooter from  '~/components/home/footer.vue'
    import myHeader from  '~/components/home/header.vue'
    import slider from  '~/components/home/slider.vue'
    export default {
        components: {
            myFooter,  myHeader, slider
        },
    }


    // :: 11.0 Preloader active code

</script>
<style>

</style>
