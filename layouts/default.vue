<template>
  <div>
    <nuxt />
    <my-header />
    <slider />
    <my-footer/>
  </div>
</template>
<script>
    import jQuery from 'jquery'
    import myFooter from  '~/components/home/footer.vue'
    import myHeader from  '~/components/home/header.vue'
    import slider from  '~/components/home/slider.vue'
    export default {
        components: {
            myFooter,  myHeader, slider
        },
    }
</script>
<style>

</style>
