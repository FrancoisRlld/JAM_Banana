<template>
    <div style="margin-bottom: 50px" class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>
    <div class="text-h5" style="text-align: center">
        <p>Find the Legendary Banana hide among the Evil Bananas</p>
        <p>Be carefull, you have only ONE try</p>
    </div>
    <div class="row">
        <div class="col">
            <q-img @click="looseBanana" src="../assets/bananas/1.jpg" style="max-height: 397px"></q-img>
        </div>
        <div class="col">
            <q-img @click="looseBanana" src="../assets/bananas/2.jpg" style="max-height: 397px"></q-img>
        </div>
        <div class="col">
            <q-img @click="winBanana" src="../assets/bananas/3.jpg" style="max-height: 397px"></q-img>
        </div>
    </div>
    <br><br>
    <div class="row">
        <div class="col">
            <q-img @click="looseBanana" src="../assets/bananas/4.jpg" style="max-height: 397px"></q-img>
        </div>
        <div class="col">
            <q-img @click="looseBanana" src="../assets/bananas/5.jpg" style="max-height: 397px"></q-img>
        </div>
        <div class="col">
            <q-img @click="looseBanana" src="../assets/bananas/6.jpg" style="max-height: 397px"></q-img>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SuccessLayout',
  setup () {
    const router = useRouter()
    return {
      prevPage: () => {
        return router.push({ path: '/success' })
      },
      looseBanana: () => {
        alert('You have failed, too bad !')
        alert('You are not a SuccessMaster at all, you need to read the first page more accurently')
        return router.push({ path: '/' })
      },
      winBanana: () => {
        alert('You are nearly a SuccessMaster, well done !')
        alert('Ooooooh Nooooo, I\'ve just checked, your payment of 150 bitcoins has not been SUCCESSFULL, you are not a SuccessMaster at all, you are too poor :/')
        return router.push({ path: '/' })
      }
    }
  }
})
</script>
