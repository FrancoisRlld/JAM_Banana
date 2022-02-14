<template>
    <div style="margin-bottom: 50px" class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>
    <div class="text-center">
        <h4>The Sacred Gorilla needs you ! Find the Legendary Banana for Him !</h4>
        <div style="margin-top: 50px">
            <q-img :ratio="16/9" src='../assets/images/13.png'/>
        </div>
        <div>
            <q-btn-group push style="margin-top: 150px">
                <q-btn color="yellow" glossy text-color="black" push label="Choice 1" icon="visibility" @click="gorillaAttempt"/>
                <q-btn color="amber" glossy text-color="black" push label="Choice 2" icon="visibility" @click="gorillaAttempt"/>
                <q-btn color="orange" glossy text-color="black" push label="Choice 3" icon="visibility" @click="gorillaAttempt"/>
            </q-btn-group>
        </div>
        <div style="margin-top: 20px">
            <p class="text-subtitle1 text-bold">But, where can it be ?</p>
        </div>
    </div>
    <div style="margin-top: 20px">
        <p>Hint : It can be anywhere in this page.</p>
        <p style="margin-top: -20px">Wait ! Is it really on this page ?</p>
    </div>

</template>

<script>

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'GorillaLayout',

  setup () {
    const router = useRouter()
    return {
      getsuccess: true,
      prevPage: () => {
        return router.push({ path: '/success' })
      }
    }
  },
  methods: {
    gorillaAttempt: () => {
      alert('Too Bad, the Legendary Banana isn\'t here !')
    }
  }
})
</script>
