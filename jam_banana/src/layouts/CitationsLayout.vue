<template>
    <div style="margin-bottom: 50px" class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>
    <h5 style="text-align: center">Ici, des citations à afficher.</h5>
    <div align="center" class="text-body2">
        J'aimerai bien 20 citations minimum, placées dans un tableau en behind et qui appelle en random une citation a chaque fois qu'on appuie sur le bouton.
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
