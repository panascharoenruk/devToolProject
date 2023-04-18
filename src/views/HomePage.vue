<template>
<div class="body-background">
  <Carousel v-bind="settings" :autoplay="2000" :breakpoints="breakpoints" style="width: 100%; height: 40%;">
    <Slide v-for="(image, index) in images" :key="image.id" >
      <img :src="image.url" style="width: 100%; height: 100%;" />
      <button v-if="slidesCount > 1" @click="deleteImage(index)">x</button>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
  <div class="columns">
  <div class="column is-6">
    <img
      @click="viewWorker()"
      src="https://image.makewebeasy.net/makeweb/m_1920x0/dG69lfG9T/modern/Nok_1_Photo_PS.jpg"
      style="width: 100%"
      alt=""
    />
  </div>
  <div class="column is-6"> 
    <img
    @click="viewLand()"
      src="https://image.makewebeasy.net/makeweb/m_1920x0/dG69lfG9T/modern/Nok_1_Photo_PS.jpg"
      style="width: 100%"
      alt=""
    />
  </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "ExamplePagination",
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          url: "https://nutdesignstudio.com/uploads/images-cache/1443/article/90ebab9ebff403f4fabd5328c8338374_full.jpg",
        },
        {
          id: 2,
          url: "https://th.jobsdb.com/th-th/wp-content/uploads/sites/3/2015/10/%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.jpg",
        },
        {
          id: 3,
          url: "https://www.livehome3d.com/assets/img/articles/blueprint-into-floor-plan/architectural-blueprint.jpg",
        },
      ],
    };
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const viewWorker = () => {
      router.push("/worker/");
    };
    const viewLand = () => {
      router.push("/land/");
    };
    return {
      router,
      route,
      viewWorker,
      viewLand
    };
  },
});
</script>
<style scoped>
.body-background{
  background-image: url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80');
  background-repeat: no-repeat;
  background-attachment: fixed;  
  background-size: cover;
  
}
</style>
