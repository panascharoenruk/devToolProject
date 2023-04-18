<template>
  <div class="Land p-3">
    <div class="columns">
      <div class="column is-3" style="background-color: #f8f8f8">
        <aside class="menu">
          <ul class="menu-list">
            <li>
              <router-link
                :class="{ 'is-active': activeTab === 'workers' }"
                @click="setActiveTab('workers')"
                to="/"
                >Worker</router-link
              >
            </li>

            <li>
              <router-link
                :class="{ 'is-active': activeTab === 'lands' }"
                @click="setActiveTab('lands')"
                to="/land"
                >ที่ดิน</router-link
              >
            </li>
          </ul>
        </aside>
      </div>
      <div class="column is-9" style="background-color: #f1f1f1">
        <div class="card" style="min-height: 100vh">
          <div class="card-content">
            <div class="content">
              <div
                v-show="activeTab === 'lands'"
                style="background-color: #f6f6f6"
              >
                <h1 class="title">ที่ดิน</h1>

                <div class="Land-card" v-for="(d, index) in lands" :key="index">
                  <div class="columns">
                    <div class="column is-11" @click="viewLand(d.id)">
                      <p class="is-size-4 has-text-weight-bold">
                        {{ index + 1 + "." }} {{ d.location }}
                      </p>

                        <img
                          class="column is-6"
                          src="https://cdn-cms.pgimgs.com/static/2016/12/SN-01.jpg"
                          alt="Placeholder image"
                        />


                      <p class="column is-6">ขนาดพื้นที่: {{ d.size }}</p>
                      <p class="column is-6">ชื่อคนขาย: {{ d.seller_name }}</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "bulma/css/bulma.css";
import { defineComponent, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import Land from "@/models/Land";
import Swal from "sweetalert2";

export default defineComponent({
  name: "App",

  setup() {
    const router = useRouter();
    const route = useRoute();

    const lands = reactive<Land[]>([]);
    const removeLand = (index: number) => {
      Swal.fire({
        title: "ปฏิเสธผู้สมัครหมายเลข ",
        text: "คุณแน่ใจแล้วใช่ไหมที่จะปฏิเสธผู้สมัครรายนี้",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "hsl(141, 50%, 48%)",
        cancelButtonColor: "hsl(348, 100%, 61%)",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          lands.splice(index - 1, 1);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "ทำการลบผู้สมัครเรียบร้อย",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };

    onMounted(() => {
      let get_lands: Land[] = [
        {
          id: 1,
          location: "บางนา 450/89",
          size: "1980 x 1290",
          seller_name: "นาย AAA AAA",
          contact: "xxx-xxxxxxx",
        },
        {
          id: 2,
          location: "รักษ์ 148",
          size: "3680 x 1680",
          seller_name: "นาย BBB BBB",
          contact: "xxx-xxxxxxx",
        },
        {
          id: 3,
          location: "บางพลีซอย 4",
          size: "1980 x 1290",
          seller_name: "นาย CCC CCC",
          contact: "xxx-xxxxxxx",
        },
      ];

      get_lands.forEach((d) => {
        lands.push(d);
      });
    });

    const viewLand = (id: number) => {
      router.push("/reportLandDetail/" + id);
    };

    return {
      router,
      route,
      lands,
      viewLand,
      removeLand,
      activeTab: "lands",
    };
  },
  methods: {
    setActiveTab(tab: string) {
      this.activeTab = tab;
    },
  },
});
</script>

<style scoped>
.Land-card {
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  background-color: #ffffff;
}
</style>