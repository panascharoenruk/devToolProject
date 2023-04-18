<template>
  <section>
    <nav class="navbar is-transparent is-warning" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <p> REAL ESTATE</p>
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          
        </div>
        <div class="navbar-end">
          <!-- ของคนหางาน -->

          <div class="navbar-item">
            <div class="buttons">

            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
  <router-view />
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import "primeicons/primeicons.css";

export default defineComponent({
    setup() {

        const store = useStore();
        const router = useRouter();
        const logout = () => {
          localStorage.removeItem('token');
          store.commit("LOGOUT");
          router.push("/")
        }

        return {
          logout, store
        }
    },
})
</script>


<style>
@import 'bulma/css/bulma.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* background-color: black;; */
  /* display: flex;
  flex-direction: column; */
}
</style>
