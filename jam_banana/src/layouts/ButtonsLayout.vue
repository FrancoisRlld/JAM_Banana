<template>
    <div style="margin-bottom: 50px" class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>
    <h5 style="text-align: center">Ici, des bouttons à afficher.</h5>
    <div align="center" class="text-body2">
        <p>J'aimerai qu'ils soient nombreux et dans tous les sens. J'aimerai aussi qu'ils soient liés aux succès (de manière évidente)</p>
        <p class="text-bold">Il est 5h04 du matin ptn, franchement je commence à être vraiment trop saoulé</p>
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
