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
    // bt = false
    // sd_bt = false
    // thd_bt = false
    // frt_bt = false
    // fft_bt = false
    // sxt_bt = false
    // svn_bt = false
    // hgt_bt = false
    // nin_bt = false
    // ten_bt = false
    const router = useRouter()
    return {
      prevPage: () => {
        return router.push({ path: '/' })
      }
      // bt_clicked: () => {
      //   bt = true
      //   return bt
      // },
      // sd_bt_clicked: () => {
      //   sd_bt = true
      //   return sd_bt
      // },
      // thd_bt_clicked: () => {
      //   thd_bt = true
      //   return thd_bt
      // },
      // frt_bt_clicked: () => {
      //   frt_bt = true
      //   return frt_bt
      // },
      // fft_bt_clicked: () => {
      //   fft_bt = true
      //   return fft_bt
      // },
      // sxt_bt_clicked: () => {
      //   sxt_bt = true
      //   return sxt_bt
      // },
      // svn_bt_clicked: () => {
      //   svn_bt = true
      //   console.log(svn_bt)
      //   return svn_bt
      // },
      // hgt_bt_clicked: () => {
      //   hgt_bt = true
      //   return hgt_bt
      // },
      // nin_bt_clicked: () => {
      //   nin_bt = true
      //   return nin_bt
      // },
      // ten_bt_clicked: () => {
      //   ten_bt = true
      //   return ten_bt
      // }
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
