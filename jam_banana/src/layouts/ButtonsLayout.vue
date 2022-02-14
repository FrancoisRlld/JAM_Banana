<template>
    <div style="margin-bottom: 50px" class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>
    <div>
      <q-btn class="button_pos"></q-btn>
      <q-btn class="button_pos_sd"></q-btn>
      <q-btn class="button_pos_thd"></q-btn>
      <q-btn class="button_pos_frt"></q-btn>
      <q-btn class="button_pos_fft"></q-btn>
      <q-btn class="button_pos_sxt"></q-btn>
      <q-btn class="button_pos_svn"></q-btn>
      <q-btn class="button_pos_hgt"></q-btn>
      <q-btn class="button_pos_nin"></q-btn>
      <q-btn class="button_pos_ten"></q-btn>
    </div>
</template>

<script>

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CitationsLayout',
  setup () {
    const router = useRouter()
    return {
      prevPage: () => {
        return router.push({ path: '/' })
      }
    }
  }
})
</script>

<style lang="scss">
  .button_pos {
    color: #11db2c;
    position: relative;
    width: 200px;
    height: 200px;
    top: 100px;
    left: 100px;
  }
  .button_pos_sd {
    color: #116fdb;
    position: relative;
    width: 100px;
    height: 100px;
    top: falsepx;
    left: 400px;
  }
  .button_pos_thd {
    color: #000000;
    position: relative;
    width: 200px;
    height: 200px;
    top: 100px;
    left: 600px;
  }
  .button_pos_frt {
    color: #d111db;
    position: relative;
    width: 100px;
    height: 100px;
    top: 0px;
    left: 850px;
  }
  .button_pos_fft {
    color: #db6211;
    position: relative;
    width: 200px;
    height: 200px;
    top: 200px;
    right: 100px;
  }
  .button_pos_sxt {
    color: #e9be11;
    position: relative;
    width: 100px;
    height: 100px;
    top: 100px;
    left: 400px;
  }
  .button_pos_svn {
    color: #ff0000;
    position: relative;
    width: 100px;
    height: 100px;
    top: 300px;
    left: 0px;
  }
  .button_pos_hgt {
    color: #ff3be8;
    position: relative;
    width: 100px;
    height: 100px;
    top: 400px;
    right: 500px;
  }
  .button_pos_nin {
    color: #00e5ff;
    position: relative;
    width: 200px;
    height: 200px;
    top: 400px;
    right: 900px;
  }
  .button_pos_ten {
    color: #f2ff00;
    position: relative;
    width: 200px;
    height: 200px;
    top: 200px;
    left: 1200px;
  }
</style>
