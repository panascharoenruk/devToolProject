<template>
  <div class="company p-3">
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
                v-show="activeTab === 'workers'"
                style="background-color: #f6f6f6"
              >
                <div class="columns">
                  <h1 class="title column is-10">พนักงานทั้งหมด</h1>
                  <button
                    class="button is-success column is-1"
                    @click="submitAdd()"
                  >
                    เพิ่ม
                  </button>
                </div>
                <div
                  class="company-card"
                  v-for="(d, index) in workers"
                  :key="index"
                >
                  <div class="columns">
                    <div class="column is-11">
                      <p class="is-size-4 has-text-weight-bold">
                        {{ index + 1 + "." }} {{ d.firstName }} {{ d.lastName }}
                      </p>
                      <div class="columns is-multiline ml-6 mt-1">
                        <img
                          class="column is-3"
                          src="https://bulma.io/images/placeholders/1280x960.png"
                          alt="Placeholder image"
                        />
                        <p class="column is-6"></p>
                        <p class="column is-6">ตำแหน่ง: {{ d.position }}</p>

                        <button
                          class="button is-info column is-2"
                          style="width: 10%"
                          @click="infoWorker(d.phone)"
                        >
                          ติดต่อ
                        </button>
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
  </div>
</template>

<script lang="ts">
import "bulma/css/bulma.css";
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Worker from "@/models/Worker";
import Swal from "sweetalert2";

export default defineComponent({
  name: "App",

  setup() {
    const router = useRouter();
    const route = useRoute();

    //def
    const workers = reactive<Worker[]>([]);
    const infoWorker = (pho: string) => {
      Swal.fire({
        title: "เบอร์โทรศัพท์ ",
        text: "" + pho,
        icon: "info",
        confirmButtonColor: "hsl(141, 50%, 48%)",
      });
    };
    const submitAdd = () => {
      Swal.fire({
        title: "เพิ่มพนักงาน?",
        icon: "success",
        confirmButtonColor: "hsl(141, 50%, 48%)",
      }).then((result) => {
        if (result.isConfirmed) {
          let get_workers: Worker[] = [
        {
          id: 6,
          firstName: "นาง ccc",
          lastName: "ccc",
          position: "บัญชี",
          phone: "xxx-xxxxxxx",
        },
      ];

      get_workers.forEach((d) => {
        workers.push(d);
      });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "ทำการเพิ่มพนักงานเรียบร้อย",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };
    const isReport = ref<boolean>(false);
    onMounted(() => {
      let get_workers: Worker[] = [
        {
          id: 1,
          firstName: "นาย xxx",
          lastName: "xxx",
          position: "ช่างปูน",
          phone: "xxx-xxxxxxx",
        },
        {
          id: 2,
          firstName: "นาย yyy",
          lastName: "yyy",
          position: "สถาปัตย์",
          phone: "xxx-xxxxxxx",
        },
        {
          id: 3,
          firstName: "นาย zzz",
          lastName: "zzz",
          position: "วิศวะ",
          phone: "xxx-xxxxxxx",
        },
        {
          id: 4,
          firstName: "นาย aaa",
          lastName: "aaa",
          position: "ช่างเชื่อม",
          phone: "xxx-xxxxxxx",
        },
        {
          id: 5,
          firstName: "นาย bbb",
          lastName: "bbb",
          position: "ช่างมัน",
          phone: "xxx-xxxxxxx",
        },
      ];

      get_workers.forEach((d) => {
        workers.push(d);
      });
    });

    return {
      router,
      route,
      workers,
      infoWorker,
      isReport,
      submitAdd,
      activeTab: "workers",
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
.company-card {
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  background-color: #ffffff;
}
</style>