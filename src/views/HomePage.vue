<template>
<div class="body-background">
  <Carousel v-bind="settings" :autoplay="2000" :breakpoints="breakpoints">
    <Slide v-for="(image) in images" :key="image.id"  style="width: 100%; height: 40%;">
      <img :src="image.url" class="image" style="width: 100%; height: 50%;" />

    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
  <div class="columns" style="background-color: #1134A6">
  <div class="column is-6 container">
    <img
      @click="viewWorker()"
      src="https://th-media.apjonlinecdn.com/magefan_blog/best-laptops-construction-civil-engineering1605825954630952_1.jpg"
      style="width: 100%; height: 100%;"
      alt=""
    />
    <div class="centered">ดูสายอาชีพที่มาลงทะเบียนทั้งหมด</div>
  </div>
  <div class="column is-6 container"> 
    <div class="centered">ดูโฉนดและแปลนบ้านทั้งหมด</div>
    <img
    @click="viewLand()"
      src="https://image.makewebeasy.net/makeweb/m_1920x0/dG69lfG9T/modern/Nok_1_Photo_PS.jpg"
      style="width: 100%; height: 100%;"
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
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
    text-shadow:
        0.07em 0 black,
        0 0.07em black,
        -0.07em 0 black,
        0 -0.07em black;  
}
.container {
  position: relative;
  text-align: center;
  color: white;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}
.container:hover .image {
  opacity: 0.3;
}
.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.container:hover .middle {
  opacity: 1;
}
</style>
